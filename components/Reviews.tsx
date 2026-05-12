'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { REVIEWS, BUSINESS } from '@/lib/business'

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#F59C00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#F8F6F1] py-20 sm:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="section-label mb-3">Reviews</p>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight"
            >
              Don&apos;t take our word for it.
              <br />
              <span className="text-[#6B7280]">Take theirs.</span>
            </h2>
          </div>
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#0D1117] transition-colors flex-shrink-0"
          >
            See all on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2x2 grid — all 4 reviews */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={card}
              className="bg-white border border-[#E9E6DF] hover:border-[#F59C00]/40 hover:shadow-[0_6px_24px_rgba(245,156,0,0.08)] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <Stars />
                {/* Google wordmark */}
                <span className="text-[13px] font-semibold tracking-tight">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                </span>
              </div>

              <blockquote className="text-[#374151] text-[14px] leading-[1.75] flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <footer className="pt-4 border-t border-[#E9E6DF] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F59C00] grid place-items-center flex-shrink-0">
                  <span className="text-white font-bold text-[12px]">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-[#0D1117] font-semibold text-[13px]">{review.name}</p>
                  <p className="text-[#9CA3AF] text-[11px]">{review.date} · Google</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile see all */}
        <div className="mt-8 sm:hidden text-center">
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#0D1117] transition-colors"
          >
            See all on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
