interface SectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  id?: string
  bgColor?: string
}

const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = "", 
  id,
  bgColor = "bg-white" 
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
        </div>
        
        {children}
      </div>
    </section>
  )
}

export default Section
