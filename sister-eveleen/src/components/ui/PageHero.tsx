import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  overlay?: boolean
}

export default function PageHero({ title, subtitle, image, overlay = true }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center" style={{ paddingTop: '80px' }}>
      {image ? (
        <>
          <img
            src={image}
            alt=""
            role="presentation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-black/40" />}
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, var(--color-sand) 0%, var(--color-warm-white) 50%, var(--color-sage-light) 100%)',
          }}
        />
      )}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={image ? 'text-white' : ''}
          style={{ color: image ? 'white' : 'var(--color-charcoal)' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: image ? 'rgba(255,255,255,0.9)' : 'var(--color-earth)',
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
