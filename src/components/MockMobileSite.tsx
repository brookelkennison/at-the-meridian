/**
 * MockMobileSite — fake mobile screenshot of a fictional boutique hotel client (SALTAIR).
 * Used inside the phone mockup in the Our Philosophy section.
 *
 * To swap for a real screenshot, replace this component with:
 *   <Image src={shot} alt="..." fill className="object-cover object-top z-[2]" />
 */
export default function MockMobileSite() {
  return (
    <div
      className="absolute inset-0 z-[2] bg-[#f5efe6] overflow-hidden"
      aria-hidden
    >
      {/* Top spacing for the device notch */}
      <div className="h-9" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-3">
        <span className="font-serif text-[12px] tracking-[0.42em] font-medium text-[#1a2840]">
          SALTAIR
        </span>
        <div className="flex flex-col gap-1">
          <span className="w-4 h-px bg-[#1a2840]" />
          <span className="w-4 h-px bg-[#1a2840]" />
        </div>
      </div>

      {/* Hero — sunset gradient with sun + horizon */}
      <div
        className="relative mx-3 rounded-2xl overflow-hidden h-[218px]"
        style={{
          background:
            'linear-gradient(180deg, #d4a584 0%, #e8b48d 16%, #f3d4ad 30%, #c89476 41%, #6b7d8a 58%, #3a5566 76%, #1f3744 100%)',
        }}
      >
        {/* Sun glow at horizon */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
          style={{
            top: '40%',
            background:
              'radial-gradient(circle, rgba(255, 240, 215, 0.95) 0%, rgba(232, 180, 141, 0.45) 50%, transparent 75%)',
            filter: 'blur(4px)',
          }}
        />
        {/* Thin horizon line */}
        <div
          className="absolute left-0 right-0 h-px bg-white/25"
          style={{ top: '40%' }}
        />
        {/* Sun reflection on water */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-14 rounded-full opacity-55"
          style={{
            top: '42%',
            background:
              'linear-gradient(180deg, rgba(255, 240, 215, 0.7), transparent)',
            filter: 'blur(2px)',
          }}
        />

        {/* Glassy pill — top-left */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[8px] tracking-[0.28em] uppercase text-white/90 border border-white/30 px-2 py-1 rounded-full"
            style={{ background: 'rgba(0, 0, 0, 0.22)', backdropFilter: 'blur(6px)' }}
          >
            Spring 2026
          </span>
        </div>

        {/* Editorial headline — bottom-left */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="font-serif text-white text-[26px] leading-[0.95] tracking-tight font-light">
            A coastline,
            <br />
            <em className="italic">re-imagined.</em>
          </h1>
        </div>
      </div>

      {/* Sub copy + primary CTA */}
      <div className="px-5 pt-4">
        <p className="text-[10px] leading-[1.55] text-[#1a2840]/75 mb-3.5 font-light">
          Five boutique stays anchored to the Pacific. No two doors lead to the same view.
        </p>
        <button
          type="button"
          className="w-full bg-[#1a2840] text-[#f5efe6] py-2.5 rounded-full text-[10.5px] font-medium flex items-center justify-center gap-2 tracking-wide"
        >
          Reserve your stay <span>→</span>
        </button>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-2 px-5 my-3">
        <span className="flex-1 h-px bg-[#1a2840]/15" />
        <span className="text-[#c98563] text-[9px]">✦</span>
        <span className="flex-1 h-px bg-[#1a2840]/15" />
      </div>

      {/* Suites preview */}
      <div className="px-5">
        <div className="text-[8px] tracking-[0.32em] font-medium text-[#1a2840]/55 uppercase mb-2.5">
          The Suites
        </div>
        <div className="space-y-2.5">
          {[
            {
              name: 'Cove',
              sub: 'King Suite',
              price: '1,240',
              accent: 'linear-gradient(135deg, #5a7a8a, #8da9b8)',
            },
            {
              name: 'Cliff',
              sub: 'Two-Bedroom',
              price: '2,140',
              accent: 'linear-gradient(135deg, #8c6849, #c89476)',
            },
          ].map((s) => (
            <div key={s.name} className="flex gap-3 items-center">
              <div
                className="w-10 h-10 rounded-md flex-shrink-0"
                style={{ background: s.accent }}
              />
              <div className="flex-1 min-w-0">
                <div className="font-serif text-[11px] text-[#1a2840] flex items-baseline gap-1.5">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-[9px] text-[#1a2840]/50 font-light">
                    · {s.sub}
                  </span>
                </div>
                <div className="text-[8.5px] text-[#1a2840]/60 mt-0.5 font-light">
                  From{' '}
                  <span className="text-[#c98563] font-medium">${s.price}</span> / night
                </div>
              </div>
              <span className="text-[#1a2840]/30 text-[10px]">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
