import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { retreats } from '../data/retreats'

export default function RetreatsPage() {
  const publishedRetreats = retreats.filter((r) => r.published)

  return (
    <>
      <PageHero
        title="Retreats"
        subtitle="Guided retreats are an opportunity to deepen your spiritual journey under the guidance of a retreat leader."
        image="https://static.wixstatic.com/media/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_1200,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg"
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <p className="text-center mx-auto mb-16 max-w-2xl" style={{ color: '#666' }}>
              Our retreats focus on a theme and will often involve extended times of silence. They are led by experienced spiritual directors and retreat leaders. Places are limited to ensure a personal experience.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            {publishedRetreats.map((retreat, i) => (
              <AnimatedElement key={retreat.id} delay={i * 0.05}>
                <Link to={`/retreats/${retreat.slug}`} className="group block no-underline">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-1" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="h-[250px] md:h-full overflow-hidden">
                      <img src={retreat.image} alt={retreat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="md:col-span-2 p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: 'var(--color-sand)', color: 'var(--color-ocean)' }}>
                          {retreat.type === 'silent' ? 'Silent Retreat' : retreat.type === 'guided' ? 'Guided Retreat' : retreat.type === 'weekend' ? 'Weekend Retreat' : retreat.type === 'day' ? 'Day Retreat' : 'Group Retreat'}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--color-ocean)' }}>
                          {retreat.date}{retreat.dateEnd ? ` — ${retreat.dateEnd}` : ''}
                        </span>
                      </div>
                      <h3 className="mb-3">{retreat.title}</h3>
                      <p className="mb-4" style={{ color: '#666' }}>{retreat.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        {retreat.cost && (
                          <span className="font-medium" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ocean)' }}>
                            {retreat.cost}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: 'var(--color-ocean)' }}>
                          View Details <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--color-sand)' }}>
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <AnimatedElement>
            <h3 className="mb-4">Self-Guided Retreats</h3>
            <p className="mx-auto mb-8 max-w-2xl">
              You don't need to wait for a guided retreat. Book a room anytime for a self-guided, self-catered retreat. Come for a day, a weekend, or longer &mdash; create your own retreat experience in our peaceful surroundings.
            </p>
            <Link to="/book-a-room" className="btn btn-primary no-underline">
              Book a Room <ArrowRight size={16} />
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
