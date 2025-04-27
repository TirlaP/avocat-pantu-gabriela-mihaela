import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { blogArticles } from '../../lib/blog/articles'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Grid, List, BookOpen, Calendar } from 'lucide-react'

const Blog = () => {
  // State for view toggle (grid or list)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  // Group articles by category
  const articlesByCategory = blogArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {} as Record<string, typeof blogArticles>)

  const categories = Object.keys(articlesByCategory).sort()
  
  // Toggle view mode
  const toggleViewMode = (mode: 'grid' | 'list') => {
    setViewMode(mode)
  }

  return (
    <>
      <Helmet>
        <title>Blog Juridic - Cabinet Avocat Panțu Gabriela Mihaela</title>
        <meta name="description" content="Articole juridice pe diverse teme de drept civil, dreptul familiei, dreptul muncii și alte domenii de expertiză ale Cabinetului Avocat Panțu Gabriela Mihaela." />
        <meta property="og:title" content="Blog Juridic - Cabinet Avocat Panțu Gabriela Mihaela" />
        <meta property="og:description" content="Articole juridice pe diverse teme de drept civil, dreptul familiei, dreptul muncii și alte domenii de expertiză." />
        <link rel="canonical" href="https://www.cabinet-avocat-pantu.ro/blog" />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-[#800000] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/attorney.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-up">
                Cele mai noi studii de caz
              </h1>
              <p className="text-xl text-white/90 animate-fade-up delay-100">
                Articole și informații juridice utile din diverse domenii de drept. 
                Rămâneți la curent cu ultimele actualizări legislative și sfaturi juridice.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 animate-fade-up delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-sm p-1 flex">
                <button 
                  onClick={() => toggleViewMode('grid')} 
                  className={`p-2 rounded-sm transition-all ${viewMode === 'grid' ? 'bg-white text-[#800000]' : 'text-white hover:bg-white/20'}`}
                  aria-label="Grid View"
                >
                  <Grid size={20} />
                </button>
                <button 
                  onClick={() => toggleViewMode('list')} 
                  className={`p-2 rounded-sm transition-all ${viewMode === 'list' ? 'bg-white text-[#800000]' : 'text-white hover:bg-white/20'}`}
                  aria-label="List View"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Articles */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center">
            <BookOpen className="mr-3 text-[#800000]" size={28} />
            Articole recente
          </h2>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="transition-all hover:shadow-lg hover:translate-y-[-2px] duration-300 border-t-4 border-t-[#800000] overflow-hidden group">
                  <CardHeader className="relative">
                    <div className="absolute top-0 right-0 bg-[#800000] text-white text-xs font-medium px-3 py-1 rounded-bl-sm">
                      {article.category}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                    <CardTitle className="group-hover:text-[#800000] transition-colors">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-[#800000]">
                      <Link to={`/blog/${article.slug}`} className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Citește articolul
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {blogArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="transition-all hover:shadow-lg duration-300 border-l-4 border-l-[#800000] overflow-hidden group">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/5 p-4 flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#800000]">{article.date.split(' ')[0]}</div>
                        <div className="text-sm text-muted-foreground">{article.date.split(' ')[1]}</div>
                        <div className="text-sm text-muted-foreground">{article.date.split(' ')[2]}</div>
                      </div>
                    </div>
                    <div className="md:w-4/5 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-semibold group-hover:text-[#800000] transition-colors">
                          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <span className="bg-[#800000] text-white text-xs font-medium px-3 py-1 rounded-sm">
                          {article.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <Button asChild variant="link" className="p-0 text-[#800000]">
                        <Link to={`/blog/${article.slug}`} className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Citește articolul
                          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Articles by Category */}
        {categories.map((category, categoryIndex) => (
          <div key={category} className={`${categoryIndex > 0 ? 'mt-16' : ''} animate-fade-up`} style={{ animationDelay: `${categoryIndex * 100}ms` }}>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center">
              <span className="w-8 h-8 bg-[#800000]/10 rounded-full text-[#800000] flex items-center justify-center mr-3">{categoryIndex + 1}</span>
              {category}
            </h2>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesByCategory[category].map((article) => (
                  <Card key={article.id} className="transition-all hover:shadow-lg hover:translate-y-[-2px] duration-300 border-t-4 border-t-[#800000] overflow-hidden group">
                    <CardHeader className="relative">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar size={14} className="mr-1" />
                        {article.date}
                      </div>
                      <CardTitle className="group-hover:text-[#800000] transition-colors">
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0 text-[#800000]">
                        <Link to={`/blog/${article.slug}`} className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Citește articolul
                          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {articlesByCategory[category].map((article) => (
                  <Card key={article.id} className="transition-all hover:shadow-lg duration-300 border-l-4 border-l-[#800000] overflow-hidden group">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-1 p-4 flex items-center justify-center bg-gray-50 rounded-l-sm">
                        <div className="text-center">
                          <div className="text-xl font-bold text-[#800000]">{article.date.split(' ')[0]}</div>
                          <div className="text-sm text-muted-foreground">{article.date.split(' ')[1]}</div>
                          <div className="text-sm text-muted-foreground">{article.date.split(' ')[2]}</div>
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-[#800000] transition-colors">
                          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <Button asChild variant="link" className="p-0 text-[#800000]">
                          <Link to={`/blog/${article.slug}`} className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                            Citește articolul
                            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog