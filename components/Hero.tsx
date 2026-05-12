'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { BUSINESS } from '@/lib/business'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const STATS = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '24+',  label: 'Verified Reviews' },
  { value: '24/7', label: 'Availability' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Background illustration */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center right' }}
        className="z-0 select-none"
        aria-hidden="true"
      />

      {/* Dark overlay — heavier on left so text is always readable */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(105deg, rgba(10,12,24,0.92) 45%, rgba(10,12,24,0.55) 100%)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center pt-28 pb-16 sm:pt-36">

        {/* Location breadcrumb */}
        <motion.p {...fadeUp(0)} className="text-[#F59C00] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
          Wollert &nbsp;·&nbsp; Victoria &nbsp;·&nbsp; Licensed Electrician
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-[2.8rem] sm:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-6 max-w-2xl"
        >
          A licensed electrician
          <br />who actually
          <br /><span className="text-[#F59C00] italic">shows up.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.16)} className="text-white/65 text-[16px] sm:text-[17px] leading-[1.75] max-w-md mb-10">
          Downlights, power points, switchboards &amp; handyman jobs.
          Wollert-based, serving Melbourne&apos;s North.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3">
          <a
            href={BUSINESS.phoneTel}
            className="cta-pulse inline-flex items-center justify-center gap-2.5 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.97] text-white font-bold text-[14px] px-7 py-4 rounded-xl transition-all uppercase tracking-widest shadow-[0_4px_20px_rgba(245,156,0,0.4)]"
          >
            <Phone className="w-4 h-4 animate-ring" strokeWidth={2.5} />
            Call {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center justify-center gap-2 text-[#0D1117] bg-white hover:bg-[#F0EDE8] font-semibold text-[14px] px-7 py-4 rounded-xl transition-all uppercase tracking-widest group"
          >
            Get a free quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* Stats bar — bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-3 divide-x divide-white/10">
          {STATS.map(stat => (
            <div key={stat.label} className="py-5 sm:py-7 px-3 sm:px-8 text-center sm:text-left">
              <p className="text-[#F59C00] font-bold text-[1.5rem] sm:text-[2rem] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-white/45 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
