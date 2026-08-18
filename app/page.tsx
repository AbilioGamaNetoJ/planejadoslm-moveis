import { Contact } from "@/src/components/Contact";
import { FloatingWhatsApp } from "@/src/components/FloatingWhatsApp";
import { Footer } from "@/src/components/Footer";
import { Gallery } from "@/src/components/Gallery";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Reviews } from "@/src/components/Reviews";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
