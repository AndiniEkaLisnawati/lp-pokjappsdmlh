import Header from "./components/Header";
import Hero from "./layout/Hero";
import Content from "./layout/Content";
import Persuratan from "./layout/Persuratan";
import PortoNasum from "./layout/PortoNasum";
import GoToTop from "./components/GoToTop";

export default function MainPage() {
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