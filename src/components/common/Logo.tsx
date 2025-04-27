import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'default' | 'white'
  className?: string
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-primary'
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="mr-2">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M21 3L3 10.5V21C3 29.2843 11.0589 37 21 37C30.9411 37 39 29.2843 39 21V10.5L21 3Z" 
            fill={variant === 'white' ? '#FFFFFF' : '#800000'} 
            fillOpacity="0.15"
          />
          <path 
            d="M21 3L3 10.5V21C3 29.2843 11.0589 37 21 37C30.9411 37 39 29.2843 39 21V10.5L21 3Z" 
            stroke={variant === 'white' ? '#FFFFFF' : '#800000'} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M21 21V13M21 21L27 18M21 21L15 18" 
            stroke={variant === 'white' ? '#FFFFFF' : '#800000'} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`flex flex-col ${textColor}`}>
        <span className="text-lg font-serif font-bold leading-tight">Cabinet Avocat</span>
        <span className="text-sm font-medium leading-tight">Panțu Gabriela Mihaela</span>
      </div>
    </Link>
  )
}

export default Logo
