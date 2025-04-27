import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SidebarNav from '../components/SidebarNav'
import { practiceAreas } from '../lib/practiceAreas'
import { Link } from 'react-router-dom'

const PracticeArea = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>()
  const area = practiceAreas.find(area => area.slug === areaSlug)

  if (!area) {
    return <Navigate to="/404" replace />
  }

  const IconComponent = area.icon

  return (
    <>
      <Helmet>
        <title>{area.title} - Cabinet Avocat Panțu Gabriela Mihaela</title>
        <meta name="description" content={`Servicii juridice în domeniul ${area.title.toLowerCase()}. ${area.shortDescription}`} />
        <meta property="og:title" content={`${area.title} - Cabinet Avocat Panțu Gabriela Mihaela`} />
        <meta property="og:description" content={area.shortDescription} />
        <link rel="canonical" href={`https://www.cabinet-avocat-pantu.ro/${area.slug}`} />
      </Helmet>

      <Hero 
        title={area.title}
        subtitle="Asistență juridică specializată și reprezentare profesională"
      />

      <Section 
        title=""
        subtitle=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="order-2 lg:order-1">
            <SidebarNav 
              areas={practiceAreas}
              currentSlug={area.slug}
            />

            <div className="mt-8 bg-[#800000] text-white p-6 rounded-sm shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-4">Aveți nevoie de ajutor?</h3>
              <p className="mb-6">Contactați-ne pentru o consultație inițială și discutați cazul dumneavoastră cu avocații noștri.</p>
              <Link 
                to="/contact"
                className="bg-white text-[#800000] font-medium px-4 py-2 rounded-sm block text-center hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 shadow-md transform hover:translate-y-[-2px]"
              >
                Contactați-ne
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="flex items-center mb-8">
              <div className="text-[#d4b97d] mr-4">
                <IconComponent size={48} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#800000]">{area.title}</h2>
            </div>

            <div className="prose max-w-none">
              {area.longDescription.map((paragraph, index) => (
                <p key={index} className={`text-lg ${index === 0 ? 'mb-6' : 'mb-4'}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 p-6 bg-background rounded-sm border border-gray-200">
              <h3 className="text-xl font-serif font-semibold mb-4">Cum vă putem ajuta?</h3>
              <p className="mb-6">
                Indiferent de complexitatea cazului dumneavoastră, suntem pregătiți să vă oferim asistența juridică necesară în domeniul {area.title.toLowerCase()}.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center text-[#800000] font-medium hover:text-[#d4b97d] transition-colors"
              >
                Programați o consultație
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PracticeArea
