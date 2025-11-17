export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bold flavors. Honest ingredients.</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We source directly from trusted farms and craft our sauces in small batches. Every jar and every pouch is made with care, ensuring maximum freshness, aroma, and flavor.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Single-origin spices with rich aromatics</li>
            <li>• Slow-simmered sauces with clean labels</li>
            <li>• No artificial colors or flavors</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-amber-200">
            <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBYm91dHxlbnwwfDB8fHwxNzYzMzk3MzM4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="About" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
