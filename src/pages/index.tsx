import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Biography from "@/components/Biography";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Tecnologies from "@/components/Tecnologies";
import Contact from "@/components/Contact";
import MediumFeed from "@/components/MediumFeed";

export default function Home() {
    return (
        <>
            <Head>
                <title>Raphael Batista Fontão</title>
            </Head>

            <Header />

            <main>
                <Hero />
                <Biography />
                <Skills />
                <Projects />
                <MediumFeed />
                <Tecnologies />
                <Contact />
            </main>

            <Footer />
        </>
    )
}
