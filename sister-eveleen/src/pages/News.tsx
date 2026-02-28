import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { newsPosts } from '../data/news'

export default function NewsPage() {
  const publishedPosts = newsPosts.filter((p) => p.published)

  return (
    <>
      <PageHero
        title="News"
        subtitle="Updates, reflections, and stories from Sister Eveleen Retreat House."
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="space-y-8">
            {publishedPosts.map((post, i) => (
              <AnimatedElement key={post.id} delay={i * 0.05}>
                <Link to={`/news/${post.slug}`} className="group block no-underline">
                  <article className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-1" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="h-[200px] md:h-full overflow-hidden">
                      <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="md:col-span-2 p-8">
                      <time className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-ocean)' }}>{post.date}</time>
                      <h3 className="mt-2 mb-3">{post.title}</h3>
                      <p className="text-sm line-clamp-3" style={{ color: '#666' }}>{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: 'var(--color-ocean)' }}>
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
