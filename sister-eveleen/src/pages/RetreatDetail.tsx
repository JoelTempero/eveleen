import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedElement from '../components/ui/AnimatedElement'
import { getRetreatBySlug } from '../data/retreats'

export default function RetreatDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const retreat = slug ? getRetreatBySlug(slug) : undefined

  if (!retreat) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ paddingTop: '100px' }}>
        <div className="text-center">
          <h1 className="mb-4">Retreat Not Found</h1>
          <Link to="/retreats" className="btn btn-primary no-underline">Back to Retreats</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end" style={{ paddingTop: '80px' }}>
        <img src={retreat.image} alt={retreat.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/retreats" className="inline-flex items-center gap-2 text-white/80 text-sm mb-6 no-underline hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Retreats
            </Link>
            <span className="block text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-gold)' }}>
              {retreat.type === 'silent' ? 'Silent Retreat' : retreat.type === 'guided' ? 'Guided Retreat' : retreat.type === 'weekend' ? 'Weekend Retreat' : retreat.type === 'day' ? 'Day Retreat' : 'Group Retreat'}
            </span>
            <h1 className="text-white">{retreat.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[900px] mx-auto px-8">
          <AnimatedElement>
            <div className="flex flex-wrap gap-6 mb-12 p-6 rounded" style={{ background: 'var(--color-sand)' }}>
              <div className="flex items-center gap-2">
                <Calendar size={18} style={{ color: 'var(--color-ocean)' }} />
                <span className="text-sm">{retreat.date}{retreat.dateEnd ? ` — ${retreat.dateEnd}` : ''}</span>
              </div>
              {retreat.time && (
                <div className="flex items-center gap-2">
                  <Clock size={18} style={{ color: 'var(--color-ocean)' }} />
                  <span className="text-sm">{retreat.time}</span>
                </div>
              )}
              {retreat.cost && (
                <div className="flex items-center gap-2">
                  <DollarSign size={18} style={{ color: 'var(--color-ocean)' }} />
                  <span className="text-sm">{retreat.cost}</span>
                </div>
              )}
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="space-y-6 mb-12">
              {retreat.fullDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimatedElement>

          {retreat.costNote && (
            <AnimatedElement>
              <div className="p-6 rounded mb-12" style={{ background: 'var(--color-sand)', borderLeft: '3px solid var(--color-gold)' }}>
                <p className="text-sm" style={{ color: 'var(--color-earth)' }}>{retreat.costNote}</p>
              </div>
            </AnimatedElement>
          )}

          <AnimatedElement>
            <div className="text-center">
              <a
                href={`mailto:antje_duda@sistereretreat.com?subject=Retreat%20Booking%20-%20${encodeURIComponent(retreat.title)}`}
                className="btn btn-primary no-underline"
              >
                Enquire About This Retreat
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
