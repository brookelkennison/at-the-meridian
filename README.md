# At The Meridian

**Technology built to scale.**

Premium agency website built with Next.js 15, React 19, Payload CMS 3, and MongoDB.

## Getting Started

### Prerequisites

- Node.js 18.17+
- MongoDB (local or Atlas connection string)

### Setup

```bash
# Install dependencies
npm install

# Copy env file and update values
cp .env.example .env

# Start development server
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000)
The CMS admin lives at [http://localhost:3000/admin](http://localhost:3000/admin)

On first visit to `/admin`, you'll create your admin user account.

### Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `PAYLOAD_SECRET` | Secret key for Payload CMS (change in production) |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site |

## Project Structure

```
src/
├── app/
│   ├── (frontend)/       # Public-facing pages
│   │   ├── page.tsx      # Home
│   │   ├── about/        # Brand story & mission
│   │   ├── services/     # What we build
│   │   ├── process/      # How it works (5-step timeline)
│   │   ├── portfolio/    # Case studies
│   │   ├── blog/         # Insights & articles
│   │   └── contact/      # Discovery questionnaire
│   ├── (payload)/        # Payload CMS admin & API
│   └── api/inquiries/    # Form submission endpoint
├── components/           # Shared UI components
├── payload/collections/  # CMS content models
└── lib/                  # Utilities
```

## CMS Collections

- **Projects** — Portfolio case studies
- **Posts** — Blog articles
- **Media** — Image uploads with responsive sizes
- **Inquiries** — Discovery form submissions
- **Users** — Admin authentication

## Tech Stack

Next.js 15 · React 19 · Payload CMS 3 · MongoDB · TypeScript · Tailwind CSS · Framer Motion

## Brand

Colors: Deep Ocean `#1A3D4F` · Coastal Teal `#2E7D9E` · Meridian Sky `#C2EDFF` · Horizon `#E8F7FF` · Warm Sand `#F7F2EA` · Driftwood `#D4C4A8`

Typography: Raleway (display) · Inter (body) · Cormorant Garamond (accent)

---

*atthemeridian.co*
