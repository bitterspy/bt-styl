import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Oferta from '@/components/Oferta';
import Porady from '@/components/Porady';
import WhyUs from '@/components/WhyUs';
import Realizacje from '@/components/Realizacje';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
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
        <Oferta />
        <WhyUs />
        <Porady />
        <Realizacje />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
