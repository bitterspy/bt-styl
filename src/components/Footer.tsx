import { Phone, Mail, MapPin } from 'lucide-react';
import { contact } from '@/lib/data';
import { LogoSVG } from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0f1f30' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <LogoSVG variant="light" width={200} />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Salon firmowy AdamS na systemach VEKA w Szczecinie.
              Okna PCV, drzwi, rolety. Ponad 25 lat doświadczenia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wide uppercase" style={{ color: '#e8a020' }}>Oferta</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {['Okna PCV', 'Okna Aluminiowe', 'Drzwi Tarasowe', 'Drzwi Zewnętrzne', 'Rolety Zewnętrzne', 'Rolety Screen'].map((item) => (
                <li key={item}>
                  <a href="#oferta" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold mt-6 mb-3 text-sm tracking-wide uppercase" style={{ color: '#e8a020' }}>Firma</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="/marka" className="hover:text-white transition-colors">Materiały reklamowe</a></li>
              <li><a href="#porady" className="hover:text-white transition-colors">Porady i poradniki</a></li>
              <li><a href="#realizacje" className="hover:text-white transition-colors">Realizacje</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wide uppercase" style={{ color: '#e8a020' }}>Kontakt</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#e8a020' }} />
                {contact.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} style={{ color: '#e8a020' }} />
                <a href={`tel:+48${contact.phone.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} style={{ color: '#e8a020' }} />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="text-xs mt-2 pt-2 border-t border-white/10">
                <span className="block">{contact.hours.weekdays}</span>
                <span className="block">{contact.hours.saturday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-200">
          <span>© {year} BT-Styl Szczecin. Wszelkie prawa zastrzeżone.</span>
          <span>Salon Firmowy AdamS · System VEKA</span>
        </div>
      </div>
    </footer>
  );
}
