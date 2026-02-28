import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import { contactInfo } from '../../data/siteContent'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1f20', color: 'white', padding: '4rem 0 2rem' }}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <Link to="/" className="flex items-center gap-4 no-underline mb-4">
              <div
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-2xl"
                style={{ background: 'var(--color-ocean)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                E
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'white', lineHeight: 1.2 }}>
                Sister Eveleen
                <span className="block" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-body)', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-ocean)' }}>
                  Retreat House
                </span>
              </div>
            </Link>
            <p className="text-sm" style={{ opacity: 0.7, maxWidth: '300px' }}>
              A Christian retreat house nestled among native trees and beach flora on Scarborough Hill, Sumner &mdash; a sacred space to reflect, rest, pray, or simply be.
            </p>
          </div>

          <div>
            <h4 className="text-base mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <ul className="list-none space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/retreats', label: 'Retreats' },
                { to: '/book-a-room', label: 'Our Rooms' },
                { to: '/why-go-on-a-retreat', label: 'Why Retreat?' },
                { to: '/history', label: 'History' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base mb-4" style={{ color: 'white' }}>Visit</h4>
            <ul className="list-none space-y-2">
              {[
                { to: '/book-a-room', label: 'Book a Room' },
                { to: '/retreats', label: 'Retreat Programme' },
                { to: '/news', label: 'News' },
                { to: '/become-a-friend', label: 'Become a Friend' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm no-underline" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base mb-4" style={{ color: 'white' }}>Contact</h4>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="no-underline" style={{ color: 'rgba(255,255,255,0.7)' }}>{contactInfo.phone}</a></p>
              <p><a href={`mailto:${contactInfo.email}`} className="no-underline" style={{ color: 'rgba(255,255,255,0.7)' }}>{contactInfo.email}</a></p>
              {contactInfo.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
              >
                <Instagram size={20} />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-center" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          <p>&copy; {new Date().getFullYear()} Sister Eveleen Retreat House. Anglican Diocese of Christchurch.</p>
          <p>
            Website lovingly managed by humans.{' '}
            <Link to="/become-a-friend" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Get in touch
            </Link>{' '}
            if something needs correcting.
          </p>
        </div>
      </div>
    </footer>
  )
}
