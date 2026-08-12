import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Oferta from '@/components/Oferta';

export const metadata = {
  title: 'Oferta | BT-Styl Szczecin',
  description: 'Okna PCV, drzwi tarasowe i balkonowe, drzwi zewnętrzne Martom oraz rolety — pełna oferta salonu firmowego AdamS w Szczecinie.',
};

export default function OfertaPage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-20">
        <Oferta />
      </main>
      <Footer />
    </>
  );
}
