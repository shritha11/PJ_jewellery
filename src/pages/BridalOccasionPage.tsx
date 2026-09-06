import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

type Product = {
  id: string
  img: string
  label: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}

const occasionData: Record<
  string,
  {
    title: string
    eyebrow: string
    description: string
    query: string
    categories: string[]
  }
> = {
  mehendi: {
    title: "Mehendi",
    eyebrow: "The Bridal Edit · Mehendi",
    description:
      "Delicate gold, playful details and pieces that move with you through colour, henna and celebration.",
    query: "Indian bridal mehendi gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },

  sangeet: {
    title: "Sangeet",
    eyebrow: "The Bridal Edit · Sangeet",
    description:
      "Statement jewellery made for movement, music and a night of celebration.",
    query: "Indian bridal sangeet gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },

  haldi: {
    title: "Haldi",
    eyebrow: "The Bridal Edit · Haldi",
    description:
      "Light, joyful jewellery designed to complement the colour and energy of your Haldi celebration.",
    query: "Indian bridal haldi gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },

  "wedding-day": {
    title: "Wedding Day",
    eyebrow: "The Bridal Edit · Wedding Day",
    description:
      "The main event, layered in tradition — timeless gold for the moments you'll remember forever.",
    query: "Indian bride wedding day traditional gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },

  reception: {
    title: "Reception",
    eyebrow: "The Bridal Edit · Reception",
    description:
      "Polished gold and refined statement pieces for the final celebration.",
    query: "Indian bridal reception gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },

  cocktail: {
    title: "Cocktail",
    eyebrow: "The Bridal Edit · Cocktail",
    description:
      "Contemporary pieces with evening glamour — made for a modern celebration.",
    query: "Indian bridal cocktail party gold jewellery",
    categories: ["All", "Earrings", "Necklaces", "Bracelets", "Rings"],
  },
}

const categoryQueries: Record<string, string> = {
  All: "",
  Earrings: "gold earrings",
  Necklaces: "gold necklace",
  Bracelets: "gold bracelet",
  Rings: "gold rings",
}

export default function BridalOccasionPage() {
  const { occasion } = useParams()

  const currentOccasion = occasion
    ? occasionData[occasion.toLowerCase()]
    : undefined

  const [activeCategory, setActiveCategory] = useState("All")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!currentOccasion) return

    const fetchJewellery = async () => {
      setLoading(true)
      setError("")

      try {
        const categoryQuery = categoryQueries[activeCategory]

        const query = [
          currentOccasion.query,
          categoryQuery,
        ]
          .filter(Boolean)
          .join(" ")

        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            query
          )}&per_page=8&orientation=square`,
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
            label: photo.alt || "Gold Jewellery",
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
  }, [occasion, activeCategory, currentOccasion])

  if (!currentOccasion) {
    return (
      <main className="min-h-screen bg-[#faf6ee] flex items-center justify-center px-4">
        <div className="text-center">
          <h1
            style={{ fontFamily: '"Rozha One:Regular", serif' }}
            className="text-[#2b1212] text-4xl mb-4"
          >
            Collection not found
          </h1>

          <Link
            to="/bridal-collections"
            style={{ fontFamily: '"Mukta:Bold", sans-serif' }}
            className="inline-block bg-[#7a1c1c] text-white px-6 py-3 rounded-full"
          >
            Back to Bridal Collections
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#faf6ee]">

      {/* Hero */}
      <section className="bg-[#7a1c1c] text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#f4c66e] uppercase tracking-[0.25em] text-sm mb-4"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            {currentOccasion.eyebrow}
          </p>

          <h1
            className="text-5xl sm:text-7xl mb-5"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            {currentOccasion.title}
          </h1>

          <p
            className="max-w-2xl mx-auto text-white/85 text-lg leading-relaxed"
            style={{
              fontFamily: '"Mukta:Regular", "sans-serif"',
            }}
          >
            {currentOccasion.description}
          </p>

        </div>
      </section>

      {/* Jewellery */}
      <section className="py-16 sm:py-20 bg-[#f5ede0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <div className="text-center mb-8">

            <p
              className="text-[#b88b2b] text-sm uppercase tracking-widest mb-2"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              Explore the edit
            </p>

            <h2
              className="text-[#2b1212] text-4xl sm:text-5xl mb-3"
              style={{
                fontFamily: '"Rozha One:Regular", serif',
              }}
            >
              Find your {currentOccasion.title} jewellery
            </h2>

            <p
              className="text-[#5a3a2a] text-base sm:text-lg"
              style={{
                fontFamily: '"Mukta:Regular", sans-serif',
              }}
            >
              Browse by jewellery type.
            </p>

          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {currentOccasion.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
                className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-[#2b1212] text-white"
                    : "bg-white text-[#2b1212] border border-[#d4b078] hover:bg-[#f0e6d0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products */}
          {loading ? (
            <div className="py-16 text-center">
              <p
                className="text-[#5a3a2a] text-lg"
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              >
                Finding pieces for your {currentOccasion.title}...
              </p>
            </div>
          ) : error ? (
            <div className="py-16 text-center">
              <p
                className="text-[#7a1c1c]"
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              >
                {error}
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center">
              <p
                className="text-[#5a3a2a]"
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              >
                No jewellery found for this selection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm group"
                >
                  <div className="relative aspect-square overflow-hidden">

                    <img
                      src={product.img}
                      alt={product.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />

                    <Link
                      to={`/enquire?piece=${encodeURIComponent(
                        product.label
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
                    </Link>

                  </div>

                  <div className="p-3">
                    <p
                      className="text-[#2b1212] text-base"
                      style={{
                        fontFamily: '"Mukta:Regular", sans-serif',
                      }}
                    >
                      {product.label}
                    </p>

                    <p
                      className="text-[#8b6a55] text-xs mt-1"
                      style={{
                        fontFamily: '"Mukta:Regular", sans-serif',
                      }}
                    >
                      Photo by {product.photographer}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* Styling CTA */}
      <section className="bg-[#faf6ee] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <p
            className="text-[#b88b2b] text-sm uppercase tracking-widest mb-3"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Need a little help?
          </p>

          <h2
            className="text-[#2b1212] text-4xl sm:text-5xl mb-4"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Not sure what works for your {currentOccasion.title}?
          </h2>

          <p
            className="text-[#5a3a2a] text-lg max-w-xl mx-auto mb-7"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            Talk to our stylist and get recommendations based on your outfit,
            ceremony and personal style.
          </p>

          <Link
            to="/styling"
            className="inline-flex bg-[#7a1c1c] text-white px-8 py-3 rounded-full hover:bg-[#5e1515] transition-colors"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Talk to a Stylist →
          </Link>

        </div>
      </section>

      {/* Back */}
      <div className="bg-[#f5ede0] py-8 text-center">
        <Link
          to="/bridal-collections"
          className="text-[#5a3a2a] text-sm underline underline-offset-4 hover:text-[#7a1c1c]"
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
        >
          ← Back to Bridal Collections
        </Link>
      </div>

    </main>
  )
}