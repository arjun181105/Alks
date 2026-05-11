'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send, CheckCircle, Facebook } from 'lucide-react'
import { BUSINESS } from '@/lib/business'

const serviceOptions = [
  'Electrical Repairs & Installations',
  'Lighting & Power Points',
  'Furniture Assembly & Fixing',
  'General Handyman Services',
  'Appliance Installation & Setup',
  'Home Repairs & Maintenance',
  'Sensor & Security Lighting',
  'Power Points & Switchboards',
  'Other / Not sure',
]

const inputCls = `w-full bg-white border border-[#E9E6DF] text-[#0D1117] placeholder-[#9CA3AF] rounded-xl px-4 py-3.5 text-[14px] focus:outline-none focus:border-[#F59C00] focus:ring-2 focus:ring-[#F59C00]/20 transition-all`

export default function Contact() {
  const [form, setForm]           = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.service ? ` — ${form.service}` : ''}`
    )
    const body = encodeURIComponent(
      [
        `Hi Abhi,`,
        ``,
        `Name:    ${form.name}`,
        `Phone:   ${form.phone}`,
        `Service: ${form.service || 'Not specified'}`,
        ``,
        `Details:`,
        form.message || '(none)',
        ``,
        `---`,
        `Sent from alkselectricals.com.au`,
      ].join('\n')
    )
    window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="bg-[#111520] py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="mb-10 sm:mb-12">
          <p className="section-label mb-3">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em] leading-tight"
          >
            Let&apos;s get your job done.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Phone */}
            <a
              href={BUSINESS.phoneTel}
              className="group flex items-center gap-4 p-5 bg-[rgba(245,156,0,0.08)] hover:bg-[rgba(245,156,0,0.14)] border border-[rgba(245,156,0,0.2)] hover:border-[rgba(245,156,0,0.4)] rounded-2xl transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F59C00] grid place-items-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white animate-ring" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-bold text-[16px] group-hover:text-white transition-colors">
                  {BUSINESS.phone}
                </p>
                <p className="text-[#5A6278] text-[12px] mt-0.5">Fastest response — tap to call</p>
              </div>
            </a>

            {/* Info rows */}
            {[
              { icon: MapPin, label: BUSINESS.address.full, sub: 'Serving Melbourne\'s northern suburbs' },
              { icon: Clock,  label: 'Open 24 hours, 7 days', sub: 'Including weekends & public holidays' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-4 px-1">
                <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.04)] grid place-items-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#5A6278]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[#EDEEF2] text-[14px] font-medium">{label}</p>
                  <p className="text-[#5A6278] text-[12px] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1877F2]/[0.08] grid place-items-center flex-shrink-0">
                <Facebook className="w-4 h-4 text-[#1877F2]" strokeWidth={1.8} />
              </div>
              <p className="text-[#5A6278] group-hover:text-[#EDEEF2] text-[13px] transition-colors">
                facebook.com/alks.ahs
              </p>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
                <CheckCircle className="w-10 h-10 text-[#F59C00]" strokeWidth={1.5} />
                <h3 className="text-[#0D1117] font-bold text-lg">Sent!</h3>
                <p className="text-[#6B7280] text-[14px] max-w-xs leading-relaxed">
                  Abhi will be in touch shortly. For urgent work, call{' '}
                  <a href={BUSINESS.phoneTel} className="text-[#F59C00] font-medium">{BUSINESS.phone}</a>.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[#0D1117] font-bold text-[16px] mb-6">Get a free quote</h3>
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[#374151] text-[11px] font-semibold tracking-[0.1em] uppercase mb-2">
                        Name *
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name"
                        placeholder="Your name" value={form.name} onChange={onChange}
                        className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[#374151] text-[11px] font-semibold tracking-[0.1em] uppercase mb-2">
                        Phone *
                      </label>
                      <input id="phone" name="phone" type="tel" required autoComplete="tel"
                        placeholder="04xx xxx xxx" value={form.phone} onChange={onChange}
                        className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[#374151] text-[11px] font-semibold tracking-[0.1em] uppercase mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select id="service" name="service" value={form.service} onChange={onChange}
                        className={`${inputCls} pr-10 cursor-pointer`}>
                        <option value="">Select a service…</option>
                        {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[12px]">
                        ▼
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#374151] text-[11px] font-semibold tracking-[0.1em] uppercase mb-2">
                      Job details
                    </label>
                    <textarea id="message" name="message" rows={4}
                      placeholder="Describe the work you need done…"
                      value={form.message} onChange={onChange}
                      className={`${inputCls} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.98] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_16px_rgba(245,156,0,0.35)]"
                  >
                    <Send className="w-4 h-4" strokeWidth={2} />
                    Send enquiry
                  </button>

                  <p className="text-[#9CA3AF] text-[12px] text-center">
                    Your details are only used to respond to this enquiry.
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
