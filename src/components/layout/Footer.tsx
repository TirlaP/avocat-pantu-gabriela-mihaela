import { Link } from 'react-router-dom'
import { practiceAreas } from '../../lib/practiceAreas'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from '../common/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#800000] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Logo variant="white" />
            <p className="text-gray-300">
              Cabinet Avocat Panțu Gabriela Mihaela oferă servicii juridice de înaltă calitate pentru clienți din România. Cu experiența noastră, vă putem ajuta să navigați prin complexitățile sistemului juridic.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#d4b97d] transition-colors inline-block">Acasă</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#d4b97d] transition-colors inline-block">Despre Noi</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#d4b97d] transition-colors inline-block">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#d4b97d] transition-colors inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Domenii de Practică</h3>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 5).map(area => (
                <li key={area.slug}>
                  <Link 
                    to={`/${area.slug}`} 
                    className="text-gray-300 hover:text-[#d4b97d] transition-colors inline-block"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Contact</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[#d4b97d] mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Bd. Independenței nr.2A, bl.H3, ap.13, Târgoviște, România
                </span>
              </li>
              
              <li className="flex items-center">
                <Phone className="text-[#d4b97d] mr-3 flex-shrink-0" size={18} />
                <a href="tel:0785275157" className="text-gray-300 hover:text-[#d4b97d] transition-colors">
                  0785 275 157
                </a>
              </li>
              
              <li className="flex items-center">
                <Mail className="text-[#d4b97d] mr-3 flex-shrink-0" size={18} />
                <a href="mailto:pantu.gabriela@gmail.com" className="text-gray-300 hover:text-[#d4b97d] transition-colors">
                  pantu.gabriela@gmail.com
                </a>
              </li>
              
              <li className="flex items-start">
                <Clock className="text-[#d4b97d] mr-3 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <div>Luni-Vineri: 08:30 - 17:30</div>
                  <div>Sâmbătă-Duminică: Închis</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[#660000] py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif mb-6 text-white">Seriozitate, Integritate, Loialitate</h3>
          <p className="max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Suntem un cabinet de avocatură pentru care interesele clienților și rezultatele
            primează în fața oricăror alte aspecte. Pentru atingerea rezultatelor propuse,
            depunem toate eforturile în vederea identificării și valorificării celor mai eficiente
            metode legale.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#500000] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cabinet Avocat Panțu Gabriela Mihaela. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6">
            <Link to="/termeni-si-conditii" className="text-gray-200 hover:text-[#d4b97d] transition-colors text-sm">
              Termeni și Condiții
            </Link>
            <Link to="/politica-de-confidentialitate" className="text-gray-200 hover:text-[#d4b97d] transition-colors text-sm">
              Politica de Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer