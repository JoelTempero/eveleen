export interface Room {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string[]
  features: string[]
  price: string
  priceNote?: string
  image: string
  images: string[]
  badge?: string
  capacity: string
  emailSubject: string
}

export interface Retreat {
  id: string
  slug: string
  title: string
  date: string
  dateEnd?: string
  time?: string
  description: string
  fullDescription: string[]
  image: string
  cost?: string
  costNote?: string
  leader?: string
  type: 'guided' | 'silent' | 'day' | 'weekend' | 'group'
  published: boolean
}

export interface NewsPost {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
  image: string
  author?: string
  published: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
}

export interface ThingToDo {
  id: string
  title: string
  description: string
  icon: string
}

export interface PrayerTime {
  day: string
  time: string
  type: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string[]
  instagram: string
  facebook: string
}
