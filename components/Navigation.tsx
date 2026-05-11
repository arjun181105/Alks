'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Menu, X, Zap } from 'lucide-react'
import { BUSINESS } from '@/lib/business'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Reviews',  href: '#reviews'  },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen, setMobileOpen]  = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)] border-b border-[#ECEAE4]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[64px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); go('#home') }}
            className="flex items-center gap-2.5 group"
            aria-label="Alks Electricals — home"
          >
            <div className="w-8 h-8 bg-[#F59C00] rounded-lg grid place-items-center flex-shrink-0 group-hover:bg-[#FFAD1A] transition-colors">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} fill="white" />
            </div>
            <div className="leading-none">
              <span className={`block font-bold text-[15px] tracking-tight transition-colors ${scrolled ? 'text-[#0D1117]' : 'text-white'}`}>
                Alks Electricals
              </span>
              <span className={`block text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-[#6B7280]' : 'text-white/60'}`}>
                Wollert VIC
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Site navigation">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); go(l.href) }}
                className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all ${
                  scrolled
                    ? 'text-[#374151] hover:text-[#0D1117] hover:bg-gray-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href={BUSINESS.phoneTel}
              className="hidden sm:flex items-center gap-2 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.97] text-white font-bold text-[13px] px-4 py-2.5 rounded-xl transition-all shadow-[0_2px_8px_rgba(245,156,0,0.35)]"
            >
              <Phone className="w-3.5 h-3.5 animate-ring" strokeWidth={2.5} />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.phoneTel}
              className="sm:hidden w-10 h-10 bg-[#F59C00] grid place-items-center rounded-xl shadow-[0_2px_8px_rgba(245,156,0,0.35)]"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="w-4 h-4 text-white animate-ring" strokeWidth={2.5} />
            </a>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className={`md:hidden w-10 h-10 grid place-items-center rounded-xl border transition-all ${
                scrolled
                  ? 'border-[#E9E6DF] text-[#374151] hover:bg-gray-50'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[64px] z-40 bg-white shadow-xl border-b border-[#E9E6DF] md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {LINKS.map(l => (
                <a
                  key={l.href} href={l.href}
                  onClick={e => { e.preventDefault(); go(l.href) }}
                  className="text-[15px] text-[#374151] font-medium px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-[#0D1117] transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneTel}
                className="mt-2 flex items-center justify-center gap-2.5 bg-[#F59C00] hover:bg-[#FFAD1A] text-white font-bold text-[15px] px-5 py-3.5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4.5 h-4.5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
