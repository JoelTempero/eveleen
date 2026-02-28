import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/siteContent'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, handleEscape])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-[400ms]"
        style={{
          padding: scrolled ? '0.5rem 0' : '1rem 0',
          background: 'rgba(253, 252, 250, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid var(--color-sand-dark)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 no-underline">
              <div
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-2xl"
                style={{ background: 'var(--color-ocean)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                E
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
                Sister Eveleen
                <span
                  className="block"
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-ocean)',
                  }}
                >
                  Retreat House
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-wide no-underline hover:text-[var(--color-ocean)] transition-colors"
                  style={{
                    color: isActive(link.path) ? 'var(--color-ocean)' : 'var(--color-charcoal)',
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book-a-room"
                className="nav-cta-btn no-underline text-sm tracking-wide"
              >
                Book a Room
              </Link>
            </nav>

            <button
              className="lg:hidden p-2 bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} color="var(--color-charcoal)" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[1001] flex flex-col justify-center px-8"
          style={{ background: 'var(--color-warm-white)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="absolute top-8 right-8 bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: 'var(--color-charcoal)' }}
            autoFocus
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-2 no-underline"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: isActive(link.path) ? 'var(--color-ocean)' : 'var(--color-charcoal)',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-a-room"
              className="btn btn-primary mt-4 justify-center no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Room
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        .nav-cta-btn {
          background: var(--color-ocean);
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 2px;
          font-weight: 400;
          transition: background 0.3s;
        }
        .nav-cta-btn:hover {
          background: var(--color-ocean-deep);
          color: white !important;
        }
      `}</style>
    </>
  )
}
