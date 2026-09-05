import { useState, useEffect } from "react"

type Product = {
  id: string
  img: string
  label: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}

export default function FestiveSection() {
  const [activeRegion, setActiveRegion] = useState("Telugu")
  const [activeFestival, setActiveFestival] = useState("Ugadi")
  const [activeCategory, setActiveCategory] = useState("All")

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const regions = [
    "Telugu",
    "Tamil",
    "Kerala",
    "Bengali",
    "Punjabi",
  ]

  const festivals: Record<string, string[]> = {
    Telugu: [
      "Ugadi",
      "Sankranti",
      "Bathukamma",
      "Bonalu",
      "Dasara",
      "Diwali",
      "Vinayaka Chavithi",
    ],

    Tamil: [
      "Pongal",
      "Tamil New Year",
      "Deepavali",
      "Navaratri",
      "Karthigai Deepam",
      "Thaipusam",
      "Chithirai Festival",
    ],

    Kerala: [
      "Onam",
      "Vishu",
      "Thrissur Pooram",
      "Attukal Pongala",
      "Navaratri",
      "Deepavali",
      "Christmas",
    ],

    Bengali: [
      "Durga Puja",
      "Kali Puja",
      "Poila Boishakh",
      "Lakshmi Puja",
      "Saraswati Puja",
      "Jagaddhatri Puja",
      "Jamai Shashti",
    ],

    Punjabi: [
      "Lohri",
      "Vaisakhi",
      "Gurpurab",
      "Diwali",
      "Teeyan",
      "Hola Mohalla",
      "Maghi",
    ],
  }

  const categories = [
    "All",
    "Earrings",
    "Bracelets",
    "Pendants",
    "Rings",
    "Chains",
  ]

  const regionQueries: Record<string, string> = {
    Telugu: "Telugu South Indian traditional gold jewellery",
    Tamil: "Tamil traditional gold jewellery",
    Kerala: "Kerala traditional gold jewellery",
    Bengali: "Bengali traditional gold jewellery",
    Punjabi: "Punjabi traditional gold jewellery",
  }

  const categoryQueries: Record<string, string> = {
    All: "gold jewellery",
    Earrings: "gold earrings jewellery",
    Bracelets: "gold bracelets jewellery",
    Pendants: "gold pendants jewellery",
    Rings: "gold rings jewellery",
    Chains: "gold chains jewellery",
  }

  // When region changes, select the first festival of that region
  useEffect(() => {
    setActiveFestival(festivals[activeRegion][0])
  }, [activeRegion])

  // Fetch jewellery from Pexels
  useEffect(() => {
    const fetchJewellery = async () => {
      setLoading(true)
      setError("")

      try {
        const query = [
          regionQueries[activeRegion],
          activeFestival,
          "festival celebration",
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

        const formattedProducts: Product[] = data.photos.map(
          (photo: any) => ({
            id: String(photo.id),
            img: photo.src.medium,
            label:
              photo.alt ||
              `${activeFestival} ${activeCategory} Jewellery`,
            photographer: photo.photographer,
            photographerUrl: photo.photographer_url,
            pexelsUrl: photo.url,
          })
        )

        setProducts(formattedProducts)
      } catch (err) {
        console.error("Festive jewellery API error:", err)
        setProducts([])
        setError("Couldn't load jewellery right now.")
      } finally {
        setLoading(false)
      }
    }

    fetchJewellery()
  }, [activeRegion, activeFestival, activeCategory])

  return (
    <section
      id="festive"
      className="bg-[#f5ede0] py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Heading */}
        <p
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
          className="text-[#b88b2b] text-sm text-center uppercase tracking-widest mb-2"
        >
          FESTIVE EDIT · Celebrations Across India
        </p>

        <h2
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
          className="text-[#2b1212] text-4xl sm:text-5xl text-center mb-4"
        >
          Jewellery, made for every celebration
        </h2>

        <p
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
          className="text-[#5a3a2a] text-lg text-center max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Every region celebrates differently — discover jewellery
          that belongs to the festival and the moment.
        </p>

        {/* Region tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRegion(r)}
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
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

        {/* Festival tabs */}
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          {festivals[activeRegion].map((festival) => (
            <button
              key={festival}
              onClick={() => setActiveFestival(festival)}
              style={{
                fontFamily:
                  festival === activeFestival
                    ? '"Mukta:Bold", sans-serif'
                    : '"Mukta:Regular", sans-serif',
              }}
              className={`text-lg pb-1 transition-colors border-b-3 ${
                activeFestival === festival
                  ? "border-[#b88b2b] text-[#b88b2b]"
                  : "border-transparent text-[#5a3a2a] hover:text-[#b88b2b]"
              }`}
            >
              {festival}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
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
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">

          {loading ? (
            <div className="w-full py-12 text-center">
              <p
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
                className="text-[#5a3a2a] text-lg"
              >
                Finding jewellery for your celebration...
              </p>
            </div>

          ) : error ? (
            <div className="w-full py-12 text-center">
              <p
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
                className="text-[#7a1c1c]"
              >
                {error}
              </p>
            </div>

          ) : products.length === 0 ? (
            <div className="w-full py-12 text-center">
              <p
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
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

                {/* Image */}
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
                    href={`/enquire?piece=${encodeURIComponent(
                      p.label
                    )}`}
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
                    style={{
                      fontFamily: '"Mukta:Bold", sans-serif',
                    }}
                  >
                    Enquire →
                  </a>

                </div>

                {/* Product information */}
                <div className="p-3">

                  <p
                    style={{
                      fontFamily: '"Mukta:Regular", sans-serif',
                    }}
                    className="text-[#2b1212] text-base sm:text-lg"
                  >
                    {p.label}
                  </p>

                  <p
                    style={{
                      fontFamily: '"Mukta:Regular", sans-serif',
                    }}
                    className="text-[#8b6a55] text-xs mt-1"
                  >
                    Photo by {p.photographer}
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