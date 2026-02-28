import type { Room } from '../types'

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'single-room',
    title: 'Single Room',
    description: 'A cozy, tranquil space perfect for personal reflection and spiritual retreat.',
    fullDescription: [
      'Our single rooms offer a peaceful, private space for individual retreat guests. Each room is warm and inviting with captivating views of sky and sea.',
      'All rooms include heating, linen and towels provided. Rooms are cleaned before and after your stay by our staff.',
      'As a guest you have full access to the kitchen, chapel, gardens and all shared spaces in the retreat house.',
    ],
    features: ['Heating', 'Sea Views', 'Linen Provided'],
    price: 'From $65',
    priceNote: '/ night',
    image: 'https://static.wixstatic.com/media/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg',
    images: [
      'https://static.wixstatic.com/media/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg',
      'https://static.wixstatic.com/media/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg',
    ],
    badge: 'Most Popular',
    capacity: '1 Guest',
    emailSubject: 'Room%20Booking%20Enquiry%20-%20Single%20Room',
  },
  {
    id: '2',
    slug: 'twin-room',
    title: 'Twin Room',
    description: 'Ideal for couples or friends seeking a peaceful getaway together.',
    fullDescription: [
      'Our twin rooms are perfect for two guests sharing a retreat experience. The rooms are spacious enough for comfort while maintaining the intimate atmosphere of a retreat.',
      'Each twin room features two single beds, heating, and garden views. Linen and towels are provided.',
      'You will have full access to the kitchen, chapel, gardens and all shared spaces.',
    ],
    features: ['Heating', 'Garden Views', 'Linen Provided'],
    price: 'From $85',
    priceNote: '/ night',
    image: 'https://static.wixstatic.com/media/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg',
    images: [
      'https://static.wixstatic.com/media/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg',
    ],
    capacity: '2 Guests',
    emailSubject: 'Room%20Booking%20Enquiry%20-%20Twin%20Room',
  },
  {
    id: '3',
    slug: 'double-room',
    title: 'Double Room',
    description: 'A comfortable room with a double bed, ideal for couples on a retreat together.',
    fullDescription: [
      'Our double rooms provide a comfortable space for couples seeking rest and spiritual refreshment together.',
      'The main house features three double rooms, each with heating and lovely views. Linen and towels are provided.',
      'Full access to kitchen, chapel, gardens and all shared spaces is included.',
    ],
    features: ['Heating', 'Double Bed', 'Linen Provided'],
    price: 'From $85',
    priceNote: '/ night',
    image: 'https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg',
    images: [
      'https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg',
    ],
    capacity: '2 Guests',
    emailSubject: 'Room%20Booking%20Enquiry%20-%20Double%20Room',
  },
  {
    id: '4',
    slug: 'monastic-cell',
    title: 'Monastic Cell',
    description: 'Simple, contemplative accommodation in the recently remodelled Annex wing.',
    fullDescription: [
      'Our monastic-style cells in the Annex wing offer a stripped-back, contemplative retreat experience. These rooms are perfect for those seeking simplicity and solitude.',
      'Each cell is simply furnished with a single bed, a desk, and a chair. Heating, linen and towels are provided.',
      'The Annex wing was recently remodelled and offers a quiet, separate space from the main house.',
    ],
    features: ['Heating', 'Simple Furnishing', 'Linen Provided'],
    price: 'From $55',
    priceNote: '/ night',
    image: 'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
    images: [
      'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
    ],
    capacity: '1 Guest',
    emailSubject: 'Room%20Booking%20Enquiry%20-%20Monastic%20Cell',
  },
  {
    id: '5',
    slug: 'whole-house',
    title: 'Whole House Booking',
    description: 'Book the entire house for your team retreat, parish group, or special gathering.',
    fullDescription: [
      'Book the entire Sister Eveleen Retreat House for your group. This is ideal for parish retreats, team retreats, silent retreats, or special gatherings.',
      'The house accommodates up to 11 guests across 8 rooms, including 3 double rooms and 1 single room in the main house, plus 3 monastic-style cells in the Annex wing.',
      'The booking includes full use of the kitchen, chapel, gardens, lounge areas, and all facilities. The retreat is self-catered when booked as a whole house.',
    ],
    features: ['11 Beds', 'Self-Catered', 'All Facilities'],
    price: 'Contact Us',
    image: 'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
    images: [
      'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
      'https://static.wixstatic.com/media/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_738d657da53e4453bc7fd47731da8beb~mv2_d_4288_2848_s_4_2.jpg',
      'https://static.wixstatic.com/media/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg',
    ],
    capacity: 'Up to 11 Guests',
    emailSubject: 'Whole%20House%20Booking%20Enquiry',
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug)
}
