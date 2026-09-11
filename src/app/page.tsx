import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Promo />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}