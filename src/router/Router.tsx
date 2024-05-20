import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import TeamPage from "../pages/TeamPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "service",
                element: <ServicePage />
            },
            {
                path: "team",
                element: <TeamPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
])