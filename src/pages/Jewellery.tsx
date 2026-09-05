import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1722410180687-b05b50922362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Temple Necklace Set",
    category: "Necklaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1706076876111-28bf14ec6169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Jhumka Earrings",
    category: "Earrings",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Layered Haaram",
    category: "Necklaces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1654781456542-fdd1683c79c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Chandbali Drops",
    category: "Earrings",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721807644561-9efcabee5c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Bridal Choker",
    category: "Necklaces",
  },
]

const categories = [
  "Earrings",
  "Necklaces",
  "Bangles",
  "Bracelets",
  "Rings",
  "Chains",
  "Pendants",
]

export default function Jewellery() {
  return (
    <main className="bg-[#faf6ee]">

      {/* Hero */}
      <section className="bg-[#f5ede0] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#b88b2b] text-sm uppercase tracking-[0.25em] mb-3"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            The Jewellery Edit
          </p>

          <h1
            className="text-[#2b1212] text-5xl sm:text-6xl mb-5"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Jewellery for every story.
          </h1>

          <p
            className="max-w-2xl mx-auto text-[#5a3a2a] text-lg leading-relaxed"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            From everyday gold to statement bridal pieces,
            discover jewellery designed for every celebration.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <h2
            className="text-[#2b1212] text-3xl sm:text-4xl text-center mb-8"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Shop by category
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href="#collection"
                className="
                  px-6 py-3
                  rounded-full
                  border border-[#d4b078]
                  bg-white
                  text-[#2b1212]
                  hover:bg-[#f0e6d0]
                  transition-colors
                "
                style={{
                  fontFamily: '"Mukta:Regular", sans-serif',
                }}
              >
                {category}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="bg-[#f5ede0] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <div className="flex items-end justify-between mb-8">

            <div>
              <p
                className="text-[#b88b2b] uppercase tracking-widest text-sm"
                style={{
                  fontFamily: '"Mukta:Bold", sans-serif',
                }}
              >
                Curated in gold
              </p>

              <h2
                className="text-[#2b1212] text-3xl sm:text-4xl"
                style={{
                  fontFamily: '"Rozha One:Regular", serif',
                }}
              >
                Explore the collection
              </h2>
            </div>

            <Link
              to="/enquire"
              className="hidden sm:inline-flex text-[#7a1c1c]"
              style={{
                fontFamily: '"Mukta:Bold", sans-serif',
              }}
            >
              Need help choosing? →
            </Link>

          </div>

          <div
            id="collection"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {products.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                category={product.category}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h2
          className="text-[#b88b2b] text-4xl italic mb-4"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Looking for something specific?
        </h2>

        <p
          className="text-[#5a3a2a] mb-7"
          style={{
            fontFamily: '"Mukta:Regular", sans-serif',
          }}
        >
          Tell us the occasion and we'll curate a few pieces for you.
        </p>

        <Link
          to="/enquire"
          className="inline-flex bg-[#7a1c1c] text-white px-8 py-3 rounded-full"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Enquire now
        </Link>

      </section>

    </main>
  )
}