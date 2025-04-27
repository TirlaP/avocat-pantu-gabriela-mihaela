import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogArticles } from '../../lib/blog/articles'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = blogArticles.find(article => article.slug === slug)

  if (!article) {
    return <Navigate to="/404" replace />
  }

  // Find other articles in the same category
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{article.title} - Cabinet Avocat Panțu Gabriela Mihaela</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} - Cabinet Avocat Panțu Gabriela Mihaela`} />
        <meta property="og:description" content={article.excerpt} />
        <link rel="canonical" href={`https://www.cabinet-avocat-pantu.ro/blog/${article.slug}`} />
      </Helmet>

      {/* Hero Banner */}
      <div className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/attorney.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Înapoi la blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{article.title}</h1>
            <div className="flex items-center space-x-4 text-white/80">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-fade-up">
            <Card className="p-8">
              <div 
                className="prose max-w-none prose-headings:font-serif prose-headings:text-primary prose-strong:text-primary prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </Card>

            {/* Share Buttons */}
            <div className="mt-8 flex items-center space-x-4">
              <span className="text-muted-foreground">Distribuie articolul:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.447.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span className="sr-only">Share on WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="animate-fade-up delay-200">
            <div className="space-y-8">
              {/* About Author */}
              <Card>
                <CardHeader>
                  <CardTitle>Despre Autor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xl font-bold">{article.author.split(' ').map(name => name[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{article.author}</h4>
                      <p className="text-muted-foreground">Avocat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Articole similare</CardTitle>
                </CardHeader>
                <CardContent>
                  {relatedArticles.length > 0 ? (
                    <div className="space-y-4">
                      {relatedArticles.map(relatedArticle => (
                        <div key={relatedArticle.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                          <Link 
                            to={`/blog/${relatedArticle.slug}`}
                            className="font-medium hover:text-primary transition-colors block mb-1"
                          >
                            {relatedArticle.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">{relatedArticle.date}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Nu există articole similare momentan.</p>
                  )}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Aveți nevoie de ajutor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">Contactați-ne pentru o consultație inițială și discutați cazul dumneavoastră cu avocații noștri.</p>
                  <Button asChild variant="secondary">
                    <Link to="/contact">Programare Online</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-16 animate-fade-up delay-300">
          <h2 className="text-2xl font-serif font-bold mb-8">Alte articole care v-ar putea interesa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map((otherArticle) => (
                <Card key={otherArticle.id} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{otherArticle.date}</div>
                    <CardTitle className="hover:text-primary transition-colors">
                      <Link to={`/blog/${otherArticle.slug}`}>{otherArticle.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{otherArticle.excerpt}</p>
                    <Button asChild variant="link" className="p-0">
                      <Link to={`/blog/${otherArticle.slug}`}>
                        Citește articolul
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleDetail
