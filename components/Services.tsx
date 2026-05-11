'use client'

import { motion } from 'framer-motion'
import {
  Zap, Lightbulb, Wrench, Hammer, Plug, Home, Lamp, Layers,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES, BUSINESS } from '@/lib/business'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Lightbulb,
  Wrench,
  Hammer,
  Plug,
  Home,
  Flashlight: Lamp,
  SquareStack: Layers,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Services</p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight"
            >
              Everything electrical.
              <br />
              <span className="text-[#6B7280]">Plus the handyman jobs.</span>
            </h2>
          </div>
          <a
            href={BUSINESS.phoneTel}
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-[#374151] hover:text-[#0D1117] border border-[#E9E6DF] hover:border-[#D0CDC6] hover:bg-[#F8F6F1] px-4 py-2.5 rounded-xl transition-all flex-shrink-0"
          >
            <Zap className="w-3.5 h-3.5 text-[#F59C00]" strokeWidth={2.5} />
            Call for a quote
          </a>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Zap
            return (
              <motion.div
                key={service.id}
                variants={item}
                role="listitem"
                className="group bg-white border border-[#E9E6DF] hover:border-[#F59C00]/40 hover:shadow-[0_8px_32px_rgba(245,156,0,0.1)] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-[#FEF3D0] group-hover:bg-[#F59C00] rounded-xl grid place-items-center mb-4 transition-colors duration-300">
                  <Icon
                    className="w-5 h-5 text-[#F59C00] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-[#0D1117] font-semibold text-[14px] sm:text-[15px] leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-[1.7]">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <a
            href={BUSINESS.phoneTel}
            className="flex items-center justify-center gap-2 text-[14px] font-semibold text-[#374151] border border-[#E9E6DF] px-4 py-3.5 rounded-xl transition-all w-full hover:bg-[#F8F6F1]"
          >
            <Zap className="w-4 h-4 text-[#F59C00]" strokeWidth={2.5} />
            Call to discuss your job
          </a>
        </div>

      </div>
    </section>
  )
}
