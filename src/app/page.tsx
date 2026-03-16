import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBreed from "@/components/AboutBreed";
import Zucht from "@/components/Zucht";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutBreed />
        <Zucht />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
