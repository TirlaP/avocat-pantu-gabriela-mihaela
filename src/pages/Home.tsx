import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'
import PracticeCard from '../components/PracticeCard'
import TestimonialCard from '../components/TestimonialCard'
import { practiceAreas } from '../lib/practiceAreas'
import { blogArticles } from '../lib/blog/articles'
import { Scale, Shield, Clock, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Home = () => {
  // Get the latest 3 blog articles
  const latestArticles = [...blogArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Cabinet Avocat Panțu Gabriela Mihaela - Servicii Juridice de Calitate</title>
        <meta name="description" content="Cabinet Avocat Panțu Gabriela Mihaela oferă servicii juridice de înaltă calitate în Târgoviște și împrejurimi. Consultanță și reprezentare juridică în drept civil, familial, imobiliar și succesoral." />
        <meta property="og:title" content="Cabinet Avocat Panțu Gabriela Mihaela" />
        <meta property="og:description" content="Servicii juridice de înaltă calitate în Târgoviște" />
        <link rel="canonical" href="https://www.cabinet-avocat-pantu.ro/" />
      </Helmet>

      <Hero 
        layout="overlay"
        title="Servicii juridice"
        animatedText={{
          words: ["care inspiră succes", "care oferă siguranță", "care aduc încredere"]
        }}
        backgroundImage="/images/attorney.svg" 
        cta={{
          text: "Domenii de activitate",
          link: "#practice-areas"
        }}
        quote={{
          text: "Vă oferim asistență juridică pentru a vă rezolva problemele legale, astfel încât să vă puteți concentra pe ceea ce contează pentru dumneavoastră.",
          author: "Av. Gabriela Mihaela Panțu"
        }}
      />

      {/* Practice Areas Section */}
      <Section 
        title="Domenii de Practică"
        subtitle="Specializați în diverse ramuri ale dreptului pentru a vă oferi servicii complete"
        id="practice-areas"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={area.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PracticeCard 
                  title={area.title}
                  description={area.shortDescription}
                  icon={<IconComponent size={32} />}
                  slug={area.slug}
                />
              </div>
            );
          })}
        </div>
      </Section>

      {/* About Section */}
      <Section 
        title="Despre Noi"
        subtitle="Oferim soluții juridice personalizate pentru clienții noștri de peste 15 ani."
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-lg mb-6">
              Cabinetul de Avocat Panțu Gabriela Mihaela a fost înființat cu scopul de a oferi servicii juridice de înaltă calitate, adaptate nevoilor specifice ale fiecărui client. Abordăm fiecare caz cu dedicare, profesionalism și confidențialitate.
            </p>
            <p className="text-lg mb-8">
              De două ori pe lună cabinetul nostru acordă asistență juridică gratuită unui cuplu de tineri care vor să se căsătorească. Sesiunea pro bono durează o oră și se referă la repere juridice importante privind căsătoria și situația juridică a copiilor.
            </p>
            <div className="btn-container">
              <Button asChild className="bg-primary hover:bg-primary-700 text-white">
                <Link to="/about">Află mai multe despre noi</Link>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg animate-fade-up delay-200">
            <img 
              src="/images/owner.jpg" 
              alt="Cabinet Avocat" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section 
        title="De Ce Să Ne Alegeți"
        subtitle="Dedicați excelenței juridice și satisfacției clienților"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 animate-fade-up hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <Scale size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Experiență Vastă</h3>
            <p className="text-gray-600">Peste 15 ani de experiență în reprezentarea clienților în diverse domenii ale dreptului.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 animate-fade-up delay-100 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Profesionalism</h3>
            <p className="text-gray-600">Abordăm fiecare caz cu seriozitate, discreție și respectând cele mai înalte standarde etice.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 animate-fade-up delay-200 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Eficiență</h3>
            <p className="text-gray-600">Soluții juridice prompte și eficiente, adaptate nevoilor și situației specifice a fiecărui client.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 animate-fade-up delay-300 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Comunicare</h3>
            <p className="text-gray-600">Menținem o comunicare constantă și transparentă cu clienții noștri pe parcursul întregului proces.</p>
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section 
        title="Blog Juridic"
        subtitle="Articole și informații juridice utile pentru a fi la curent cu noutățile legislative"
        bgColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 animate-fade-up hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date} • {article.category}</div>
                <h3 className="text-xl font-serif font-semibold mb-3 hover:text-primary transition-colors">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Citește mai mult
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center animate-fade-up delay-300">
          <Button asChild variant="default" className="bg-primary hover:bg-primary-700 text-white">
            <Link to="/blog">Vezi toate articolele</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="Ce Spun Clienții Noștri"
        subtitle="Testimoniale de la persoanele care ne-au acordat încrederea lor"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-up">
            <TestimonialCard 
              quote="Cabinet Avocat Panțu Gabriela Mihaela m-a ajutat să rezolv o dispută complexă de proprietate care dura de ani de zile. Profesionalismul și dedicarea lor au fost remarcabile."
              author="Maria Popescu"
              role="Client, Târgoviște"
            />
          </div>
          
          <div className="animate-fade-up delay-100">
            <TestimonialCard 
              quote="Am apelat la serviciile cabinetului pentru un proces de divorț. Avocații au dat dovadă de empatie și profesionalism, făcând procesul mult mai ușor pentru mine."
              author="Ion Dumitrescu"
              role="Client, Pucioasa"
            />
          </div>
          
          <div className="animate-fade-up delay-200">
            <TestimonialCard 
              quote="Consultanța juridică oferită de Cabinet Avocat Panțu Gabriela Mihaela în probleme legate de succesiune a fost excepțională. Recomand cu încredere!"
              author="Elena Ionescu"
              role="Client, Moreni"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        title="Sunteți Gata Să Începem?"
        subtitle="Contactați-ne pentru o consultație inițială și discutați cazul dumneavoastră cu unul dintre avocații noștri."
        bgColor="bg-primary"
        className="text-white"
      >
        <div className="text-center animate-fade-up">
          <Button asChild variant="secondary" size="lg" className="bg-white hover:bg-secondary text-primary hover:text-white">
            <Link to="/contact">Programare Online</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

export default Home
