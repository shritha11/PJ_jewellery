import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1722410180687-b05b50922362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Temple Necklace Set",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Layered Haaram",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721807644561-9efcabee5c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    name: "Bridal Choker",
  },
]

export default function TempleJewellery() {
  return (
    <main className="bg-[#faf6ee]">

      <section className="bg-[#f5ede0] py-24">

        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">

          <p
            className="text-[#b88b2b] uppercase tracking-widest text-sm mb-3"
            style={{
              fontFamily: '"Mukta:Bold", sans-serif',
            }}
          >
            Heritage Collection
          </p>

          <h1
            className="text-[#2b1212] text-5xl sm:text-7xl mb-5"
            style={{
              fontFamily: '"Rozha One:Regular", serif',
            }}
          >
            Heritage, cast in gold.
          </h1>

          <p
            className="text-[#5a3a2a] text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: '"Mukta:Regular", sans-serif',
            }}
          >
            Temple-inspired jewellery rooted in South
            Indian artistry, symbolism and celebration.
          </p>

        </div>
      </section>

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {products.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                category="Temple Line"
              />
            ))}

          </div>

        </div>
      </section>

      <section className="bg-[#7a1c1c] text-white py-20 text-center">

        <h2
          className="text-[#f4c66e] text-4xl mb-4"
          style={{
            fontFamily: '"Rozha One:Regular", serif',
          }}
        >
          Create something personal.
        </h2>

        <Link
          to="/enquire"
          className="inline-flex bg-[#f4c66e] text-[#2b1212] px-8 py-3 rounded-full"
          style={{
            fontFamily: '"Mukta:Bold", sans-serif',
          }}
        >
          Enquire about Temple Jewellery
        </Link>

      </section>

    </main>
  )
}