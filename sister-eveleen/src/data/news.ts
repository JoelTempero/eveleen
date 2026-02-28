import type { NewsPost } from '../types'

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    slug: 'meri-kirihimete',
    title: 'Meri Kirihimete',
    date: '20 December 2024',
    excerpt: 'Wishing you all a blessed Christmas and a peaceful New Year from all of us at Sister Eveleen Retreat House.',
    content: [
      'Meri Kirihimete from all of us at Sister Eveleen Retreat House!',
      'As another year draws to a close, we give thanks for all the guests who have come to find rest, peace, and renewal in this sacred space.',
      'We pray that this Christmas season brings you deep joy, gentle peace, and the warm embrace of God\'s love.',
      'The retreat house will be closed over the Christmas and New Year period and will reopen in mid-January. We look forward to welcoming you in the new year.',
      'With love and blessings,\nThe Sister Eveleen Team',
    ],
    image: 'https://static.wixstatic.com/media/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_5837a57954cf422ba8c7c5d6ea613aea~mv2_d_4288_2848_s_4_2.jpg',
    published: true,
  },
  {
    id: '2',
    slug: 'our-new-annual-programme-for-2025',
    title: 'Our New Annual Programme for 2025 is Out!',
    date: '15 November 2024',
    excerpt: 'We are excited to share our 2025 programme of retreats and events. Download it now and start planning your visit.',
    content: [
      'We are delighted to share our new annual programme for 2025!',
      'This year we are offering a rich variety of retreats — from weekend contemplative retreats to 7-day silent retreats, and everything in between.',
      'Highlights include our popular St Francis Retreat, a new Introductory Encounter with the Spiritual Exercises of St Ignatius, and the return of our Into the Desert 7-day silent retreat.',
      'We also continue to offer self-guided retreats throughout the year — book a room anytime and create your own retreat experience.',
      'Download the programme from our website and share it with friends. We look forward to welcoming you in 2025!',
    ],
    image: 'https://static.wixstatic.com/media/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/ea1911_aaf9c9a7f7f448819a4822e3469f908af000.jpg',
    published: true,
  },
  {
    id: '3',
    slug: 'we-added-more-retreats-to-our-programme',
    title: 'We Added More Retreats to Our Programme',
    date: '5 September 2024',
    excerpt: 'Due to popular demand, we have added several new retreats to our programme including an Introductory Encounter with the Spiritual Exercises of St Ignatius.',
    content: [
      'Great news — we have added more retreats to our programme!',
      'Due to the wonderful demand for retreats at Sister Eveleen, we are pleased to offer several additional opportunities this year.',
      'New additions include an Introductory Encounter with the Spiritual Exercises of St Ignatius and a "Seasons of Growth" retreat focused on navigating life\'s transitions with grace.',
      'Places are limited, so please book early to avoid disappointment. We look forward to welcoming you.',
    ],
    image: 'https://static.wixstatic.com/media/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_3441b6e9ef984e6a8a4520e9c51274fd~mv2_d_4288_2848_s_4_2.jpg',
    published: true,
  },
  {
    id: '4',
    slug: 'st-francis-retreat-in-the-programme-again',
    title: 'Our St. Francis Retreat is in the Programme Again',
    date: '1 July 2024',
    excerpt: 'The popular St Francis Retreat returns this September. Celebrate simplicity, creation, and the love of God in the spirit of St Francis.',
    content: [
      'We are pleased to announce that our beloved St Francis Retreat is back in the programme for 2024!',
      'This weekend retreat celebrates the life and spirituality of St Francis of Assisi — his love of simplicity, creation, and the deep love of God.',
      'The retreat will be held at Sister Eveleen Retreat House and will include guided reflections, shared prayer, walks in the garden, and plenty of time for rest.',
      'All are welcome. Book your place by emailing us.',
    ],
    image: 'https://static.wixstatic.com/media/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_75ac9d726cce45db9e09e791695c3a64~mv2_d_3504_2608_s_4_2.jpg',
    published: true,
  },
  {
    id: '5',
    slug: 'working-bee-february-2024',
    title: 'Looking for Willing Hands and People for Our Working Bee',
    date: '20 January 2024',
    excerpt: 'We are looking for volunteers to help with our annual working bee on 9-10 February 2024. Come help us care for this special place!',
    content: [
      'We are looking for willing hands and people for our Working Bee on 9-10 February 2024!',
      'There are always jobs to do around the retreat house — gardening, painting, cleaning, repairs, and more. If you have a few hours to spare, we would love your help.',
      'Morning tea and lunch will be provided. It\'s a great opportunity to meet other friends of the retreat house and contribute to keeping this special place beautiful.',
      'Please let us know if you can come so we can plan for numbers. Email us or call on 022 563 6879.',
    ],
    image: 'https://static.wixstatic.com/media/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_80,enc_avif,quality_auto/ea1911_c164c1bf31b74070bbb369834aaba324~mv2_d_4288_2848_s_4_2.jpg',
    published: true,
  },
]

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug)
}
