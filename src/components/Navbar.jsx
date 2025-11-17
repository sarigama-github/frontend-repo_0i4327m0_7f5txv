import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-3">
            <span className="inline-block h-9 w-9 rounded-full bg-amber-500/10 ring-1 ring-amber-500/30 grid place-content-center text-amber-600 font-bold">S</span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-gray-900">Shomee Spices</span>
              <span className="text-xs text-gray-500">Premium Spices & Sauces</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#products" className="hover:text-amber-600 transition-colors">Shop</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            <a href="https://www.shomeespices.com" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 shadow hover:bg-amber-700 transition-colors">Visit Store</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3 text-gray-700">
            <a href="#products" className="block">Shop</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
            <a href="https://www.shomeespices.com" target="_blank" rel="noreferrer" className="block rounded-md bg-amber-600 text-white px-4 py-2 text-center">Visit Store</a>
          </div>
        </div>
      )}
    </header>
  )
}
