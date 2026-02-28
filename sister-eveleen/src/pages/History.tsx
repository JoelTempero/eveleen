import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="Our History"
        subtitle="The story of Sister Eveleen and the retreat house she bequeathed to the people of Christchurch."
        image="https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_1200,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg"
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <AnimatedElement>
            <h2 className="mb-8">Sister Eveleen</h2>
            <p className="mb-6">Sister Eveleen lived on Scarborough Hill from 1930 until her death in 1939. Having been diagnosed with tuberculosis, she moved to Sumner and continued her vocation in the seclusion of this beautiful hillside location.</p>
            <p className="mb-6">Despite her illness, Sister Eveleen continued to serve her community. She conducted retreats, led Sunday School, and held services for the local community from her home on Whitewash Head Road.</p>
            <p className="mb-6">In her will, Sister Eveleen bequeathed her home to the Anglican Diocese of Christchurch as "a house of prayer and spiritual help." It was her dream that the house would continue to be a place where people could find rest, refreshment, and encounter with God.</p>
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
              "A house of prayer and spiritual help" &mdash; Sr Eveleen's bequest to the Anglican Diocese of Christchurch, 1939
            </blockquote>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">The Years Between</h2>
            <p className="mb-6">For many decades the house served as a place of prayer and retreat, welcoming individuals and groups from across Canterbury and beyond.</p>
            <p className="mb-6">The spiritual ministry of the house has always been rooted in western Christian contemplative spirituality &mdash; a tradition that values silence, solitude, and attentiveness to the presence of God.</p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Earthquake and Renewal</h2>
            <p className="mb-6">The Canterbury earthquakes of 2010 and 2011 caused significant damage to the retreat house. For several years the house was closed for extensive repairs and restoration.</p>
            <p className="mb-6">In 2019, the retreat house was re-opened after earthquake repairs and a new Sister Eveleen Retreat House Board of Governance was constituted. The reopening marked a new chapter in the life of the house.</p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Today</h2>
            <p className="mb-6">Since 2020 the House has been offering a variety of 2, 5, and 7 day retreats, as well as self-guided retreat stays and day retreats. The house accommodates up to 11 guests across 8 rooms.</p>
            <p className="mb-6">The main house features 3 double rooms and 1 single room, while the recently remodelled Annex wing offers 3 monastic-style cells for those seeking a simpler, more contemplative experience.</p>
            <p className="mb-6">Our mission remains the same as Sister Eveleen's dream: to offer her home as a place where people can replenish their spirit and immerse themselves in God's loving presence.</p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="mt-16 p-8 rounded" style={{ background: 'var(--color-sand)' }}>
              <h3 className="mb-4">Timeline</h3>
              <div className="space-y-4">
                {[
                  { year: '1930', text: 'Sister Eveleen moves to Scarborough Hill, Sumner' },
                  { year: '1939', text: 'Sr Eveleen passes away; bequeaths the house to the Anglican Diocese of Christchurch' },
                  { year: '1939–2010', text: 'The house serves as a retreat and place of prayer for decades' },
                  { year: '2010–2011', text: 'Canterbury earthquakes cause significant damage' },
                  { year: '2019', text: 'The retreat house reopens after earthquake repairs; new Board of Governance constituted' },
                  { year: '2020–present', text: 'SERH offers a variety of guided and self-guided retreats' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-6">
                    <span className="flex-shrink-0 font-medium" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-ocean)', minWidth: '120px' }}>
                      {item.year}
                    </span>
                    <p className="text-sm" style={{ color: '#666' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
