import { useState, useEffect } from "react"
export default function CeremonySection() {
  const [activeRegion, setActiveRegion] = useState("Telugu")
  const [activeOccasion, setActiveOccasion] = useState("Wedding day")
  const [activeCategory, setActiveCategory] = useState("All")

  const [products, setProducts] = useState<Product[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

  const categories = [
  "All",
  "Earrings",
  "Bracelets",
  "Pendants",
  "Rings",
  "Chains",
]
const occasions = [
  "Mehendi",
  "Sangeet",
  "Haldi",
  "Wedding day",
  "Reception",
  "Cocktail Party",
]
const NECKLACE1 =
  "https://images.unsplash.com/photo-1722410180687-b05b50922362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE2 =
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const NECKLACE3 =
  "https://images.unsplash.com/photo-1721807644561-9efcabee5c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS1 =
  "https://images.unsplash.com/photo-1706076876111-28bf14ec6169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const EARRINGS2 =
  "https://images.unsplash.com/photo-1654781456542-fdd1683c79c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
const BOUTIQUE_IMG =
  "https://images.unsplash.com/photo-1756483509254-3cc48a5a15b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
const TEAM_IMG =
  "https://images.unsplash.com/photo-1708534246055-d7b149acb731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
const regions = ["Telugu", "Tamil", "Kerala", "Bengali", "Punjabi"]
type Product = {
  id: string
  img: string
  label: string
  description: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}

const regionQueries: Record<string, string> = {
  Telugu: "South Indian Telugu bridal gold jewellery",
  Tamil: "Tamil bridal gold jewellery",
  Kerala: "Kerala bridal gold jewellery",
  Bengali: "Bengali bridal gold jewellery",
  Punjabi: "Punjabi bridal jewellery",
}

const occasionQueries: Record<string, string> = {
  Mehendi: "mehendi bridal jewellery",
  Sangeet: "sangeet bridal jewellery",
  Haldi: "haldi bridal jewellery",
  "Wedding day": "Indian wedding bridal gold jewellery",
  Reception: "Indian bridal reception jewellery",
  "Cocktail Party": "Indian cocktail party jewellery",
}

const categoryQueries: Record<string, string> = {
  All: "gold jewellery",
  Earrings: "gold earrings jewellery",
  Bracelets: "gold bracelets jewellery",
  Pendants: "gold pendants jewellery",
  Rings: "gold rings jewellery",
  Chains: "gold chains jewellery",
}

const jewelleryInfo: Record<string, { label: string; description: string }> = {
  Earrings: {
    label: "Gold Earrings",
    description: "Traditional gold earrings with an intricate design.",
  },
  Bracelets: {
    label: "Gold Bracelet",
    description: "Classic gold bracelet for an elegant traditional look.",
  },
  Pendants: {
    label: "Gold Pendant",
    description: "Elegant gold pendant with a timeless traditional finish.",
  },
  Rings: {
    label: "Gold Ring",
    description: "Delicate gold ring designed for everyday elegance.",
  },
  Chains: {
    label: "Gold Chain",
    description: "Classic gold chain that complements traditional looks.",
  },
  All: {
    label: "Gold Jewellery",
    description: "Timeless gold jewellery for your celebration.",
  },
}

useEffect(() => {
  const fetchJewellery = async () => {
    setLoading(true)
    setError("")

    try {
      const query = [
        regionQueries[activeRegion],
        occasionQueries[activeOccasion],
        categoryQueries[activeCategory],
      ].join(" ")

      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          query
        )}&per_page=5&orientation=square`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PIXEL_API_KEY,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status}`)
      }

      const data = await response.json()

      const info = jewelleryInfo[activeCategory] || jewelleryInfo.All

const formattedProducts: Product[] = data.photos.map(
  (photo: any, index: number) => ({
    id: String(photo.id),
    img: photo.src.medium,
    label:
      activeCategory === "All"
        ? [
            "Traditional Gold Necklace",
            "Bridal Gold Earrings",
            "Classic Gold Bracelet",
            "Heritage Gold Pendant",
            "Traditional Gold Ring",
          ][index] || info.label
        : info.label,
    description: info.description,
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
    pexelsUrl: photo.url,
  })
)

      setProducts(formattedProducts)
    } catch (err) {
      console.error("Jewellery API error:", err)
      setError("Couldn't load jewellery right now.")
    } finally {
      setLoading(false)
    }
  }

  fetchJewellery()
}, [activeRegion, activeOccasion, activeCategory])


  return (
    <section id="ceremony" className="bg-[#f5ede0] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <p
          style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          className="text-[#b88b2b] text-sm text-center uppercase tracking-widest mb-2"
        >
          RIVAAH · The Wedding Journey
        </p>
        <h2
          style={{ fontFamily: '"Rozha One:Regular", serif' }}
          className="text-[#2b1212] text-4xl sm:text-5xl text-center mb-4"
        >
          Jewellery, mapped to the ceremony
        </h2>
        <p
          style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
          className="text-[#5a3a2a] text-lg text-center max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Each moment of the wedding calls for something different — pick the
          ceremony, see what actually works for it.
        </p>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-7 py-3 rounded-full text-sm transition-colors ${
                activeRegion === r
                  ? "bg-[#7a1c1c] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Occasion tabs */}
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          {occasions.map((o) => (
            <button
              key={o}
              onClick={() => setActiveOccasion(o)}
              style={{
                fontFamily:
                  o === activeOccasion
                    ? '"Mukta:Bold", sans-serif'
                    : '"Mukta:Regular", sans-serif',
              }}
              className={`text-lg pb-1 transition-colors border-b-3 ${
                activeOccasion === o
                  ? "border-[#b88b2b] text-[#b88b2b]"
                  : "border-transparent text-[#5a3a2a] hover:text-[#b88b2b]"
              }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                activeCategory === c
                  ? "bg-[#2b1212] text-white"
                  : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
{/* Product grid */}
<div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">

  {loading ? (
    <div className="w-full py-12 text-center">
      <p
        style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
        className="text-[#5a3a2a] text-lg"
      >
        Finding jewellery for your moment...
      </p>
    </div>
  ) : error ? (
    <div className="w-full py-12 text-center">
      <p
        style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
        className="text-[#7a1c1c]"
      >
        {error}
      </p>
    </div>
  ) : products.length === 0 ? (
    <div className="w-full py-12 text-center">
      <p
        style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
        className="text-[#5a3a2a]"
      >
        No jewellery found for this selection.
      </p>
    </div>
  ) : (
    products.map((p) => (
      <div
        key={p.id}
        className="shrink-0 snap-start w-44 sm:w-52 rounded-2xl overflow-hidden bg-white shadow-sm group"
      >
        <div className="relative h-44 sm:h-52 overflow-hidden">

          <img
            src={p.img}
            alt={p.label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

          {/* Enquire button */}
          <a
            href={`/enquire?piece=${encodeURIComponent(p.label)}`}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              bg-[#7a1c1c]
              text-white
              px-5
              py-2.5
              rounded-full
              text-sm
              sm:text-base
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              whitespace-nowrap
              shadow-lg
            "
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
          >
            Enquire →
          </a>

        </div>

        <div className="p-3">

          <p
  style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
  className="text-[#2b1212] text-base sm:text-lg"
>
  {p.label}
</p>

<p
  style={{ fontFamily: '"Mukta:Regular", sans-serif' }}
  className="text-[#8b6a55] text-md mt-1 leading-relaxed"
>
  {p.description}
</p>

        </div>
      </div>
    ))
  )}

</div>
      </div>
    </section>
  )
}