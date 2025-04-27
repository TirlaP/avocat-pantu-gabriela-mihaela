import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Clock, Mail } from 'lucide-react'
import { practiceAreas } from '../../lib/practiceAreas'
import Logo from '../common/Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isPracticeDropdownOpen) setIsPracticeDropdownOpen(false)
  }

  const togglePracticeDropdown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsPracticeDropdownOpen(!isPracticeDropdownOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#800000] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              <a href="tel:0785275157" className="hover:text-secondary transition-colors">
                0785 275 157
              </a>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <Clock size={16} className="mr-2" />
              <span>Luni-Vineri: 08:30 - 17:30</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Mail size={16} className="mr-2" />
            <a href="mailto:pantu.gabriela@gmail.com" className="hover:text-secondary transition-colors">
              pantu.gabriela@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div 
        className={`bg-white shadow-md py-4 px-4 transition-all duration-200 ${isScrolled ? 'sticky top-0 shadow-lg' : ''}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium" : "text-gray-700 hover:text-[#800000] transition-colors"
              }
            >
              Acasă
            </NavLink>

            <div className="relative group">
              <a 
                href="#" 
                className="text-gray-700 hover:text-[#800000] transition-colors flex items-center"
                onClick={togglePracticeDropdown}
              >
                Domenii de Practică
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-sm py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {practiceAreas.map(area => (
                  <NavLink 
                    key={area.slug}
                    to={`/${area.slug}`}
                    className={({ isActive }) => 
                      `block px-4 py-2 ${isActive ? "bg-[#800000]/10 text-[#800000]" : "hover:bg-gray-50"}`
                    }
                    onClick={() => setIsPracticeDropdownOpen(false)}
                  >
                    {area.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink 
              to="/about"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium" : "text-gray-700 hover:text-[#800000] transition-colors"
              }
            >
              Despre Noi
            </NavLink>

            <NavLink 
              to="/blog"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium" : "text-gray-700 hover:text-[#800000] transition-colors"
              }
            >
              Blog
            </NavLink>

            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium" : "text-gray-700 hover:text-[#800000] transition-colors"
              }
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="bg-[#800000] text-white px-6 py-2 rounded-sm hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 ml-4 font-medium shadow-md"
            >
              Programare Online
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg absolute w-full z-50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium py-2" : "text-gray-700 py-2"
              }
              onClick={toggleMenu}
            >
              Acasă
            </NavLink>

            <div>
              <a 
                href="#" 
                className="text-gray-700 py-2 flex items-center justify-between"
                onClick={togglePracticeDropdown}
              >
                Domenii de Practică
                <svg 
                  className={`w-3 h-3 transition-transform ${isPracticeDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 12 6" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6 5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {isPracticeDropdownOpen && (
                <div className="mt-2 pl-4 border-l-2 border-gray-200 flex flex-col space-y-2">
                  {practiceAreas.map(area => (
                    <NavLink 
                      key={area.slug}
                      to={`/${area.slug}`}
                      className={({ isActive }) => 
                        `py-1 ${isActive ? "text-[#800000]" : ""}`
                      }
                      onClick={toggleMenu}
                    >
                      {area.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink 
              to="/about"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium py-2" : "text-gray-700 py-2"
              }
              onClick={toggleMenu}
            >
              Despre Noi
            </NavLink>

            <NavLink 
              to="/blog"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium py-2" : "text-gray-700 py-2"
              }
              onClick={toggleMenu}
            >
              Blog
            </NavLink>

            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                isActive ? "text-[#800000] font-medium py-2" : "text-gray-700 py-2"
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="bg-[#800000] text-white px-4 py-3 rounded-sm hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 text-center mt-2 font-medium shadow-md"
              onClick={toggleMenu}
            >
              Programare Online
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header