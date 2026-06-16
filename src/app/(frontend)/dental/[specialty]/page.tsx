import { notFound } from 'next/navigation'

// ============================================================================
// DISABLED FOR SIMPLIFIED LAUNCH (2026-06-09)
// TODO: This page is temporarily HIDDEN for the simplified home + contact
//       launch. It is NOT deleted. To restore: delete the notFound() stub
//       below and uncomment the original implementation that follows.
// ============================================================================
export default function Page() {
  // Route 404s while the page is disabled.
  notFound()
}

// ---------------------------------------------------------------------------
// ORIGINAL IMPLEMENTATION (commented out — TODO: restore when re-enabling)
// ---------------------------------------------------------------------------
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import type { Metadata } from 'next'
// import Reveal from '@/components/Reveal'
// import ParallaxBackdrop from '@/components/ParallaxBackdrop'
// import { images } from '@/lib/images'
// import { DENTAL_SPECIALTIES, getSpecialty } from '@/lib/dental'
//
// const BAND_IMAGES = [images.dentalCare, images.dentalSmile, images.dentalClinic]
//
// export async function generateStaticParams() {
//   return DENTAL_SPECIALTIES.map((s) => ({ specialty: s.slug }))
// }
//
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ specialty: string }>
// }): Promise<Metadata> {
//   const { specialty } = await params
//   const data = getSpecialty(specialty)
//   if (!data) return {}
//   return {
//     title: `${data.name} Marketing — At The Meridian`,
//     description: data.hero.sub,
//   }
// }
//
// export default async function DentalSpecialtyPage({
//   params,
// }: {
//   params: Promise<{ specialty: string }>
// }) {
//   const { specialty } = await params
//   const data = getSpecialty(specialty)
//   if (!data) notFound()
//
//   const bandImage =
//     BAND_IMAGES[DENTAL_SPECIALTIES.findIndex((s) => s.slug === data.slug) % BAND_IMAGES.length]
//
//   return (
//     <div className="bg-bg text-ink font-sans font-light antialiased">
//       {/* ─────────── Hero ─────────── */}
//       <header className="relative pt-36 pb-20 lg:py-36 overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmin] h-[140vmin]"
//           style={{
//             background:
//               'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 50%)',
//           }}
//         />
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
//           <Link
//             href="/dental"
//             className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-ink-faint hover:text-accent transition-colors mb-10"
//           >
//             <span aria-hidden>←</span> Dental practices
//           </Link>
//           <span className="eyebrow-dark">{data.hero.eyebrow}</span>
//           <h1 className="font-serif font-light tracking-tight leading-[0.98] text-[44px] sm:text-7xl lg:text-8xl mt-7 mb-8 max-w-[15ch]">
//             {data.hero.h1Pre}{' '}
//             <em className="hero-italic-grad font-light">{data.hero.h1Italic}</em>
//           </h1>
//           <p className="text-ink-dim text-base sm:text-lg max-w-[58ch] mb-12 leading-relaxed">
//             {data.hero.sub}
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(125,211,252,0.25)]"
//             >
//               Book a discovery call <span aria-hidden>→</span>
//             </Link>
//             <Link
//               href="/dental"
//               className="inline-flex items-center gap-2 px-8 py-4 border border-line-strong rounded-full text-sm hover:border-accent hover:text-accent transition-all"
//             >
//               All dental specialties
//             </Link>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
//       </header>
//
//       {/* ─────────── Pain points ─────────── */}
//       <section className="bg-bg-2 border-b border-line py-20 lg:py-32">
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
//           <Reveal className="text-center max-w-[640px] mx-auto mb-14">
//             <span className="eyebrow-dark mx-auto">If This Sounds Familiar</span>
//             <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl mt-6">
//               You’re leaving cases <em className="italic text-accent">on the table.</em>
//             </h2>
//           </Reveal>
//           <div className="grid sm:grid-cols-2 gap-5 max-w-[1080px] mx-auto">
//             {data.pains.map((pain, i) => (
//               <Reveal
//                 key={pain.title}
//                 delay={i * 60}
//                 className="p-7 lg:p-8 border border-line rounded-2xl bg-bg-3 hover:border-accent/30 transition-all"
//               >
//                 <h3 className="font-serif text-xl lg:text-2xl font-light tracking-tight mb-3">
//                   {pain.title}
//                 </h3>
//                 <p className="text-sm text-ink-dim leading-relaxed">{pain.body}</p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* ─────────── Outcomes ─────────── */}
//       <section className="border-b border-line py-20 lg:py-32">
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
//           <Reveal className="mb-14 max-w-[60ch]">
//             <span className="eyebrow-dark">What Changes</span>
//             <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl mt-6">
//               The version of your practice <em className="italic text-accent">that compounds.</em>
//             </h2>
//           </Reveal>
//           <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
//             {data.outcomes.map((o, i, arr) => (
//               <Reveal
//                 key={o.label}
//                 delay={i * 60}
//                 className={`py-10 pr-6 ${i < arr.length - 1 ? 'lg:border-r border-line' : ''}`}
//               >
//                 <div className="font-serif font-light text-3xl lg:text-5xl text-accent mb-3 tracking-tight leading-none">
//                   <em className="italic">{o.metric}</em>
//                 </div>
//                 <div className="text-[11px] tracking-[0.18em] uppercase text-ink-faint">
//                   {o.label}
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* ─────────── Atmosphere band ─────────── */}
//       <section className="relative h-[300px] sm:h-[380px] lg:h-[440px] w-full border-b border-line">
//         <ParallaxBackdrop
//           src={bandImage}
//           alt={`${data.name} — built to grow`}
//           strength={20}
//           overlay={0.62}
//           sizes="100vw"
//           className="absolute inset-0"
//         />
//         <div
//           aria-hidden
//           className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to bottom, #0a0a0b, transparent)' }}
//         />
//         <div
//           aria-hidden
//           className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to top, #0a0a0b, transparent)' }}
//         />
//         <div className="relative z-20 h-full flex items-center justify-center px-6">
//           <Reveal className="text-center max-w-[680px]">
//             <span className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-ink leading-snug tracking-tight">
//               {data.name}, marketed the way it actually grows.
//             </span>
//           </Reveal>
//         </div>
//       </section>
//
//       {/* ─────────── Approach ─────────── */}
//       <section className="bg-bg-2 border-b border-line py-20 lg:py-32">
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
//           <Reveal className="mb-14 max-w-[60ch]">
//             <span className="eyebrow-dark">How We Build</span>
//             <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl mt-6">
//               A system tailored to{' '}
//               <em className="italic text-accent">{data.name.toLowerCase()}.</em>
//             </h2>
//           </Reveal>
//           <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-14">
//             {data.approach.map((step, i) => (
//               <Reveal key={step.num} delay={i * 60} className="flex gap-6">
//                 <span className="font-serif italic text-2xl text-accent flex-shrink-0 leading-tight">
//                   {step.num}
//                 </span>
//                 <div>
//                   <h3 className="font-serif text-xl lg:text-2xl font-light tracking-tight mb-3">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-ink-dim leading-relaxed">{step.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* ─────────── Closing CTA ─────────── */}
//       <section className="relative py-24 lg:py-36 text-center overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin]"
//           style={{
//             background:
//               'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 60%)',
//           }}
//         />
//         <div className="max-w-2xl mx-auto px-5 relative z-10">
//           <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ink mb-10 leading-snug tracking-tight">
//             “{data.closing}”
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(125,211,252,0.25)]"
//           >
//             Book a discovery call <span aria-hidden>→</span>
//           </Link>
//         </div>
//       </section>
//
//       {/* ─────────── Other specialties ─────────── */}
//       <section className="bg-bg-2 border-t border-line py-16 lg:py-20">
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
//           <div className="flex items-center justify-center gap-3 mb-8">
//             <span className="w-7 h-px bg-accent" />
//             <span className="text-[11px] tracking-[0.32em] uppercase text-ink-faint font-medium">
//               Other Dental Specialties
//             </span>
//             <span className="w-7 h-px bg-accent" />
//           </div>
//           <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
//             {DENTAL_SPECIALTIES.filter((s) => s.slug !== data.slug).map((other) => (
//               <Link
//                 key={other.slug}
//                 href={`/dental/${other.slug}`}
//                 className="font-serif italic text-base sm:text-lg text-ink-dim hover:text-accent transition-colors"
//               >
//                 {other.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
//
