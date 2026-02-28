import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedElement from '../components/ui/AnimatedElement'
import { getRoomBySlug } from '../data/rooms'

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const room = slug ? getRoomBySlug(slug) : undefined

  if (!room) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ paddingTop: '100px' }}>
        <div className="text-center">
          <h1 className="mb-4">Room Not Found</h1>
          <Link to="/book-a-room" className="btn btn-primary no-underline">Back to Rooms</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end" style={{ paddingTop: '80px' }}>
        <img src={room.images[0]} alt={room.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/book-a-room" className="inline-flex items-center gap-2 text-white/80 text-sm mb-6 no-underline hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to All Rooms
            </Link>
            <h1 className="text-white">{room.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[900px] mx-auto px-8">
          <AnimatedElement>
            <div className="flex flex-wrap gap-6 mb-12 p-6 rounded" style={{ background: 'var(--color-sand)' }}>
              <div className="flex items-center gap-2">
                <Users size={18} style={{ color: 'var(--color-ocean)' }} />
                <span className="text-sm">{room.capacity}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ocean)' }}>
                {room.price} {room.priceNote && <span className="text-sm" style={{ color: '#666', fontFamily: 'var(--font-body)' }}>{room.priceNote}</span>}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="space-y-6 mb-12">
              {room.fullDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="mb-12">
              <h3 className="mb-4">Room Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded" style={{ background: 'var(--color-sand)' }}>
                    <Check size={16} style={{ color: 'var(--color-ocean)' }} />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {room.images.length > 1 && (
            <AnimatedElement>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {room.images.map((img, i) => (
                  <img key={i} src={img} alt={`${room.title} - view ${i + 1}`} loading="lazy" className="w-full h-[250px] object-cover rounded" />
                ))}
              </div>
            </AnimatedElement>
          )}

          <AnimatedElement>
            <div className="text-center">
              <a
                href={`mailto:antje_duda@sistereretreat.com?subject=${room.emailSubject}`}
                className="btn btn-primary no-underline"
              >
                Enquire About This Room
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
