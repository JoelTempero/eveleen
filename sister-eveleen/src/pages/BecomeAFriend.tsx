import { Heart, Mail, Calendar, Wrench } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { contactInfo } from '../data/siteContent'

export default function BecomeAFriendPage() {
  return (
    <>
      <PageHero
        title="Become a Friend"
        subtitle="Help us continue Sister Eveleen's dream of offering a sacred space for rest, prayer, and renewal."
        image="https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_1200,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg"
      />

      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <AnimatedElement>
            <p className="mb-6">Sister Eveleen Retreat House relies on the generosity and support of friends to continue its ministry. As a house of the Anglican Diocese of Christchurch, we are a not-for-profit organisation that depends on retreat fees, donations, and the goodwill of our community.</p>
            <p className="mb-6">There are many ways you can support the work of the retreat house and help us continue to offer this sacred space to those who need it.</p>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Ways to Support Us</h2>
            <div className="space-y-8">
              <div className="flex gap-6 p-8 rounded" style={{ background: 'var(--color-sand)' }}>
                <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--color-ocean)', color: 'white' }}>
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Make a Donation</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Your financial support helps us maintain the house, keep retreat fees affordable, and offer subsidised places for those who cannot afford the full cost. Every contribution makes a difference.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded" style={{ background: 'var(--color-sand)' }}>
                <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--color-ocean)', color: 'white' }}>
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Become a Regular Supporter</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Set up a regular donation to provide ongoing support for the retreat house. Even a small monthly contribution helps us plan and sustain our ministry.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded" style={{ background: 'var(--color-sand)' }}>
                <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--color-ocean)', color: 'white' }}>
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Volunteer Your Time</h4>
                  <p className="text-sm" style={{ color: '#666' }}>We hold regular working bees and always welcome helping hands. Whether it's gardening, cleaning, painting, or repairs, your time and skills are valued. Keep an eye on our news page for upcoming working bee dates.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded" style={{ background: 'var(--color-sand)' }}>
                <div className="w-[50px] h-[50px] rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--color-ocean)', color: 'white' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Spread the Word</h4>
                  <p className="text-sm" style={{ color: '#666' }}>Tell your friends, family, and parish about Sister Eveleen Retreat House. Share our website, follow us on social media, and help others discover this special place.</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <h2 className="mt-16 mb-8">Prayer Stools</h2>
            <p className="mb-6">Our beautifully handmade prayer stools are crafted from original Sister Eveleen Retreat House weatherboard or Rimu by Dugald Wilson from our Board. Purchasing a prayer stool is a wonderful way to support the retreat house and take home a piece of its history. Suggested Koha is $50.</p>
          </AnimatedElement>

          <AnimatedElement>
            <div className="mt-16 p-8 rounded text-center" style={{ background: 'var(--color-sand)', borderLeft: '3px solid var(--color-gold)' }}>
              <h3 className="mb-4">Get in Touch</h3>
              <p className="mx-auto mb-6">To learn more about supporting Sister Eveleen Retreat House, or to arrange a donation, please contact us.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${contactInfo.email}`} className="btn btn-primary no-underline">
                  Email Us
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="btn btn-secondary no-underline">
                  Call {contactInfo.phone}
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
