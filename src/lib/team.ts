// Placeholder team data — swap photos/names/bios when ready.
// All photos are stable Unsplash URLs (allowlisted in next.config.mjs).

const U = (id: string, w = 1200, h = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&crop=faces&auto=format&q=80`

export type TeamMember = {
  slug: string
  name: string
  role: string
  blurb: string
  bio: string
  linkedIn?: string
  portrait: string
  gallery: { src: string; alt: string }[]
}

export const TEAM: TeamMember[] = [
  {
    slug: 'brooke-kennison',
    name: 'Brooke Kennison',
    role: 'Founder & Principal',
    blurb:
      'With over a decade of operator experience inside high-growth businesses, Brooke leads strategy and engagement across every client engagement.',
    bio:
      'Brooke founded At The Meridian after years on the operator side of seven and eight-figure businesses, where she became known for translating ambitious revenue targets into the systems that actually deliver them. She brings that same operator clarity to every engagement — designing strategy and infrastructure that compound rather than just look good.',
    linkedIn: 'https://www.linkedin.com/',
    portrait: U('1573497019940-1c28c88b4f3e'),
    gallery: [
      { src: U('1531746020798-e6953c6e8e04', 900, 1200), alt: 'Brooke speaking at a panel.' },
      { src: U('1554151228-14d9def656e4', 900, 1200), alt: 'Brooke at the studio.' },
      { src: U('1488161628813-04466f872be2', 900, 1200), alt: 'Brooke on a project visit.' },
    ],
  },
  {
    slug: 'james-rivera',
    name: 'James Rivera',
    role: 'Engineering Director',
    blurb:
      'James leads our build practice — hand-coded, conversion-engineered, and ranked for the long arc, not the quick win.',
    bio:
      'A senior engineer with deep experience in performance, accessibility, and SEO-first architecture, James pairs craft with discipline. Outside the studio he is a runner, an unrepentant coffee snob, and the resident type-systems advocate.',
    linkedIn: 'https://www.linkedin.com/',
    portrait: U('1507003211169-0a1dd7228f2d'),
    gallery: [
      { src: U('1500648767791-00dcc994a43e', 900, 1200), alt: 'James at his desk.' },
      { src: U('1463453091185-61582044d556', 900, 1200), alt: 'James presenting to the team.' },
      { src: U('1485875437342-9b39470b3d95', 900, 1200), alt: 'James out for a run.' },
    ],
  },
  {
    slug: 'sara-okafor',
    name: 'Sara Okafor',
    role: 'Design Director',
    blurb:
      'Sara leads visual design — editorial systems, brand identity, and the kind of considered detail that makes a site feel inevitable.',
    bio:
      'Sara comes from an editorial design background and has spent the last eight years quietly shaping how premium brands present themselves online. She is a typography nerd, a sketchbook obsessive, and the person who finally convinced the team to retire Helvetica.',
    portrait: U('1494790108377-be9c29b29330'),
    gallery: [
      { src: U('1517841905240-472988babdf9', 900, 1200), alt: 'Sara in the studio.' },
      { src: U('1438761681033-6461ffad8d80', 900, 1200), alt: 'Sara reviewing print samples.' },
      { src: U('1487412720507-e7ab37603c6f', 900, 1200), alt: 'Sara at a gallery opening.' },
    ],
  },
  {
    slug: 'mateo-ng',
    name: 'Mateo Ng',
    role: 'Senior Strategist',
    blurb:
      'Mateo runs growth strategy — acquisition channels, conversion paths, and the analytics that prove (or disprove) the work.',
    bio:
      'Before joining At The Meridian, Mateo led growth at two B2B SaaS companies and ran paid acquisition for a venture-backed DTC brand. His superpower is taking messy attribution and producing a single, decisive recommendation.',
    portrait: U('1500648767791-00dcc994a43e'),
    gallery: [
      { src: U('1488161628813-04466f872be2', 900, 1200), alt: 'Mateo on stage.' },
      { src: U('1463453091185-61582044d556', 900, 1200), alt: 'Mateo with the team.' },
      { src: U('1507003211169-0a1dd7228f2d', 900, 1200), alt: 'Mateo at a client offsite.' },
    ],
  },
  {
    slug: 'lena-pham',
    name: 'Lena Pham',
    role: 'Brand Designer',
    blurb:
      'Lena translates brand strategy into visual systems — identity, type pairings, and the small details that hold everything together.',
    bio:
      'A graduate of RISD with a love for Swiss design and Japanese craft, Lena brings a quietly opinionated point of view to every brand engagement. She bakes obsessive sourdough on weekends and is currently learning the cello.',
    portrait: U('1531746020798-e6953c6e8e04'),
    gallery: [
      { src: U('1573497019940-1c28c88b4f3e', 900, 1200), alt: 'Lena at the design wall.' },
      { src: U('1494790108377-be9c29b29330', 900, 1200), alt: 'Lena reviewing prints.' },
      { src: U('1438761681033-6461ffad8d80', 900, 1200), alt: 'Lena in the workshop.' },
    ],
  },
  {
    slug: 'theo-hassan',
    name: 'Theo Hassan',
    role: 'Performance Engineer',
    blurb:
      'Theo owns site speed and Core Web Vitals. If something is slow, he has thoughts.',
    bio:
      'Theo joined from a major UK digital agency where he led performance engineering across enterprise clients. He is a competitive cyclist, an enthusiastic home-baker, and the team\'s unofficial vinyl curator.',
    portrait: U('1463453091185-61582044d556'),
    gallery: [
      { src: U('1485875437342-9b39470b3d95', 900, 1200), alt: 'Theo at a velodrome.' },
      { src: U('1507003211169-0a1dd7228f2d', 900, 1200), alt: 'Theo on a long ride.' },
      { src: U('1500648767791-00dcc994a43e', 900, 1200), alt: 'Theo at the office.' },
    ],
  },
  {
    slug: 'rina-soto',
    name: 'Rina Soto',
    role: 'Client Lead',
    blurb:
      'Rina runs every engagement end-to-end — scope, schedule, and the kind of communication clients actually trust.',
    bio:
      'Rina spent seven years inside a top-tier London consultancy before crossing over into agency life. She is allergic to surprises in client work and brings a remarkable calm to even the most ambitious launch.',
    portrait: U('1517841905240-472988babdf9'),
    gallery: [
      { src: U('1554151228-14d9def656e4', 900, 1200), alt: 'Rina at a client offsite.' },
      { src: U('1573497019940-1c28c88b4f3e', 900, 1200), alt: 'Rina in workshop mode.' },
      { src: U('1531746020798-e6953c6e8e04', 900, 1200), alt: 'Rina at the team retreat.' },
    ],
  },
  {
    slug: 'jordan-malik',
    name: 'Jordan Malik',
    role: 'CRM & Automation Lead',
    blurb:
      'Jordan turns demand into closed revenue — HubSpot, Salesforce, lifecycle, and the warm-handoff that makes sales love marketing.',
    bio:
      'A former RevOps lead at a mid-market SaaS company, Jordan obsesses over the seams between marketing, sales, and product. Outside work he is restoring a 1970s motorcycle and remains undefeated at studio Mario Kart.',
    portrait: U('1485875437342-9b39470b3d95'),
    gallery: [
      { src: U('1500648767791-00dcc994a43e', 900, 1200), alt: 'Jordan at a Pipeline meeting.' },
      { src: U('1463453091185-61582044d556', 900, 1200), alt: 'Jordan on the bike.' },
      { src: U('1507003211169-0a1dd7228f2d', 900, 1200), alt: 'Jordan with the team.' },
    ],
  },
]
