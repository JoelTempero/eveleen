import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedElement from '../components/ui/AnimatedElement'
import { getNewsPostBySlug } from '../data/news'

export default function NewsPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getNewsPostBySlug(slug) : undefined

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ paddingTop: '100px' }}>
        <div className="text-center">
          <h1 className="mb-4">Post Not Found</h1>
          <Link to="/news" className="btn btn-primary no-underline">Back to News</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-[40vh] flex items-end" style={{ paddingTop: '80px' }}>
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-white/80 text-sm mb-6 no-underline hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to News
            </Link>
            <time className="block text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-gold)' }}>{post.date}</time>
            <h1 className="text-white">{post.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[700px] mx-auto px-8">
          <AnimatedElement>
            <div className="space-y-6">
              {post.content.map((p, i) => (
                <p key={i} style={{ whiteSpace: 'pre-line' }}>{p}</p>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--color-sand-dark)' }}>
              <Link to="/news" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-ocean)' }}>
                <ArrowLeft size={14} /> Back to all news
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
