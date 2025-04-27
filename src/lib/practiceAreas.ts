import { 
  Scale, 
  Users, 
  Home, 
  FileText, 
  Briefcase 
} from 'lucide-react'

export interface PracticeArea {
  id: number
  title: string
  slug: string
  shortDescription: string
  icon: React.ElementType
  longDescription: string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    title: 'Drept Civil',
    slug: 'drept-civil',
    shortDescription: 'Reprezentare juridică în cauze civile, inclusiv contracte, proprietăți și obligații.',
    icon: Scale,
    longDescription: [
      'Dreptul civil este una dintre cele mai importante ramuri ale dreptului, reprezentând totalitatea normelor juridice care reglementează raporturile patrimoniale și nepatrimoniale dintre persoane fizice și juridice aflate pe poziții de egalitate juridică.',
      'Cabinetul nostru vă oferă asistență și reprezentare juridică în următoarele domenii ale dreptului civil:',
      '- Drepturi reale (proprietate, uzufruct, servitute, superficie, etc.)',
      '- Contracte civile (vânzare-cumpărare, locațiune, mandat, etc.)',
      '- Succesiuni și donații',
      '- Răspundere civilă delictuală și contractuală',
      '- Acțiuni în revendicare și acțiuni posesorii',
      '- Partaj judiciar',
      '- Acțiuni în constatare și în grănițuire',
      'Experiența noastră în domeniul dreptului civil ne permite să oferim soluții eficiente și personalizate pentru fiecare client, indiferent de complexitatea cazului.'
    ],
  },
  {
    id: 2,
    title: 'Dreptul Familiei',
    slug: 'dreptul-familiei',
    shortDescription: 'Consultanță și reprezentare în divorțuri, custodie, pensii alimentare și adopții.',
    icon: Users,
    longDescription: [
      'Dreptul familiei reprezintă totalitatea normelor juridice care reglementează relațiile personale și patrimoniale dintre soți, părinți și copii, precum și dintre alte persoane care, potrivit legii, au drepturi și obligații familiale.',
      'Cabinetul nostru oferă servicii complete în domeniul dreptului familiei, inclusiv:',
      '- Divorț pe cale amiabilă sau prin procedură contencioasă',
      '- Stabilirea custodiei minorilor',
      '- Stabilirea domiciliului minorilor',
      '- Stabilirea și modificarea pensiei de întreținere',
      '- Stabilirea programului de vizită',
      '- Exercitarea autorității părintești',
      '- Proceduri de adopție',
      '- Nume și schimbarea numelui',
      'Abordăm fiecare caz cu sensibilitatea și discreția necesare, având în vedere impactul emoțional pe care problemele familiale îl pot avea asupra clienților noștri.'
    ],
  },
  {
    id: 3,
    title: 'Drept Imobiliar',
    slug: 'drept-imobiliar',
    shortDescription: 'Asistență juridică în tranzacții imobiliare, conflicte de proprietate și urbanism.',
    icon: Home,
    longDescription: [
      'Dreptul imobiliar cuprinde totalitatea normelor juridice care reglementează raporturile juridice privind bunurile imobile, transferul drepturilor asupra acestora, precum și litigiile care pot apărea în legătură cu proprietățile imobiliare.',
      'Oferim asistență juridică completă în următoarele aspecte ale dreptului imobiliar:',
      '- Redactarea și verificarea antecontractelor și contractelor de vânzare-cumpărare',
      '- Consultanță juridică în cadrul tranzacțiilor imobiliare',
      '- Reprezentare în litigii privind evacuarea, revendicarea imobilelor',
      '- Acțiuni în grănițuire și acțiuni posesorii',
      '- Probleme legate de servituți și alte drepturi reale',
      '- Partaj judiciar',
      '- Consultanță în probleme de urbanism și construcții',
      '- Expropriere și despăgubiri',
      'Experiența noastră în acest domeniu vă garantează siguranța juridică necesară în tranzacțiile imobiliare și în rezolvarea disputelor legate de proprietăți.'
    ],
  },
  {
    id: 4,
    title: 'Drept Succesoral',
    slug: 'drept-succesoral',
    shortDescription: 'Consultanță în procese de succesiune, testamente și partaj succesoral.',
    icon: FileText,
    longDescription: [
      'Dreptul succesoral reglementează transmiterea patrimoniului unei persoane decedate (defunct) către una sau mai multe persoane în viață.',
      'Cabinetul nostru vă oferă asistență juridică specializată în toate aspectele legate de moșteniri:',
      '- Consultanță privind deschiderea procedurii succesorale',
      '- Reprezentare în procedura succesorală notarială',
      '- Acțiuni în constatarea calității de moștenitor',
      '- Redactarea testamentelor și contestarea acestora',
      '- Acțiuni în reducțiunea liberalităților excesive',
      '- Acțiuni în anularea actelor de acceptare sau renunțare la succesiune',
      '- Partaj succesoral pe cale amiabilă sau judiciară',
      '- Petiție de ereditate',
      'Abordăm fiecare caz cu profesionalism și empatie, înțelegând că problemele succesorale apar într-un moment dificil pentru familii.'
    ],
  },
  {
    id: 5,
    title: 'Dreptul Muncii',
    slug: 'dreptul-muncii',
    shortDescription: 'Reprezentare în litigii de muncă, negocieri contractuale și consultanță pentru angajatori.',
    icon: Briefcase,
    longDescription: [
      'Dreptul muncii reprezintă ansamblul normelor juridice care reglementează relațiile individuale și colective de muncă, precum și protecția socială a salariaților.',
      'Cabinetul nostru oferă servicii juridice complete atât pentru angajați, cât și pentru angajatori:',
      '- Redactarea și verificarea contractelor individuale de muncă',
      '- Concedieri și demiteri',
      '- Negocierea și încheierea contractelor colective de muncă',
      '- Reprezentare în litigii de muncă (concedieri abuzive, drepturi salariale, etc.)',
      '- Consultanță privind timpul de muncă și de odihnă, salarizare',
      '- Accidente de muncă și boli profesionale',
      '- Contestații împotriva deciziilor de sancționare',
      '- Consultanță privind regulamentele interne și procedurile disciplinare',
      'Ne străduim să oferim soluții echilibrate, care să respecte atât drepturile angajaților, cât și interesele legitime ale angajatorilor.'
    ],
  },
]
