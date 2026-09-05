export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5ede0] animate-splash">

      <div className="text-center">

        {/* PJ */}
        <div
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
          className="text-[#7a1c1c] text-7xl sm:text-8xl leading-none animate-logo"
        >
          PJ
        </div>

        {/* Brand name */}
        <p
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
          className="mt-4 text-[#2b1212] text-sm sm:text-base tracking-[0.35em] uppercase animate-brand"
        >
          Jewellery Studio
        </p>

        <p
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
          className="mt-1 text-[#8b6a55] text-xs tracking-[0.3em] uppercase animate-brand"
        >
          & Creations
        </p>

        {/* Decorative gold line */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 animate-line">
          <span className="h-px w-10 bg-[#b88b2b]" />

          <span className="text-[#b88b2b] text-sm">
            ✦
          </span>

          <span className="h-px w-10 bg-[#b88b2b]" />
        </div>

      </div>
    </div>
  )
}