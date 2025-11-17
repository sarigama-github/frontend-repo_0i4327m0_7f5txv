import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <Contact />
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Shomee Spices. All rights reserved. • Secure checkout handled on shomeespices.com
        </p>
      </footer>
    </div>
  )
}

export default App
