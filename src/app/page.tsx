import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <History />
        <Stories />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
