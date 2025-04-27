import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Despre Noi - Cabinet Avocat Panțu Gabriela Mihaela</title>
        <meta name="description" content="Aflați mai multe despre Cabinet Avocat Panțu Gabriela Mihaela, istoria, misiunea și valorile noastre, precum și despre echipa noastră de avocați dedicați." />
        <meta property="og:title" content="Despre Cabinet Avocat Panțu Gabriela Mihaela" />
        <meta property="og:description" content="Istoria, misiunea și valorile Cabinet Avocat Panțu Gabriela Mihaela" />
        <link rel="canonical" href="https://www.cabinet-avocat-pantu.ro/about" />
      </Helmet>

      <Hero 
        title="Despre Cabinet Avocat Panțu Gabriela Mihaela"
        subtitle="Experiență, profesionalism și dedicare în serviciul clienților noștri"
      />

      {/* History Section */}
      <Section 
        title="Istoria Noastră"
        subtitle="O tradiție de excelență în servicii juridice"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Cabinet Avocat Panțu Gabriela Mihaela a fost fondat în [anul] cu misiunea de a oferi servicii juridice de înaltă calitate în Târgoviște și împrejurimi. De-a lungul anilor, ne-am construit reputația pe baza profesionalismului, a atenției la detalii și a abordării personalizate pentru fiecare client.
          </p>
          <p className="text-lg mb-6">
            Cu o experiență de peste 15 ani în domeniul juridic, am reprezentat cu succes clienți în diverse domenii ale dreptului, de la litigii civile și de familie, până la probleme imobiliare și succesorale.
          </p>
          <p className="text-lg">
            Credem cu tărie că fiecare client merită cea mai bună reprezentare juridică posibilă, indiferent de complexitatea cazului sau de miza acestuia. Această credință stă la baza fiecărei acțiuni pe care o întreprindem.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section 
        title="Misiunea Noastră"
        subtitle="Ghidați de principii solide și valori etice"
        bgColor="bg-background"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-10">
            Misiunea noastră este să oferim servicii juridice de cea mai înaltă calitate, adaptate nevoilor specifice ale fiecărui client, într-o manieră etică, profesionistă și eficientă. Ne străduim să construim relații de lungă durată cu clienții noștri, bazate pe încredere, respect și comunicare deschisă.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4">Valorile Noastre</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">Integritate</h4>
              <p>Acționăm întotdeauna cu onestitate și respectăm cele mai înalte standarde etice în toate interacțiunile noastre.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">Excelență</h4>
              <p>Ne străduim constant să ne îmbunătățim și să oferim cele mai bune servicii juridice posibile.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">Respect</h4>
              <p>Tratăm fiecare client, coleg și adversar cu demnitate și respect, indiferent de circumstanțe.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-serif font-semibold mb-2 text-primary">Dedicare</h4>
              <p>Suntem dedicați succesului clienților noștri și depunem toate eforturile pentru a obține cele mai bune rezultate posibile.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Attorney Information */}
      <Section 
        title="Avocații Noștri"
        subtitle="Profesioniști dedicați în serviciul dumneavoastră"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden">
                {/* Placeholder for attorney photo */}
                <img 
              src="/images/owner.jpg" 
              alt="Cabinet Avocat" 
              className="w-full h-auto"
            />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold mb-2">Av. Gabriela Mihaela Panțu</h3>
              <p className="text-muted mb-4">Avocat Titular</p>
              
              <p className="mb-4">
                Cu o experiență vastă în domeniul dreptului, Av. Gabriela Mihaela Panțu s-a specializat în drept civil, dreptul familiei și drept imobiliar.
              </p>
              <p className="mb-4">
                Absolventă a Facultății de Drept din cadrul Universității [Nume Universitate], este membru al Baroului [Nume Barou] din [an].
              </p>
              <p>
                Dedicată clienților săi, Av. Panțu abordează fiecare caz cu profesionalism și empatie, căutând întotdeauna cele mai bune soluții juridice adaptate nevoilor specifice ale fiecărui client.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pro Bono Work */}
      <Section 
        title="Servicii Pro Bono"
        subtitle="Contribuim la comunitatea noastră"
        bgColor="bg-background"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            La Cabinet Avocat Panțu Gabriela Mihaela, credem în importanța de a da înapoi comunității din care facem parte. De aceea, oferim servicii juridice gratuite pentru anumite categorii de persoane și în anumite situații.
          </p>
          <p className="text-lg mb-6">
            De două ori pe lună, cabinetul nostru acordă asistență juridică gratuită unui cuplu de tineri care vor să se căsătorească. Sesiunea pro bono durează o oră și se referă la repere juridice importante privind căsătoria și situația juridică a copiilor.
          </p>
          <p className="text-lg">
            Considerăm că informarea corectă și accesul la consultanță juridică sunt esențiale pentru prevenirea situațiilor litigioase și pentru o mai bună gestiune a eventualelor crize personale și familiale.
          </p>
        </div>
      </Section>
    </>
  )
}

export default About
