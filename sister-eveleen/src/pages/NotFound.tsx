import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-8"
      style={{ background: 'var(--color-sand)', paddingTop: '80px' }}
    >
      <div>
        <p className="text-6xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ocean-light)' }}>
          404
        </p>
        <h1 className="mb-4" style={{ fontSize: '2rem' }}>Page Not Found</h1>
        <p className="mb-8" style={{ color: '#666' }}>
          The page you're looking for doesn't exist. Perhaps you'd like to explore our retreat house instead?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn btn-primary no-underline">Go Home</Link>
          <Link to="/retreats" className="btn btn-secondary no-underline">View Retreats</Link>
        </div>
      </div>
    </section>
  )
}
