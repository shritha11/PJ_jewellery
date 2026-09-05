import FAQ from "@/components/FAQ"

export default function FAQPage() {
  return (
    <main className="bg-[#faf6ee]">

      <section className="bg-[#f5ede0] py-20 text-center">

        <p
          className="text-[#b88b2b] uppercase tracking-widest text-sm mb-3"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Need to know
        </p>

        <h1
          className="text-[#2b1212] text-5xl sm:text-6xl"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Questions before you enquire
        </h1>

      </section>

      <FAQ />

    </main>
  )
}