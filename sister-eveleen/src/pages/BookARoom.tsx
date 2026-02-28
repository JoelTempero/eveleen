import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { rooms } from '../data/rooms'

export default function BookARoomPage() {
  return (
    <>
      <PageHero
        title="Book a Room"
        subtitle="SERH offers 11 beds in 8 rooms, each offering a range of accommodation choices and prices, all with heating."
        image="https://static.wixstatic.com/media/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_1200,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg"
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <p className="text-center mx-auto mb-16 max-w-2xl" style={{ color: '#666' }}>
              All rooms are warm and inviting with captivating views of sky and sea, providing a tranquil and cosy atmosphere for your retreat. Every room has linen and towels provided. Rooms are cleaned before and after your stay.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <AnimatedElement key={room.id} delay={i * 0.1}>
                <Link to={`/book-a-room/${room.slug}`} className="group block no-underline">
                  <div className="bg-white rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg h-full flex flex-col" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="h-[250px] relative overflow-hidden" style={{ background: 'var(--color-sage-light)' }}>
                      <img src={room.image} alt={room.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {room.badge && (
                        <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-sm text-xs font-medium" style={{ color: 'var(--color-ocean)' }}>
                          {room.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl mb-2">{room.title}</h3>
                      <p className="text-sm mb-4" style={{ color: '#666' }}>{room.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((f) => (
                          <span key={f} className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--color-sand)' }}>
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-auto" style={{ borderTop: '1px solid var(--color-sand)' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ocean)' }}>
                          {room.price} {room.priceNote && <span className="text-sm" style={{ color: '#666', fontFamily: 'var(--font-body)' }}>{room.priceNote}</span>}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: 'var(--color-ocean)' }}>
                          View <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement>
            <div
              className="mt-16 p-12 rounded flex flex-col md:flex-row justify-between items-center gap-8"
              style={{ background: 'linear-gradient(135deg, var(--color-ocean) 0%, var(--color-ocean-deep) 100%)', color: 'white' }}
            >
              <div>
                <h3 style={{ color: 'white' }} className="mb-2">Day Retreats Available</h3>
                <p style={{ opacity: 0.9 }}>Book a room for the day to enjoy a self-guided, self-catered retreat in our peaceful surroundings. Just NZ$30.</p>
              </div>
              <a
                href="mailto:antje_duda@sistereretreat.com?subject=Day%20Retreat%20Enquiry"
                className="btn no-underline flex-shrink-0"
                style={{ background: 'white', color: 'var(--color-ocean)' }}
              >
                Enquire About Day Stays
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
