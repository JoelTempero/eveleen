import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Play, Home as HomeIcon, Coffee, Heart, Flower2, CalendarDays, Gift, Mountain, Waves, Compass, MapPin, Instagram, Facebook, Phone, Mail } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import { rooms } from '../data/rooms'
import { services, teamMembers, galleryImages, thingsToDo, prayerTimes, contactInfo } from '../data/siteContent'
import { retreats } from '../data/retreats'

const iconMap: Record<string, React.ReactNode> = {
  home: <HomeIcon size={24} />,
  coffee: <Coffee size={24} />,
  heart: <Heart size={24} />,
  flower: <Flower2 size={24} />,
  calendar: <CalendarDays size={24} />,
  gift: <Gift size={24} />,
  mountain: <Mountain size={24} />,
  waves: <Waves size={24} />,
  compass: <Compass size={24} />,
  mapPin: <MapPin size={24} />,
}

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will be in touch soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const upcomingRetreats = retreats.filter((r) => r.published).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-sand) 0%, var(--color-warm-white) 50%, var(--color-sage-light) 100%)',
          paddingTop: '80px',
        }}
      >
        <div
          className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] opacity-15"
          style={{
            background: 'radial-gradient(ellipse, var(--color-ocean-light) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div className="relative z-10 text-center max-w-[900px] px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase mb-8"
            style={{ color: 'var(--color-ocean)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          >
            <CalendarDays size={16} />
            Anglican Diocese of Christchurch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            A sacred space to <em style={{ fontStyle: 'italic', color: 'var(--color-ocean)' }}>reflect, rest,</em> and simply <em style={{ fontStyle: 'italic', color: 'var(--color-ocean)' }}>be</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 mx-auto"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'var(--color-earth)',
              maxWidth: '700px',
            }}
          >
            Nestled among native trees and beach flora on Scarborough Hill, Sumner &mdash; a place to replenish your spirit and immerse yourself in God's loving presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap mt-12"
          >
            <Link to="/book-a-room" className="btn btn-primary no-underline">
              <Calendar size={18} />
              Book Your Stay
            </Link>
            <Link to="/retreats" className="btn btn-secondary no-underline">
              Discover Our Retreats
            </Link>
          </motion.div>
        </div>

      </section>

      {/* About */}
      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <AnimatedElement animation="fade-left">
              <div>
                <span className="section-label">Welcome</span>
                <h2 className="mb-8">Warm greetings from all of us at Sister Eveleen Retreat House</h2>
                <p className="mb-4">We are a Christian retreat house nestled among native trees and beach flora on Scarborough Hill, Sumner, Christchurch.</p>
                <p
                  className="my-8"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontStyle: 'italic',
                    color: 'var(--color-earth)',
                    borderLeft: '2px solid var(--color-gold)',
                    paddingLeft: '1rem',
                  }}
                >
                  It is our ministry to offer and hold a sacred space for you &mdash; a place to reflect, rest, pray, or simply be.
                </p>
                <p className="mb-4">Whether you are here for a retreat, a self-guided stay, or with a group &mdash; you are welcome. St Francis Chapel, located on-site, is always open for prayer and quiet reflection. Our beautiful gardens offer another space to pause and enjoy God's presence.</p>
                <p className="mb-4">Sister Eveleen Retreat House belongs to the Anglican Diocese of Christchurch &mdash; yet everyone is welcome to visit and spend time in prayer and contemplation.</p>
                <p className="mb-4">Our mission is to continue Sister Eveleen's dream: to offer her home as a place where people can replenish their spirit and immerse themselves in God's loving presence.</p>

                <div
                  className="inline-flex items-center gap-2 px-5 py-3 rounded mt-8"
                  style={{ background: 'var(--color-sand)', fontSize: '0.875rem' }}
                >
                  <CalendarDays size={20} style={{ color: 'var(--color-ocean)' }} />
                  With the Anglican Diocese of Christchurch
                </div>

                <a
                  href="https://youtube.com/shorts/LiLl9NflPZs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mt-8 p-4 rounded no-underline transition-all duration-300 hover:translate-x-1"
                  style={{ background: 'var(--color-sand)' }}
                >
                  <div
                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-ocean)', color: 'white' }}
                  >
                    <Play size={20} fill="white" />
                  </div>
                  <div className="text-sm">
                    <strong className="block font-medium" style={{ color: 'var(--color-charcoal)' }}>
                      Take a virtual tour
                    </strong>
                    <span style={{ color: 'var(--color-ocean)', fontSize: '0.8rem' }}>Watch our short video</span>
                  </div>
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-right">
              <div className="relative">
                <img
                  src="https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg"
                  alt="Sister Eveleen Retreat House"
                  loading="lazy"
                  className="w-full h-[600px] object-cover rounded"
                />
                <div
                  className="absolute bottom-[-30px] left-[-30px] w-[200px] h-[200px] rounded hidden lg:block"
                  style={{ background: 'var(--color-sage-light)', zIndex: -1 }}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-32 relative" style={{ background: 'var(--color-sand)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-ocean-light), transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <span className="section-label">Accommodation</span>
              <h2 className="mb-4">Our Rooms</h2>
              <p className="mx-auto">SERH offers 11 beds in 8 rooms, each offering a range of accommodation choices and prices, all with heating. All rooms are warm and inviting with captivating views of sky and sea.</p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room, i) => (
              <AnimatedElement key={room.id} delay={i * 0.1}>
                <Link to={`/book-a-room/${room.slug}`} className="group block no-underline">
                  <div className="bg-white rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="h-[250px] relative overflow-hidden" style={{ background: 'var(--color-sage-light)' }}>
                      <img src={room.image} alt={room.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {room.badge && (
                        <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-sm text-xs font-medium" style={{ color: 'var(--color-ocean)' }}>
                          {room.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl mb-2">{room.title}</h3>
                      <p className="text-sm mb-4" style={{ color: '#666' }}>{room.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((f) => (
                          <span key={f} className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--color-sand)' }}>
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid var(--color-sand)' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ocean)' }}>
                          {room.price} {room.priceNote && <span className="text-sm" style={{ color: '#666', fontFamily: 'var(--font-body)' }}>{room.priceNote}</span>}
                        </span>
                        <span className="btn btn-primary text-sm py-2 px-4">View</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement>
            <div className="text-center mt-12">
              <Link to="/book-a-room" className="btn btn-secondary no-underline">
                View All Rooms <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedElement>

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
                href={`mailto:antje_duda@sistereretreat.com?subject=Day%20Retreat%20Enquiry`}
                className="btn no-underline flex-shrink-0"
                style={{ background: 'white', color: 'var(--color-ocean)' }}
              >
                Enquire About Day Stays
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Upcoming Retreats */}
      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <span className="section-label">Retreats</span>
              <h2 className="mb-4">Upcoming Retreats</h2>
              <p className="mx-auto">Guided retreats are an opportunity to deepen your spiritual journey under the guidance of a retreat leader.</p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingRetreats.map((retreat, i) => (
              <AnimatedElement key={retreat.id} delay={i * 0.1}>
                <Link to={`/retreats/${retreat.slug}`} className="group block no-underline">
                  <div className="bg-white rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-1" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="h-[200px] overflow-hidden">
                      <img src={retreat.image} alt={retreat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-ocean)' }}>{retreat.date}{retreat.dateEnd ? ` — ${retreat.dateEnd}` : ''}</p>
                      <h4 className="mb-2" style={{ fontSize: '1.2rem' }}>{retreat.title}</h4>
                      <p className="text-sm line-clamp-2" style={{ color: '#666' }}>{retreat.description}</p>
                      {retreat.cost && <p className="mt-3 text-sm font-medium" style={{ color: 'var(--color-ocean)' }}>{retreat.cost}</p>}
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement>
            <div className="text-center mt-12">
              <Link to="/retreats" className="btn btn-secondary no-underline">
                View All Retreats <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services */}
      <section className="py-32" style={{ background: 'var(--color-sand)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <span className="section-label">Ministry & Services</span>
              <h2 className="mb-4">How We Serve You</h2>
              <p className="mx-auto">Everything you need for a peaceful and restorative retreat experience.</p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedElement key={service.id} delay={i * 0.05}>
                <div
                  className="p-12 rounded text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white"
                >
                  <div
                    className="w-[60px] h-[60px] mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--color-ocean)', color: 'white' }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <h4 className="mb-2">{service.title}</h4>
                  <p className="text-sm mx-auto" style={{ color: '#666' }}>{service.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center mb-16">
              <span className="section-label">Our People</span>
              <h2>The House Team</h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedElement key={member.id} delay={i * 0.1}>
                <div className="flex gap-8 items-start bg-white p-8 rounded">
                  <div
                    className="w-[100px] h-[100px] rounded-full flex-shrink-0 flex items-center justify-center text-3xl"
                    style={{ background: 'var(--color-sage-light)', fontFamily: 'var(--font-display)', color: 'var(--color-ocean)' }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="mb-1">{member.name}</h4>
                    <p className="text-sm mb-2" style={{ color: 'var(--color-ocean)' }}>{member.role}</p>
                    <p className="text-sm" style={{ color: '#666' }}>{member.bio}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Chapel */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 0%, #1a1f20 100%)', color: 'white' }}>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <AnimatedElement animation="fade-left">
              <div>
                <span className="section-label" style={{ color: 'var(--color-gold)' }}>St. Francis Chapel</span>
                <h2 className="mb-8" style={{ color: 'white' }}>Our Prayer Rhythm</h2>
                <p style={{ opacity: 0.85 }} className="mb-4">The chapel is a quiet, reflective space for prayer and small gatherings, open for all guests. During the week we have regular Prayer Times that are open to the public &mdash; everyone is welcome to join in.</p>
                <p style={{ opacity: 0.85 }}>Our beautifully handmade prayer stools are crafted from original Sister Eveleen Retreat House weatherboard or Rimu by Dugald Wilson from our Board. Suggested Koha is $50.</p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-right">
              <div className="p-8 rounded" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 className="mb-4" style={{ color: 'var(--color-gold)', fontSize: '1.3rem' }}>Weekly Prayer Times</h3>
                {prayerTimes.map((pt, i) => (
                  <div key={i} className="flex justify-between py-2" style={{ borderBottom: i < prayerTimes.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <span style={{ fontWeight: 400 }}>{pt.day}, {pt.time}</span>
                    <span style={{ color: 'var(--color-ocean-light)', fontStyle: 'italic' }}>{pt.type}</span>
                  </div>
                ))}
                <div className="mt-4 p-4 rounded text-sm" style={{ background: 'rgba(201, 169, 97, 0.1)', color: 'var(--color-gold)' }}>
                  All prayer times are open to the public. Everyone is welcome.
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center mb-16">
              <span className="section-label">Gallery</span>
              <h2>Glimpses of Our Retreat</h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridTemplateRows: 'repeat(2, 250px)' }}>
            {galleryImages.slice(0, 5).map((img, i) => (
              <AnimatedElement
                key={img.id}
                delay={i * 0.05}
                className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <div className="relative overflow-hidden rounded group h-full">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm">{img.caption}</span>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="py-32" style={{ background: 'var(--color-sand)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <AnimatedElement>
            <div className="text-center mb-16">
              <span className="section-label">See & Do</span>
              <h2>Things to Do Nearby</h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thingsToDo.map((thing, i) => (
              <AnimatedElement key={thing.id} delay={i * 0.05}>
                <div className="bg-white p-8 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'var(--color-sage-light)', color: 'var(--color-ocean-deep)' }}
                  >
                    {iconMap[thing.icon]}
                  </div>
                  <h4 className="mb-2">{thing.title}</h4>
                  <p className="text-sm" style={{ color: '#666' }}>{thing.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 text-center" style={{ background: 'var(--color-ocean)', color: 'white' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <AnimatedElement>
            <p
              className="text-4xl mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)', lineHeight: 1 }}
            >
              &ldquo;
            </p>
            <p
              className="mb-8 mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontStyle: 'italic',
                lineHeight: 1.4,
              }}
            >
              Thank you for the hidden treasure on the hill... and the warm hospitality and care it provides that supports us to open to the hidden treasure within our hearts.
            </p>
            <p className="text-sm" style={{ opacity: 0.8, letterSpacing: '0.1em' }}>&mdash; A Guest</p>
          </AnimatedElement>
        </div>
      </section>

      {/* Access */}
      <section className="py-32" style={{ background: 'var(--color-sand)' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <AnimatedElement animation="fade-left">
              <div>
                <span className="section-label">Getting Here</span>
                <h2 className="mb-8">Access Information</h2>
                <p className="mb-4">SERH is a very secluded retreat, which unfortunately means there is limited vehicular access.</p>
                <p className="mb-4">Cars should be parked beside the Scarborough pool (marked on the map), as there is no parking or easy drop-off access at SERH. From there, getting to SERH involves a ten minute uphill walk, then a short walk up a steep uneven zigzag path that is not wheelchair friendly.</p>
                <p className="mb-4">We are well accessible by public transport, foot, or bike. You will receive detailed instructions before your arrival.</p>

                <div className="bg-white p-8 rounded mt-8" style={{ borderLeft: '3px solid var(--color-gold)' }}>
                  <h4 className="mb-2" style={{ color: 'var(--color-earth)' }}>Address</h4>
                  <p>6 Whitewash Head Road<br />Sumner, Christchurch<br />New Zealand</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-right">
              <div className="h-[400px] rounded overflow-hidden" style={{ background: 'var(--color-ocean-light)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d172.7625!3d-43.5675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318b3a7fce9a49%3A0x500ef6143a2e4f0!2sSumner%2C+Christchurch!5e0!3m2!1sen!2snz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sister Eveleen Retreat House Location"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32" style={{ background: 'var(--color-warm-white)' }}>
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <AnimatedElement>
            <h2 className="mb-4">Stay Connected</h2>
            <p className="mx-auto mb-8" style={{ color: '#666' }}>
              Receive updates about upcoming retreats, reflections, and news from Sister Eveleen Retreat House.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for subscribing!')
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email address"
                required
                aria-label="Email address"
                className="flex-1 px-6 py-4 rounded text-base transition-colors duration-300 focus:outline-none"
                style={{ border: '1px solid var(--color-sand-dark)', fontFamily: 'var(--font-body)' }}
              />
              <button type="submit" className="btn btn-primary px-8 justify-center">
                Subscribe
              </button>
            </form>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <AnimatedElement animation="fade-left">
              <div>
                <span className="section-label" style={{ color: 'var(--color-gold)' }}>Get in Touch</span>
                <h2 className="mb-8" style={{ color: 'white' }}>Contact Us</h2>
                <p style={{ opacity: 0.85 }} className="mb-8">
                  We look forward to welcoming and hosting you! If you have any questions or would like to make a booking, please don't hesitate to reach out.
                </p>

                <div className="space-y-4 mb-12">
                  <div className="flex gap-4">
                    <Phone size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} style={{ color: 'white' }}>{contactInfo.phone}</a>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                    <a href={`mailto:${contactInfo.email}`} style={{ color: 'white' }}>{contactInfo.email}</a>
                  </div>
                  <div className="flex gap-4">
                    <MapPin size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      {contactInfo.address.map((line, i) => (
                        <span key={i}>{line}{i < contactInfo.address.length - 1 && <br />}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-right">
              <div className="p-12 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <form onSubmit={handleSubmit}>
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                  ].map((field) => (
                    <div key={field.id} className="mb-4">
                      <label htmlFor={field.id} className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{field.label}</label>
                      <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        required={field.id !== 'subject'}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        className="w-full p-4 rounded text-white text-base transition-colors duration-300 focus:outline-none"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          fontFamily: 'var(--font-body)',
                        }}
                      />
                    </div>
                  ))}
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Message</label>
                    <textarea
                      id="message"
                      placeholder="Your message..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded text-white text-base transition-colors duration-300 focus:outline-none resize-y"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'var(--font-body)',
                        minHeight: '150px',
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  )
}
