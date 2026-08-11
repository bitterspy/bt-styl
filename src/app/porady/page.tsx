import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Porady from '@/components/Porady';

export const metadata = {
  title: 'Porady i poradniki | BT-Styl Szczecin',
  description: 'Praktyczna wiedza o oknach, montażu i eksploatacji — zebrana przez naszych specjalistów z 25-letnim doświadczeniem.',
};

export default function PoradyPage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-24">
        <Porady />
      </main>
      <Footer />
    </>
  );
}
