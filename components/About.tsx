'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import { BUSINESS } from '@/lib/business'

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#E9E6DF] aspect-[4/5]">
              <Image
                src="/about-abhi.png"
                alt="Abhi — licensed electrician, Wollert VIC"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-4 bg-[#F59C00] rounded-2xl px-5 py-3.5 shadow-[0_8px_24px_rgba(245,156,0,0.35)]"
            >
              <p className="text-white font-bold text-[22px] leading-none">5.0★</p>
              <p className="text-white/80 text-[12px] font-medium mt-0.5">{BUSINESS.reviewCount} Google reviews</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">About</p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight mb-6"
            >
              Hi, I&apos;m <span className="text-[#F59C00]">Abhi.</span>
            </h2>

            <div className="space-y-4 text-[#6B7280] text-[16px] leading-[1.85] mb-10">
              <p>
                I run Alks Electricals and Handyman Services out of Wollert.
                When you call me, I pick up. When I say I&apos;ll be there at 9am, I&apos;m there at 9am.
                Every electrical job comes with a Certificate of Electrical Safety — no shortcuts.
              </p>
              <p>
                You won&apos;t deal with a call centre or get handed off to someone else.
                It&apos;s just me, doing the work, at a fair price.
                That&apos;s why every single one of my reviews is five stars.
              </p>
            </div>

            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-3 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.97] text-white font-bold text-[16px] px-8 py-4 rounded-xl transition-all shadow-[0_4px_16px_rgba(245,156,0,0.35)]"
            >
              <Phone className="w-5 h-5 animate-ring" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
