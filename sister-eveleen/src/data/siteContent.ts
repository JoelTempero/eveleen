import type { TeamMember, Service, GalleryImage, ThingToDo, PrayerTime, ContactInfo } from '../types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sandi Hall',
    role: 'Resident Host',
    bio: 'Our Resident Host is the soul of Sister Ev and offers hospitality to our individual guests who come here to stay and seek peace and refreshment.',
    initials: 'SH',
  },
  {
    id: '2',
    name: 'Antje Duda',
    role: 'Director',
    bio: 'Antje looks after the bookings, planning, the day retreats and the calm running of the annual programme of the house.',
    initials: 'AD',
  },
]

export const services: Service[] = [
  {
    id: '1',
    title: 'Housekeeping',
    description: 'Every room has linen and towels. Rooms are cleaned before and after your stay by our staff.',
    icon: 'home',
  },
  {
    id: '2',
    title: 'Kitchen Access',
    description: 'Full kitchen available including oven, stove, microwave, fridge, freezer, and a variety of teas and coffees.',
    icon: 'coffee',
  },
  {
    id: '3',
    title: 'Spiritual Direction',
    description: 'Individual or group spiritual direction can be arranged with our qualified spiritual directors upon request.',
    icon: 'heart',
  },
  {
    id: '4',
    title: 'Beautiful Gardens',
    description: 'Our garden on Scarborough Hill offers peaceful spots overlooking the sea for quiet meditation and prayer.',
    icon: 'flower',
  },
  {
    id: '5',
    title: 'Group Retreats',
    description: 'We can organise contemplative mornings or day retreats tailored to your group\'s needs.',
    icon: 'calendar',
  },
  {
    id: '6',
    title: 'Vouchers & Gift Cards',
    description: 'Give the gift of rest and reflection. Vouchers available for day retreats, overnight stays, or longer retreats.',
    icon: 'gift',
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://static.wixstatic.com/media/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg',
    alt: 'Ocean view from Sister Eveleen Retreat House',
    caption: 'Ocean View',
  },
  {
    id: '2',
    src: 'https://static.wixstatic.com/media/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg',
    alt: 'Entrance to Sister Eveleen Retreat House',
    caption: 'Welcome Door',
  },
  {
    id: '3',
    src: 'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
    alt: 'St Francis Chapel at Sister Eveleen Retreat House',
    caption: 'St Francis Chapel',
  },
  {
    id: '4',
    src: 'https://static.wixstatic.com/media/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg',
    alt: 'Peaceful room at Sister Eveleen Retreat House',
    caption: 'Peaceful Rooms',
  },
  {
    id: '5',
    src: 'https://static.wixstatic.com/media/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg',
    alt: 'Garden path at Sister Eveleen Retreat House',
    caption: 'Garden Path',
  },
  {
    id: '6',
    src: 'https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg',
    alt: 'Sister Eveleen Retreat House exterior',
    caption: 'The Retreat House',
  },
]

export const thingsToDo: ThingToDo[] = [
  {
    id: '1',
    title: 'Coastal Walks',
    description: 'Many coastal walks are easily accessible \u2014 Scarborough to Taylor\u2019s Mistake, Flowers Track, the Esplanade, or a prayer pilgrimage to The Lighthouse in Mount Pleasant.',
    icon: 'mountain',
  },
  {
    id: '2',
    title: 'Sumner Beach',
    description: 'Below the house lies Sumner Beach \u2014 perfect for walking, running, swimming, or relaxing. Join the Scarborough Morning Dippers every Friday at 7am!',
    icon: 'waves',
  },
  {
    id: '3',
    title: 'Water Sports',
    description: 'Sumner beach offers great swell for surfing and SUP boarding, as well as kayaking and even sailing opportunities.',
    icon: 'compass',
  },
  {
    id: '4',
    title: 'Sunday Market',
    description: 'The Sumner Market runs every Sunday 10am\u20132pm on the corner of Marriner Street and the Esplanade \u2014 craft stalls, food trucks, and friendly locals.',
    icon: 'calendar',
  },
  {
    id: '5',
    title: 'Local Caf\u00e9s',
    description: 'Sumner Village has plenty of great caf\u00e9s \u2014 Dot Com, Utopia Ice, and Joe\u2019s Garage are local favourites for good food and coffee.',
    icon: 'coffee',
  },
  {
    id: '6',
    title: 'Christchurch City',
    description: 'Just 20 minutes by car (25 min by bus) \u2014 explore the city\u2019s history, shopping, sights, and urban adventures.',
    icon: 'mapPin',
  },
]

export const prayerTimes: PrayerTime[] = [
  { day: 'Monday', time: '12pm', type: 'Contemplative' },
  { day: 'Tuesday', time: '12pm', type: 'Taiz\u00e9' },
  { day: 'Wednesday', time: '7pm', type: 'Evening Prayer' },
  { day: 'Thursday', time: '12pm', type: 'Celtic Christian Service' },
]

export const contactInfo: ContactInfo = {
  phone: '+64 22 563 6879',
  email: 'enquiry@sistereretreat.com',
  address: ['6 Whitewash Head Road', 'Sumner, Christchurch', 'New Zealand'],
  instagram: 'https://www.instagram.com/sister.e.retreat/',
  facebook: 'https://www.facebook.com/sistereretreat/',
}

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/retreats', label: 'Retreats' },
  { path: '/why-go-on-a-retreat', label: 'Why Retreat?' },
  { path: '/news', label: 'News' },
  { path: '/history', label: 'History' },
  { path: '/become-a-friend', label: 'Become a Friend' },
]
