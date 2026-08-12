import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import OfertaSkrot from '@/components/OfertaSkrot';
import ONasSkrot from '@/components/ONasSkrot';
import PoradySkrot from '@/components/PoradySkrot';
import RealizacjeSkrot from '@/components/RealizacjeSkrot';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import Aktualnosci from '@/components/Aktualnosci';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OfertaSkrot />
        <ONasSkrot />
        <PoradySkrot />
        <RealizacjeSkrot />
        <Partners />
        <Testimonials />
        <Aktualnosci />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
