'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  to: number
  decimals?: number
  duration?: number
}

function CountUp({ to, decimals = 0, duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * to)
      if (progress >= 1) {
        setValue(to)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return <span ref={ref}>{value.toFixed(decimals)}</span>
}

const STATS = [
  {
    value: 5.0,
    decimals: 1,
    suffix: '★',
    label: 'Google Rating',
    sublabel: 'Every single review',
  },
  {
    value: 23,
    decimals: 0,
    suffix: '+',
    label: 'Verified Reviews',
    sublabel: 'All 5-star',
  },
  {
    value: 24,
    decimals: 0,
    suffix: '/7',
    label: 'Availability',
    sublabel: 'Including weekends',
  },
  {
    value: 100,
    decimals: 0,
    suffix: '%',
    label: 'Licensed Jobs',
    sublabel: 'Cert. of Electrical Safety',
  },
]

export default function StatsBar() {
  return (
    <section
      className="bg-white border-b border-[#E9E6DF]"
      aria-label="Key statistics"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < 3 ? 'lg:border-r lg:border-[#E9E6DF]' : ''}`}
            >
              <p className="text-[2.4rem] sm:text-[2.8rem] font-bold text-[#0D1117] leading-none tracking-[-0.03em] mb-2">
                <CountUp to={stat.value} decimals={stat.decimals} />
                <span className="text-[#F59C00]">{stat.suffix}</span>
              </p>
              <p className="text-[#0D1117] font-semibold text-[13px] sm:text-[14px] mb-0.5">
                {stat.label}
              </p>
              <p className="text-[#9CA3AF] text-[11px] sm:text-[12px]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
