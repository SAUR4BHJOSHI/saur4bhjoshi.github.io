import { useState } from "react";
import Loader from "./components/Loader";
import Starfield from "./components/Starfield";
import KiParticles from "./components/KiParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Loader onDone={() => setLoading(false)} />}

            <Starfield />
            <KiParticles />
            <Navbar />
            <main>
                <Hero ready={!loading} />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollTop />
        </>
    );
}
