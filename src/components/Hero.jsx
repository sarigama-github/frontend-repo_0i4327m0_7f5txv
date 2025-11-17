export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-100 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-amber-700 font-semibold tracking-wide">Handpicked • Small Batch • Authentic</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Premium Spices & Sauces <span className="text-amber-600">from Shomee</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Bring restaurant-grade flavors home. Discover our curated range of single-origin spices and bold sauces crafted to elevate every meal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-700 transition-colors">Shop Featured</a>
              <a href="https://www.shomeespices.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white ring-1 ring-gray-200 px-6 py-3 text-gray-900 font-semibold hover:ring-gray-300 transition-colors">Visit Full Store</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Secure checkout on shomeespices.com</p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-amber-50 ring-1 ring-amber-100 p-3">
              <img src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGljZXN8ZW58MHwwfHx8MTc2MzM5NzMzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Spices" className="h-full w-full object-cover rounded-xl" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white/70 backdrop-blur rounded-xl p-3 ring-1 ring-amber-100 shadow-sm">
              <div className="text-sm text-gray-700">Free shipping over $49</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
