import { useEffect, useState } from 'react'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/products?featured=true&limit=8`)
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-2">A taste of our best-sellers. Shop the full range on our store.</p>
          </div>
          <a href="https://www.shomeespices.com" target="_blank" rel="noreferrer" className="hidden md:inline-flex rounded-full bg-gray-900 text-white px-5 py-2.5 hover:bg-black">Visit Store</a>
        </div>

        {loading && (
          <div className="text-center text-gray-600">Loading products...</div>
        )}
        {error && (
          <div className="text-center text-red-600">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p._id} className="group rounded-2xl ring-1 ring-gray-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-amber-50">
                  <img src={p.image_url || 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1600&auto=format&fit=crop'} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description || 'Delicious and aromatic.'}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-amber-700 font-semibold">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</span>
                    <a href={p.buy_url || 'https://www.shomeespices.com'} target="_blank" rel="noreferrer" className="inline-flex rounded-md bg-amber-600 text-white px-3 py-1.5 text-sm hover:bg-amber-700">Buy</a>
                  </div>
                </div>
              </article>
            ))}
            {products.length === 0 && (
              <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-gray-600">
                No featured products yet. Add some via the backend.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
