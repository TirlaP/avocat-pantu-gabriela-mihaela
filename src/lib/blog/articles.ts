export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: "demonstrare-acte-acceptare-tacita-mostenire",
    title: "Actele de acceptare tacită a unei moșteniri",
    excerpt: "Ce reprezintă actele de acceptare tacită a unei moșteniri și când plata taxelor și impozitelor valorează acceptare tacită.",
    content: `
      <p>Deseori sunt dificil de demonstrat în instanță actele de acceptare tacită a unei moșteniri.</p>
      <p>Plata taxelor și impozitelor aferente unui imobil bun succesoral nu valorează acceptare tacită dacă nu se completează și cu alte acte în sensul prevăzut de lege.</p>
      <p>Sunt persoane aflate în imposibilitatea de a se prezenta la locul situării imobilului respectiv și/sau în imposibilitatea de a acționa în vreun fel pentru a efectua acte cu valoare de acceptare tacită a succesiunii.</p>
    `,
    date: "30 Iunie 2021",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Drept Succesoral"
  },
  {
    id: 2,
    slug: "asistenta-juridica-gratuita-tineri-casatorie",
    title: "Asistență juridică gratuită pentru tinerii care vor să se căsătorească",
    excerpt: "Cabinet Avocat Panțu Gabriela Mihaela oferă asistență juridică gratuită tinerilor care planifică să se căsătorească.",
    content: `
      <p>De douã ori pe lunã cabinetul nostru acordă asistență juridică gratuită unui cuplu de tineri care vor să se căsătorească.</p>
      <p>Sesiunea pro bono durează o oră și se referă la repere juridice importante privind căsătoria și situația juridică a copiilor.</p>
      <p>Cabinetul nostru consideră că informarea ajută la prevenirea situațiilor litigioase cu efecte dezastruoase asupra copiilor și contribuie la o mai bună gestionare a eventualelor crize conjugale.</p>
    `,
    date: "29 Ianuarie 2021",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Familiei"
  },
  {
    id: 3,
    slug: "plata-amenzilor-stare-urgenta",
    title: "Informații importante privind plata amenzilor",
    excerpt: "Cum și când se pot plăti amenzile pentru încălcarea prevederilor stării de urgență și procedura de contestare.",
    content: `
      <p>1. Persoanele amendate pentru ȋncălcarea prevederilor stării de urgență pot plăti doar jumătate din valoarea amenzii în termen de 15 zile de la data ȋnmânării/comunicării procesului-verbal de contravenție.</p>
      <p>Termenul de 15 zile în care se poate achita jumătate din amenda aplicată, în situaţia în care procesul-verbal de constatare a contravenţiei este înmânat pe loc persoanei amendate, curge chiar din acea zi.</p>
      <p>Dacă procesul-verbal este comunicat la domiciliu (prin poştă), termenul de 15 zile începe să curgă din ziua primirii comunicării.</p>
      <p>2. Plângerea împotriva procesului-verbal de constatare a contravenţiei şi de aplicare a sancţiunilor suspendă doar executarea plăţii amenzii, dar nu suspendă executarea sancţiunilor contravenţionale complementare aplicate.</p>
      <p>În situaţia în care persoana sancționata pierde procesul şi nu a achitat jumătate din cuantumul amenzii, va achita dupa proces întreaga amendă.</p>
      <p>Plângerea se depune la judecătoria în a cărei circumscripţie a fost săvârşită contravenţia.</p>
      <p>În ceea ce priveşte taxa judiciară de timbru, plângerea împotriva procesului-verbal de constatare şi sancţionare a contravenţiei, precum şi calea de atac împotriva hotărârii pronunţate se taxează cu 20 de lei.</p>
    `,
    date: "12 Aprilie 2020",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Contravenții"
  },
  {
    id: 4,
    slug: "deplasare-minori-strainatate",
    title: "Deplasarea minorilor în străinătate",
    excerpt: "Reguli și excepții privind deplasarea minorilor în străinătate și documentația necesară.",
    content: `
      <p>Pentru minorii, cetățeni români cu domiciliul/reședința în străinătate, care se deplasează însoțiți în statul în care au domiciliul/reședința, nu este necesară prezentarea declarației părinților/tutorilor la ieșirea din România. Dovada domiciliului sau a reședinței în străintate se face cu documente oficiale care atesta acest fapt.</p>
      <p>Dacă minorul respectiv călătorește în altă țară decât în cea în care își are domiciliul sau reședința, atunci este necesară prezentarea declarației părinților/tutorilor la ieșirea din România.</p>
    `,
    date: "26 Septembrie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Familiei"
  },
  {
    id: 5,
    slug: "modificari-codul-muncii-2018",
    title: "Modificări în Codul muncii - Legea nr.88/2018",
    excerpt: "Principalele modificări aduse Codului Muncii prin Legea nr.88/2018 privind aprobarea OUG nr.57/2017.",
    content: `
      <p>În Monitorul Oficial, Partea I nr. 315 din 10 aprilie 2018 a fost publicată Legea nr. 88/2018 privind aprobarea Ordonanței de urgență a Guvernului nr. 53/2017 pentru modificarea si completarea Legii nr. 53/2003 - Codul muncii.</p>
      <p>Principalele modificări aduse Codului Muncii includ:</p>
      <ul>
        <li>Modificarea procedurii de înregistrare a contractelor de muncă</li>
        <li>Noi reglementări privind munca nedeclarată</li>
        <li>Sancțiuni mai severe pentru angajatorii care folosesc muncă nedeclarată</li>
      </ul>
    `,
    date: "3 Mai 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Muncii"
  },
  {
    id: 6,
    slug: "zilieri-oug-114-2018",
    title: "Modificări privind munca necalificată prestată de zilieri",
    excerpt: "OUG nr. 114/2018 aduce schimbări importante în privința muncii necalificate prestate de zilieri.",
    content: `
      <p>OUG nr. 114/2018, în vigoare din 29 decembrie 2018, prevede schimbări în privinţa muncii necalificate prestate de zilieri. Zilierii pot presta muncă necalificată doar în agricultură, silvicultură sau pescuit, potrivit articolului 65 din OUG 114/2018.</p>
      <p>O persoană nu poate presta activități în regim zilier mai mult de 120 de zile în decursul unui an calendaristic, indiferent de numărul de beneficiari de lucrări, cu excepția zilierilor care prestează activități în domeniul agriculturii, creșterii animalelor în sistem extensiv prin pășunatul sezonier al animalelor, în domeniul vitivinicol, pomicol, legumicol, floricol, viticulturii, în conformitate cu prevederile din Clasificarea activităților din economia națională, actualizată, pentru care perioada poate fi de 180 de zile în decursul unui an calendaristic.</p>
    `,
    date: "5 Februarie 2019",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Muncii"
  },
  {
    id: 7,
    slug: "salariul-minim-2019",
    title: "Salariul minim brut pe țară în 2019",
    excerpt: "Hotărârea Nr. 937/2018 stabilește noul salariu minim brut pe țară garantat în plată începând cu 1 ianuarie 2019.",
    content: `
      <p>Conform Hotărârii Nr. 937/2018 pentru stabilirea salariului de bază minim brut pe țară garantat în plată, începând cu data de 1 ianuarie 2019, salariul de bază minim brut pe țară garantat în plată, prevăzut la art. 164 alin. (1) din Legea nr. 53/2003 - Codul muncii, republicată, cu modificările și completările ulterioare, se stabilește în bani, fără a include sporuri și alte adaosuri, la suma de 2.080 lei lunar, pentru un program normal de lucru în medie de 167,333 ore pe lună, reprezentând 12,43 lei/oră.</p>
      <p>Prin excepție, începând cu data de 1 ianuarie 2019, pentru personalul încadrat pe funcții pentru care se prevede nivelul de studii superioare, cu vechime în muncă de cel puțin un an în domeniul studiilor superioare, salariul de bază minim brut pe țară garantat în plată, fără a include sporuri și alte adaosuri, se stabilește la suma de 2.350 lei lunar, pentru un program normal de lucru de 167,333 ore în medie pe lună, reprezentând 14,044 lei/oră.</p>
    `,
    date: "8 Decembrie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Muncii"
  },
  {
    id: 8,
    slug: "reglementare-telemunca",
    title: "Reglementarea activității de telemuncă",
    excerpt: "Legea Nr. 81/2018 privind reglementarea activității de telemuncă aduce noutăți pentru angajați și angajatori.",
    content: `
      <p>Legea Nr. 81/2018 din 30 martie 2018 reglementează modalitatea de desfășurare a activității de către salariați în regim de telemuncă.</p>
      <p>Telemunca reprezintă forma de organizare a muncii prin care salariatul, în mod regulat și voluntar, își îndeplinește atribuțiile specifice funcției, ocupației sau meseriei pe care o deține, în alt loc decât locul de muncă organizat de angajator, folosind tehnologia informației și comunicațiilor.</p>
      <p>Principalele prevederi ale legii includ:</p>
      <ul>
        <li>Obligativitatea încheierii unui contract de muncă specific sau a unui act adițional la contractul individual de muncă existent</li>
        <li>Reglementarea programului de lucru al telesalariatului</li>
        <li>Obligațiile angajatorului privind asigurarea mijloacelor necesare desfășurării telemuncii</li>
        <li>Drepturile și obligațiile specifice telesalariaților</li>
      </ul>
    `,
    date: "1 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Muncii"
  },
  {
    id: 9,
    slug: "gdpr-2018",
    title: "Aplicarea Regulamentului General privind Protecția Datelor (GDPR)",
    excerpt: "Începând cu 25 mai 2018, GDPR devine aplicabil în toate statele membre ale Uniunii Europene.",
    content: `
      <p>Reglementarea cuprinsă în Regulamentul (UE) 2016/679 al Parlamentului European și al Consiliului din 27 aprilie 2016 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date (GDPR), care devine aplicabilă începând cu 25 mai 2018, se adresează tuturor persoanelor care prelucrează astfel de date.</p>
      <p>Principalele aspecte reglementate de GDPR includ:</p>
      <ul>
        <li>Drepturile persoanelor vizate (dreptul la informare, dreptul de acces, dreptul la rectificare, dreptul la ștergerea datelor, etc.)</li>
        <li>Obligațiile operatorilor de date</li>
        <li>Principiile prelucrării datelor cu caracter personal</li>
        <li>Sancțiunile aplicabile în caz de neconformare</li>
      </ul>
    `,
    date: "6 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Protecția Datelor"
  },
  {
    id: 10,
    slug: "impozitare-castiguri-online-2018",
    title: "Impozitarea câștigurilor obținute pe platformele online",
    excerpt: "Începând cu 23 martie 2018, câștigurile de pe platformele online sunt impozitate direct la sursă.",
    content: `
      <p>De la 23 martie 2018, câștigurile de pe platformele online (jocuri de noroc online/pariuri online, festivaluri de poker) sunt impozitate direct la sursă. Câștigurile care au fost obținute în 2017 și cele obținute de la începutul anului și până 23 martie 2018 trebuie declarate prin intermediul noului formular 212, urmând a fi plătite până la 15 martie 2019.</p>
      <p>Noile reglementări presupun:</p>
      <ul>
        <li>Impozitarea la sursă pentru câștigurile realizate după 23 martie 2018</li>
        <li>Obligativitatea declarării câștigurilor anterioare acestei date prin formularul 212</li>
        <li>Aplicarea cotelor de impozitare specifice pentru fiecare tip de câștig</li>
      </ul>
    `,
    date: "17 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Drept Fiscal"
  },
  {
    id: 11,
    slug: "sponsorizari-microintreprinderi-2018",
    title: "Deducerea sponsorizărilor acordate de microîntreprinderi",
    excerpt: "OUG nr. 25/2018 prevede posibilitatea ca microîntreprinderile să deducă din impozit sponsorizările acordate.",
    content: `
      <p>OUG nr. 25/2018, cu aplicare de la 1 aprilie 2018, prevede posibilitatea ca microîntreprinderile să deducă din impozitul pe veniturile obținute sponsorizările pe care le acordă ONG-urilor sau bisericilor. Astfel, firmele pot să deducă până la 20% din impozitul trimestrial pe venituri, începând cu al doilea trimestru din 2018.</p>
      <p>Beneficiile acestei măsuri sunt semnificative atât pentru microîntreprinderi, cât și pentru organizațiile non-profit și lăcașurile de cult, facilitând dezvoltarea sectorului non-profit și promovarea activităților caritabile.</p>
    `,
    date: "26 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Drept Fiscal"
  },
  {
    id: 12,
    slug: "invoirea-angajatului",
    title: "Despre învoirea angajatului",
    excerpt: "Ce spune legea despre învoirea de la locul de muncă și care sunt aspectele importante de știut.",
    content: `
      <p>Invoirea nu este reglementată legal. În Codul Muncii nu avem prevăzut regimul invoirilor de la locul de muncă. Cu toate acestea, în practică, se utilizează învoirea salariatului de la locul de muncă, în baza principiului libertății de voință a părților.</p>
      <p>Aspecte importante de reținut:</p>
      <ul>
        <li>Invoirea reprezintă o înțelegere între angajator și angajat pentru absența temporară de la locul de muncă</li>
        <li>Deși nu este reglementată explicit, invoirea poate fi inclusă în regulamentul intern sau în contractul colectiv de muncă</li>
        <li>Modalitățile de acordare a învoirilor și condițiile de recuperare a orelor pot varia de la un angajator la altul</li>
        <li>Este recomandabilă formalizarea procedurii de învoire pentru evitarea potențialelor conflicte</li>
      </ul>
    `,
    date: "26 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Dreptul Muncii"
  },
  {
    id: 13,
    slug: "dreptul-la-proces-corect",
    title: "Dreptul la un proces corect - Reguli noi care garantează prezumția de nevinovăție",
    excerpt: "Noi reglementări europene privind garantarea prezumției de nevinovăție și dreptul la un proces echitabil.",
    content: `
      <p>Uniunea Europeană a adoptat noi reguli care garantează prezumția de nevinovăție și dreptul la un proces echitabil în cadrul procedurilor penale. Aceste reglementări consolidează drepturile fundamentale ale persoanelor suspectate sau acuzate în cadrul procedurilor penale și asigură respectarea standardelor comune în toate statele membre.</p>
      <p>Principalele prevederi includ:</p>
      <ul>
        <li>Întărirea prezumției de nevinovăție până la dovedirea vinovăției printr-o hotărâre definitivă</li>
        <li>Interzicerea prezentării publice a suspectului sau acuzatului ca fiind vinovat înainte de condamnare</li>
        <li>Respectarea dreptului la tăcere și a dreptului de a nu se autoincrimina</li>
        <li>Asigurarea dreptului de a fi prezent la propriul proces</li>
      </ul>
    `,
    date: "26 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Drept Penal"
  },
  {
    id: 14,
    slug: "citat-einstein",
    title: "Citat: Albert Einstein",
    excerpt: "\"Un om deştept rezolvă problema, un om şi mai deştept o evită.\"",
    content: `
      <p>"Un om deştept rezolvă problema, un om şi mai deştept o evită."</p>
      <p>"A smart man solves the problem, a more intelligent man avoids it."</p>
      <p>- Albert Einstein</p>
    `,
    date: "2 Aprilie 2018",
    author: "Av. Gabriela Mihaela Panțu",
    category: "Citate"
  }
];
