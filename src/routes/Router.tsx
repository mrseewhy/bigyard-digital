import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ServicesPage from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import CaseStudy from "../pages/Casestudy";
import NotFound from "../pages/Notfound";



export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "services", element: <ServicesPage /> },
            // Inside MainLayout children:
            { path: "work", element: <Portfolio /> },
            { path: "work/:slug", element: <CaseStudy /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },
        ]
    },

])