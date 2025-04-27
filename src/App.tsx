import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PracticeArea from './pages/PracticeArea'
import Blog from './pages/blog'
import ArticleDetail from './pages/blog/ArticleDetail'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              <Route path="/:areaSlug" element={<PracticeArea />} />
              <Route path="*" element={
                <div className="container mx-auto py-12 text-center">
                  <h1 className="text-4xl font-bold text-primary mb-4">Pagina Negăsită</h1>
                  <p className="mb-8">Pagina pe care o căutați nu există.</p>
                  <a href="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition">
                    Înapoi la Pagina Principală
                  </a>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
