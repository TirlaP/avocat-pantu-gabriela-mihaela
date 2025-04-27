import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const Contact = () => {
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Vă rugăm să completați toate câmpurile obligatorii.',
      })
      return
    }

    // Simulate form submission
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
    <>
      <Helmet>
        <title>Contact - Cabinet Avocat Panțu Gabriela Mihaela</title>
        <meta name="description" content="Contactați Cabinet Avocat Panțu Gabriela Mihaela pentru consultații juridice și reprezentare. Programați o întâlnire cu avocații noștri din Târgoviște." />
        <meta property="og:title" content="Contact Cabinet Avocat Panțu Gabriela Mihaela" />
        <meta property="og:description" content="Datele de contact și formular pentru programări la Cabinet Avocat Panțu Gabriela Mihaela" />
        <link rel="canonical" href="https://www.cabinet-avocat-pantu.ro/contact" />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-[#800000] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/attorney.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-up">Contact</h1>
            <p className="text-xl text-white/90 animate-fade-up delay-100">
              Vă rugăm să completați formularul de contact cu cât mai multe informații
              despre situația dumneavoastră/ problema la care doriți să primiți răspuns. Vom
              răspunde solicitării dumneavoastră în termen de cel mult 24 de ore.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2 animate-fade-up">
            <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-6">Formular de contact</h2>

              {formStatus.type && (
                <div 
                  className={`p-4 rounded-sm mb-6 ${
                    formStatus.type === 'success' ? 'bg-[#d4b97d]/10 text-[#806619] border border-[#d4b97d]/30' : 'bg-[#800000]/10 text-[#800000] border border-[#800000]/30'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Numele dumneavoastră <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nume și prenume"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Adresa de e-mail <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="adresa@exemplu.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Numărul de telefon <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07xx xxx xxx"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subiect
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subiectul mesajului"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Mesajul dumneavoastră <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Descrieți în câteva cuvinte problema dumneavoastră..."
                    required
                  />
                </div>
                
                <div className="flex items-start mb-4">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 mt-1 rounded border-gray-300 text-[#800000] focus:ring-[#800000]"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    Sunt de acord cu Termenii și condițiile și cu Politica de confidențialitate
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto bg-[#800000] hover:bg-[#660000] text-white">
                  Trimite
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="animate-fade-up delay-200">
            <div className="bg-gray-50 p-8 rounded-sm shadow-lg h-full border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-6">Informații contact</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#d4b97d]/20 rounded-full p-3">
                      <MapPin className="text-[#800000] h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-[#800000]">Adresă</h3>
                    <p className="text-gray-600">
                      Bd. Independenței nr.2A, bl.H3, ap.13, Târgoviște, România
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#d4b97d]/20 rounded-full p-3">
                      <Phone className="text-[#800000] h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-[#800000]">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:0785275157" className="hover:text-[#d4b97d] transition-colors">
                        0785 275 157
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#d4b97d]/20 rounded-full p-3">
                      <Mail className="text-[#800000] h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-[#800000]">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:pantu.gabriela@gmail.com" className="hover:text-[#d4b97d] transition-colors">
                        pantu.gabriela@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#d4b97d]/20 rounded-full p-3">
                      <Clock className="text-[#800000] h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-[#800000]">Program</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Luni-Vineri: 08:30 - 17:30</p>
                      <p>Sâmbătă: cu programare prealabilă</p>
                      <p>Duminică: închis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#d4b97d]/10 py-16 animate-fade-up delay-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-[#800000]">Locația Noastră</h2>
          <div className="bg-white p-2 rounded-sm shadow-lg border border-[#d4b97d]/20">
            {/* In real implementation, this would be a Google Maps embed */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Hartă Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
