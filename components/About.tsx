'use client'

import { motion } from 'framer-motion'
import { Phone, ShieldCheck, MapPin, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import { BUSINESS } from '@/lib/business'

const facts = [
  { icon: ShieldCheck, text: 'Licensed electrician — Certificate of Electrical Safety on every job' },
  { icon: MapPin,       text: 'Based in Wollert, serving Melbourne\'s northern suburbs' },
  { icon: Users,        text: 'You deal directly with Abhi — no call centres or subcontractors' },
  { icon: Clock,        text: 'Available 24 hours, 7 days a week including public holidays' },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F6F1] py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#E9E6DF] aspect-[4/5]">
              <Image
                src="/about-abhi.png"
                alt="Abhi, licensed electrician at Alks Electricals, Wollert VIC"
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
              <p className="text-white/80 text-[12px] font-medium mt-0.5">Google rating</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">About</p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="text-[#F59C00]">Abhi.</span>
            </h2>

            <div className="space-y-4 text-[#6B7280] text-[15px] leading-[1.8] mb-8">
              <p>
                I run Alks Electricals and Handyman Services out of Wollert.
                Every job gets the same treatment — arrive on time, do the work right, leave the place clean.
              </p>
              <p>
                You deal with me directly. Every electrical job comes with a Certificate of Electrical Safety.
                And the price you get is a fair one.
              </p>
            </div>

            <ul className="space-y-3.5 mb-10" aria-label="Key facts about Alks Electricals">
              {facts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF3D0] grid place-items-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#F59C00]" strokeWidth={2} />
                  </div>
                  <span className="text-[#374151] text-[14px] leading-[1.65]">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-2.5 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.97] text-white font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_16px_rgba(245,156,0,0.35)]"
            >
              <Phone className="w-4 h-4 animate-ring" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
