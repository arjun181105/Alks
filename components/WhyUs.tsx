'use client'

import { motion } from 'framer-motion'
import { DollarSign, Sparkles, ShieldCheck, Clock } from 'lucide-react'
import { WHY_US } from '@/lib/business'
import { type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  CheckCircle: Sparkles,
  Shield: ShieldCheck,
  Clock,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[#F8F6F1] py-20 sm:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="mb-12 sm:mb-16">
          <p className="section-label mb-3">Why Alks</p>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight max-w-xl"
          >
            What a good tradie
            <br />
            <span className="text-[#6B7280]">actually delivers.</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {WHY_US.map((w, i) => {
            const Icon = iconMap[w.icon] ?? ShieldCheck
            return (
              <motion.div
                key={w.title}
                variants={item}
                className="bg-white border border-[#E9E6DF] rounded-2xl p-6 sm:p-8 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FEF3D0] rounded-xl grid place-items-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#F59C00]" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="text-[10px] font-mono text-[#F59C00] tracking-[0.15em] font-bold">
                        0{i + 1}
                      </span>
                      <h3 className="text-[#0D1117] font-bold text-[16px] sm:text-[17px] leading-snug">
                        {w.title}
                      </h3>
                    </div>
                    <p className="text-[#6B7280] text-[14px] leading-[1.75]">
                      {w.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 border-l-4 border-[#F59C00] pl-6 py-1"
        >
          <p className="text-[#374151] text-[17px] sm:text-[19px] font-medium leading-relaxed tracking-[-0.01em]">
            &ldquo;Showed up on time, explained everything clearly, and did an excellent job —
            will definitely use again.&rdquo;
          </p>
          <p className="mt-3 text-[#9CA3AF] text-[13px]">
            S P &mdash; Google review
          </p>
        </motion.blockquote>

      </div>
    </section>
  )
}
