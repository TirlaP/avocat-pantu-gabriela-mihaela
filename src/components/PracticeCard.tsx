import { Link } from 'react-router-dom'

interface PracticeCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  slug: string
}

const PracticeCard = ({ title, description, icon, slug }: PracticeCardProps) => {
  return (
    <Link 
      to={`/${slug}`}
      className="group block bg-white p-6 rounded-sm shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
      
      {icon && (
        <div className="text-secondary mb-4 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
        Află mai multe
        <svg className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}

export default PracticeCard
