import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Kontakt | BT-Styl Szczecin',
  description: 'Skontaktuj się z nami — bezpłatna wycena i doradztwo. Salon firmowy BT-Styl, ul. Bagienna 6, Szczecin.',
};

export default function KontaktPage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
