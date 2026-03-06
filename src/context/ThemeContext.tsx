import { createContext, useContext, useEffect, useState } from "react";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    dark: boolean;           // convenience boolean for conditional classes
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const STORAGE_KEY = "bigyard-theme";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** Read saved preference from localStorage */
function getSavedTheme(): Theme | null {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
        return null;
    } catch {
        // localStorage unavailable (SSR / private browsing edge case)
        return null;
    }
}

/** Read the OS/browser preferred color scheme */
function getSystemTheme(): Theme {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

/** Determine the initial theme:
 *  1. Saved user preference  → use that
 *  2. No saved preference    → follow system
 */
function getInitialTheme(): Theme {
    return getSavedTheme() ?? getSystemTheme();
}

/** Apply or remove the "dark" class on <html> */
function applyTheme(theme: Theme) {
    const root = document.documentElement;
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
}

// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    dark: false,
    toggleTheme: () => { },
    setTheme: () => { },
});

// ─────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);

    // Apply class + save to localStorage whenever theme changes
    useEffect(() => {
        applyTheme(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // fail silently
        }
    }, [theme]);

    // Listen for OS theme changes — only applies if user has NO saved preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemChange = (e: MediaQueryListEvent) => {
            // Only follow system if user hasn't manually set a preference
            const saved = getSavedTheme();
            if (!saved) {
                setThemeState(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleSystemChange);
        return () => mediaQuery.removeEventListener("change", handleSystemChange);
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    const toggleTheme = () => {
        setThemeState(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                dark: theme === "dark",
                toggleTheme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────
export const useTheme = () => useContext(ThemeContext);