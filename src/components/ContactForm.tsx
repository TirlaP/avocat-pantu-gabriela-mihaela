import { useState, FormEvent } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Very basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Vă rugăm să completați toate câmpurile obligatorii.',
      })
      return
    }

    // In a real implementation, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Mesajul dumneavoastră a fost trimis cu succes. Vă vom contacta în curând.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
      {formStatus.type && (
        <div 
          className={`p-4 rounded-sm ${
            formStatus.type === 'success' ? 'bg-green-50 text-green-700 border-l-4 border-green-500' : 'bg-red-50 text-red-700 border-l-4 border-red-500'
          } transition-all duration-300 animate-fade-in`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              {formStatus.type === 'success' ? (
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{formStatus.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className="block text-sm font-medium mb-1 transition-colors group-focus-within:text-primary">
            Nume complet <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
          </div>
        </div>

        <div className="group">
          <label htmlFor="email" className="block text-sm font-medium mb-1 transition-colors group-focus-within:text-primary">
            Email <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="phone" className="block text-sm font-medium mb-1 transition-colors group-focus-within:text-primary">
            Telefon
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
          </div>
        </div>

        <div className="group">
          <label htmlFor="subject" className="block text-sm font-medium mb-1 transition-colors group-focus-within:text-primary">
            Subiect
          </label>
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
          </div>
        </div>
      </div>

      <div className="group">
        <label htmlFor="message" className="block text-sm font-medium mb-1 transition-colors group-focus-within:text-primary">
          Mesaj <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
            required
          ></textarea>
          <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100 w-full"></div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-medium shadow-md transform hover:translate-y-[-2px]"
        >
          Trimite Mesaj
        </button>
      </div>
    </form>
  )
}

export default ContactForm
