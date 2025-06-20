import Header from "./components/Header";
import Hero from "./layout/Hero";
import Content from "./layout/Content";
import Persuratan from "./layout/Persuratan";
import PortoNasum from "./layout/PortoNasum";
import GoToTop from "./components/GoToTop";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MainPage() {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Pokdappsdmlh";
        }
    }, [location.pathname]);
    return (
        <>
            <Header />
            <Hero />
            <Content />
            <PortoNasum />
            <Persuratan />
            <GoToTop />
        </>
    )
}