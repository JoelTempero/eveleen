import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function WhyRetreatPage() {
  return (
    <>
      <PageHero
        title="Why Go on a Retreat?"
        subtitle="A retreat is an intentional time set apart from the busyness of everyday life to rest, reflect, and reconnect."
        image="https://static.wixstatic.com/media/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_1200,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg"
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <AnimatedElement>
            <p className="mb-6">In our busy, connected world, it can be hard to find space to simply be. A retreat offers a rare opportunity to step out of the rush, to set aside the demands and distractions of daily life, and to turn your attention inward.</p>
            <p className="mb-6">At Sister Eveleen Retreat House, we believe that everyone needs time to rest and be renewed. Whether you are seeking spiritual refreshment, creative inspiration, or simply a break from the noise, a retreat can be a transformative experience.</p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">What Happens on a Retreat?</h2>
            <p className="mb-6">A retreat is whatever you need it to be. Some people come for guided retreats led by experienced spiritual directors, while others prefer a self-guided stay where they set their own rhythm.</p>
            <p className="mb-6">At SERH, your retreat might include:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Time for prayer and contemplation in our chapel</li>
              <li>Walking in our beautiful gardens overlooking the sea</li>
              <li>Reading, journaling, or creative activities</li>
              <li>Spiritual direction with a qualified director</li>
              <li>Silence and solitude</li>
              <li>Rest &mdash; deep, restorative rest</li>
            </ul>
          </AnimatedElement>

          <AnimatedElement>
            <blockquote
              className="my-12"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: 'var(--color-earth)',
                borderLeft: '2px solid var(--color-gold)',
                paddingLeft: '1rem',
              }}
            >
              "Sr Eveleen House is a contemplative retreat environment in which many seek to experience God's presence, find rest and replenishment, and listen to their own heart and God's leading in their lives."
            </blockquote>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Who Are Retreats For?</h2>
            <p className="mb-6">Retreats are for everyone. You don't need to be religious, spiritual, or experienced. You simply need to be willing to slow down and be present.</p>
            <p className="mb-6">People come to SERH for many reasons:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To deepen their prayer life and spiritual practice</li>
              <li>To process a major life transition or decision</li>
              <li>To recover from burnout, grief, or exhaustion</li>
              <li>To find creative inspiration in a beautiful setting</li>
              <li>To simply rest and be cared for</li>
            </ul>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Types of Retreats We Offer</h2>
            <div className="space-y-8">
              <div className="p-6 rounded" style={{ background: 'var(--color-sand)' }}>
                <h4 className="mb-2">Guided Retreats</h4>
                <p className="text-sm" style={{ color: '#666' }}>Led by experienced spiritual directors, these retreats follow a theme and include presentations, prayer times, and individual spiritual direction. Ideal for those wanting structure and guidance.</p>
              </div>
              <div className="p-6 rounded" style={{ background: 'var(--color-sand)' }}>
                <h4 className="mb-2">Silent Retreats</h4>
                <p className="text-sm" style={{ color: '#666' }}>Held in full silence, these retreats offer a deep immersion in contemplative prayer and solitude. Daily spiritual direction is included. Recommended for those with some retreat experience.</p>
              </div>
              <div className="p-6 rounded" style={{ background: 'var(--color-sand)' }}>
                <h4 className="mb-2">Self-Guided Retreats</h4>
                <p className="text-sm" style={{ color: '#666' }}>Book a room and create your own retreat experience. Come for a day, a weekend, or longer. You set the rhythm &mdash; we provide the space, peace, and welcome.</p>
              </div>
              <div className="p-6 rounded" style={{ background: 'var(--color-sand)' }}>
                <h4 className="mb-2">Day Retreats</h4>
                <p className="text-sm" style={{ color: '#666' }}>Just a few hours can make a world of difference. Our day retreats and contemplative mornings offer a gentle taste of retreat life. Open to all.</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="text-center mt-16">
              <Link to="/retreats" className="btn btn-primary no-underline">
                View Upcoming Retreats <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
