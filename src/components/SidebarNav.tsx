import { NavLink } from 'react-router-dom'
import { PracticeArea } from '../lib/practiceAreas'
import { Link } from 'react-router-dom'

interface SidebarNavProps {
  areas: PracticeArea[]
  currentSlug: string
}

const SidebarNav = ({ areas, currentSlug }: SidebarNavProps) => {
  return (
    <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-serif font-semibold text-[#800000] mb-4">Domenii de Practică</h3>
      <nav>
        <ul className="space-y-1">
          {areas.map(area => (
            <li key={area.slug}>
              <NavLink
                to={`/${area.slug}`}
                className={({ isActive }) =>
                  `block py-2 border-l-2 pl-3 transition-colors ${
                    isActive
                      ? 'border-[#d4b97d] text-[#800000] font-medium bg-[#800000]/5'
                      : 'border-transparent text-gray-600 hover:text-[#800000] hover:border-[#d4b97d]/30 hover:bg-gray-50'
                  }`
                }
              >
                {area.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-sm border border-[#d4b97d]/20">
        <h4 className="text-[#800000] font-medium mb-2">Nevoie de consultanță juridică?</h4>
        <p className="text-gray-600 text-sm mb-3">Programează o consultație și discută despre cazul tău cu un avocat specializat.</p>
        <Link
          to="/contact"
          className="block w-full bg-[#d4b97d] hover:bg-[#c7a55c] text-[#44331a] text-center font-medium px-4 py-2 rounded-sm transition-colors shadow-sm"
        >
          Contactează-ne
        </Link>
      </div>
    </div>
  )
}

export default SidebarNav