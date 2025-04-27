import { Link } from 'react-router-dom'

interface HeroProps {
  title?: string
  subtitle?: string
  cta?: {
    text: string
    link: string
  }
  animatedText?: {
    prefix?: string
    words: string[]
    suffix?: string
  }
  backgroundImage?: string
  image?: string
  imageAlt?: string
  layout?: 'centered' | 'split' | 'overlay'
  quote?: {
    text: string
    author: string
  }
}

const Hero = ({ 
  title, 
  subtitle,
  animatedText,
  cta, 
  backgroundImage, 
  image,
  imageAlt = 'Cabinet Avocat Panțu Gabriela Mihaela',
  layout = 'centered',
  quote
}: HeroProps) => {
  const isSplit = layout === 'split' && image;
  const isOverlay = layout === 'overlay';

  // Default background color if no image provided
  const bgColorClass = backgroundImage ? "" : "bg-[#800000]";
  
  return (
    <section 
      className={`relative overflow-hidden ${isSplit ? 'py-0' : 'py-20 md:py-24'} ${isOverlay ? 'min-h-[600px] flex items-center' : ''} ${bgColorClass}`}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {/* Customizable overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-[#800000]/60 opacity-95"></div>
      
      {isOverlay && (
        // Overlay layout (gavel and text like in image 1)
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white max-w-xl mb-12 md:mb-0 animate-fade-up pb-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              {title && <div className="mb-3">{title}</div>}
              {animatedText && (
                <div className="min-h-[72px]">
                  {animatedText.prefix && <span>{animatedText.prefix} </span>}
                  <span className="text-white opacity-80 animate-text-cycle relative inline-block">
                    {animatedText.words.map((word, index) => (
                      <span 
                        key={index}
                        className={index === 0 ? "relative" : "absolute top-0 left-0"}
                        style={{animationDelay: `${index * 3}s`}}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                  {animatedText.suffix && <span> {animatedText.suffix}</span>}
                </div>
              )}
            </h1>
            {subtitle && <p className="text-xl mb-8 text-white/90">{subtitle}</p>}
            
            {cta && (
              <div className="mt-6">
                <Link 
                  to={cta.link} 
                  className="bg-white text-[#800000] hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 py-3 px-8 rounded-sm font-medium inline-block shadow-lg transform hover:translate-y-[-2px]"
                >
                  {cta.text}
                </Link>
              </div>
            )}
          </div>

          {quote && (
            <div className="bg-white text-[#800000] p-6 md:p-8 rounded-sm max-w-md mt-12 md:mt-0 animate-fade-in delay-300 shadow-xl relative overflow-hidden hero-quote">
              <p className="text-lg mb-4 z-10 relative font-medium">{quote.text}</p>
              <p className="font-bold text-xl z-10 relative">{quote.author}</p>
            </div>
          )}
        </div>
      )}
      
      {isSplit && (
        // Split layout (text and image side by side)
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[580px]">
            {/* Content column */}
            <div className="p-8 lg:p-16 z-10 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                {title}
                {animatedText && (
                  <div className="mt-2 min-h-[60px]">
                    {animatedText.prefix && <span>{animatedText.prefix} </span>}
                    <span className="animate-text-cycle relative inline-block">
                      {animatedText.words.map((word, index) => (
                        <span 
                          key={index}
                          className={index === 0 ? "relative" : "absolute top-0 left-0"}
                          style={{animationDelay: `${index * 3}s`}}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                    {animatedText.suffix && <span> {animatedText.suffix}</span>}
                  </div>
                )}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">{subtitle}</p>
              
              {cta && (
                <Link 
                  to={cta.link} 
                  className="bg-white text-[#800000] hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 font-medium px-8 py-3 rounded-sm inline-block shadow-lg"
                >
                  {cta.text}
                </Link>
              )}
            </div>
            
            {/* Image column */}
            <div className="relative lg:h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-transparent z-10 lg:hidden"></div>
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-full object-cover lg:h-[580px] animate-fade-in"
              />
            </div>
          </div>
        </div>
      )}
      
      {!isSplit && !isOverlay && (
        // Centered layout
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-up">
            {title}
            {animatedText && (
              <div className="mt-2 min-h-[60px]">
                {animatedText.prefix && <span>{animatedText.prefix} </span>}
                <span className="animate-text-cycle relative inline-block">
                  {animatedText.words.map((word, index) => (
                    <span 
                      key={index}
                      className={index === 0 ? "relative" : "absolute top-0 left-0"}
                      style={{animationDelay: `${index * 3}s`}}
                    >
                      {word}
                    </span>
                  ))}
                </span>
                {animatedText.suffix && <span> {animatedText.suffix}</span>}
              </div>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up delay-200">{subtitle}</p>
          
          {cta && (
            <div className="animate-fade-up delay-300">
              <Link 
                to={cta.link} 
                className="bg-white text-[#800000] hover:bg-[#d4b97d] hover:text-[#44331a] transition-all duration-300 font-medium px-6 py-3 rounded-sm inline-block shadow-lg transform hover:translate-y-[-2px]"
              >
                {cta.text}
              </Link>
            </div>
          )}

          {image && (
            <div className="mt-12 max-w-xs mx-auto animate-fade-up delay-400">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full rounded-full aspect-square object-cover border-4 border-white shadow-xl"
              />
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Hero