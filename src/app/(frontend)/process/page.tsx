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
// import Reveal from '@/components/Reveal'
// import ParallaxBackdrop from '@/components/ParallaxBackdrop'
// import { images } from '@/lib/images'
//
// export const metadata = {
//   title: 'Process — At The Meridian',
//   description:
//     'A four-phase ascent: diagnose, architect, build, compound. Clear timelines, no scope creep, outcomes you can measure.',
// }
//
// const processSteps = [
//   {
//     number: '01',
//     title: 'Diagnose',
//     duration: 'Week 1',
//     description:
//       'We audit your funnel, traffic, conversion paths, and CRM — surfacing exactly what’s leaking before we touch anything.',
//     deliverable: 'A clear project brief and strategic recommendation.',
//   },
//   {
//     number: '02',
//     title: 'Architect',
//     duration: 'Week 2',
//     description:
//       'Strategy, sitemap, copy structure, and tech stack — defined as a system before a single pixel moves.',
//     deliverable: 'A complete project plan with weekly milestones.',
//   },
//   {
//     number: '03',
//     title: 'Build',
//     duration: 'Weeks 3–6',
//     description:
//       'Design and engineering happen in lockstep with copy and SEO. No handoffs, no silos — one team, one timeline.',
//     deliverable: 'A working, tested system ready for review.',
//   },
//   {
//     number: '04',
//     title: 'Compound',
//     duration: 'Week 7+',
//     description:
//       'We hand off — or stay on retainer to run the channels that turn the launch into a year of compounding pipeline.',
//     deliverable: 'Live system with post-launch support & reporting.',
//   },
// ]
//
// export default function ProcessPage() {
//   return (
//     <div className="bg-bg text-ink font-sans font-light antialiased">
//       {/* ─────────── Hero ─────────── */}
//       <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmin] h-[140vmin]"
//           style={{
//             background:
//               'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 50%)',
//           }}
//         />
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20 relative z-10">
//           <span className="eyebrow-dark">How We Work</span>
//           <h1 className="headline text-[44px] sm:text-7xl lg:text-8xl mt-7 mb-8 max-w-[14ch]">
//             A four-phase <em className="hero-italic-grad font-light">ascent.</em>
//           </h1>
//           <p className="text-ink-dim text-base sm:text-lg max-w-[56ch] leading-relaxed">
//             Clear timelines and transparent planning from kickoff to launch. No surprises, no scope creep — just a real plan, executed with precision.
//           </p>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
//       </header>
//
//       {/* ─────────── Steps ─────────── */}
//       <section className="border-t border-line py-20 lg:py-28">
//         <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//             {processSteps.map((step, i) => (
//               <Reveal
//                 key={step.number}
//                 delay={i * 80}
//                 className="relative pt-8 border-t border-line-strong"
//               >
//                 <span className="absolute -top-px left-0 w-8 h-px bg-accent" />
//                 <span className="inline-block text-[10px] tracking-[0.22em] uppercase text-accent border border-accent/40 rounded-full px-3 py-1 mb-6">
//                   {step.duration}
//                 </span>
//                 <div className="font-serif italic text-sm text-ink-faint mb-2">
//                   {step.number}
//                 </div>
//                 <h2 className="font-serif font-light text-2xl tracking-tight mb-3">
//                   {step.title}
//                 </h2>
//                 <p className="text-sm text-ink-dim leading-relaxed mb-4">
//                   {step.description}
//                 </p>
//                 <p className="font-serif italic text-sm text-accent/80 leading-snug">
//                   {step.deliverable}
//                 </p>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* ─────────── Quote band ─────────── */}
//       <section className="relative h-[320px] sm:h-[400px] lg:h-[460px] w-full border-y border-line">
//         <ParallaxBackdrop
//           src={images.heroOceanAerial}
//           alt="A clear plan, executed with precision"
//           strength={20}
//           overlay={0.6}
//           sizes="100vw"
//           className="absolute inset-0"
//         />
//         <div
//           aria-hidden
//           className="absolute inset-x-0 top-0 h-28 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to bottom, #0a0a0b, transparent)' }}
//         />
//         <div
//           aria-hidden
//           className="absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to top, #0a0a0b, transparent)' }}
//         />
//         <div className="relative z-20 h-full flex items-center justify-center px-6">
//           <Reveal className="text-center max-w-[760px]">
//             <p className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-tight text-ink">
//               “No surprises. No scope creep. Just a clear plan, <em className="italic text-accent-bright">executed with precision.</em>”
//             </p>
//           </Reveal>
//         </div>
//       </section>
//
//       {/* ─────────── CTA ─────────── */}
//       <section className="relative overflow-hidden py-24 lg:py-36 text-center">
//         <div
//           aria-hidden
//           className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin]"
//           style={{
//             background:
//               'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 60%)',
//           }}
//         />
//         <div className="max-w-2xl mx-auto px-5 relative z-10">
//           <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mb-9">
//             Ready to start <em className="italic text-accent">your ascent?</em>
//           </h2>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent-bright transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(125,211,252,0.25)]"
//           >
//             Book a discovery call <span aria-hidden>→</span>
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }
//
