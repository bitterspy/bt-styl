import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyUs from '@/components/WhyUs';

export const metadata = {
  title: 'O nas | BT-Styl Szczecin',
  description: 'Salon firmowy AdamS na systemach VEKA w Szczecinie. Ponad 25 lat doświadczenia w sprzedaży i montażu okien, drzwi i rolet.',
};

export default function ONasPage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
