interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  image?: string
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="mb-6 text-secondary">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M10.667 25.3333V16H5.33366V21.3333C5.33366 23.5333 7.13366 25.3333 9.33366 25.3333H10.667ZM22.667 25.3333V16H17.3337V21.3333C17.3337 23.5333 19.1337 25.3333 21.3337 25.3333H22.667Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <p className="text-lg mb-8 italic font-serif relative z-10">{quote}</p>
      
      <div className="flex items-center relative z-10">
        {image ? (
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-secondary shadow-md">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 text-xl font-bold">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-lg">{author}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
