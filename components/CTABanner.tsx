'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/business'

export default function CTABanner() {
  return (
    <section
      className="bg-[#111520] py-14 sm:py-16 border-y border-[rgba(255,255,255,0.06)]"
      aria-label="Call to action"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <p className="text-[#F59C00] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
              Available 24/7 · Including weekends
            </p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-[-0.02em] leading-tight">
              Need an electrician today?
            </h2>
          </div>

          <a
            href={BUSINESS.phoneTel}
            className="cta-pulse flex-shrink-0 inline-flex items-center gap-3 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.97] text-white font-bold text-[17px] px-8 py-4 rounded-2xl transition-all shadow-[0_4px_20px_rgba(245,156,0,0.35)]"
          >
            <Phone className="w-5 h-5 animate-ring" strokeWidth={2.5} />
            {BUSINESS.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
