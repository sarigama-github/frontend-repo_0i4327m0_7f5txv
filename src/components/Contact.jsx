import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ ok: true, msg: data.message || 'Thanks! We will be in touch.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's connect</h2>
            <p className="mt-3 text-gray-600">Have questions about our spices or wholesale? Send us a note and we'll respond shortly.</p>
            <div className="mt-6 rounded-2xl ring-1 ring-amber-200 bg-amber-50 p-6 text-amber-900">
              <p className="font-semibold">Prefer shopping now?</p>
              <a href="https://www.shomeespices.com" target="_blank" rel="noreferrer" className="mt-2 inline-block rounded-md bg-amber-600 text-white px-4 py-2 hover:bg-amber-700">Go to shomeespices.com</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl ring-1 ring-gray-200 p-6 bg-white">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <button type="submit" disabled={loading} className="inline-flex justify-center rounded-md bg-amber-600 text-white px-4 py-2 font-semibold hover:bg-amber-700 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {status && (
                <p className={`${status.ok ? 'text-green-700' : 'text-red-600'} text-sm`}>{status.msg}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
