import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Services from "@/components/Services";
import Audience from "@/components/Audience";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <Services />
      <Audience />
      <Gallery />
      <Contact />
    </>
  );
}