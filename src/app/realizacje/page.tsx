import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Realizacje from '@/components/Realizacje';

export const metadata = {
  title: 'Realizacje | BT-Styl Szczecin',
  description: 'Ponad 500 zrealizowanych montaży okien, drzwi i rolet w Szczecinie i okolicach. Zobacz nasze przykładowe realizacje.',
};

export default function RealizacjePage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <Realizacje />
      </main>
      <Footer />
    </>
  );
}
