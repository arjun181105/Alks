'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { REVIEWS, BUSINESS } from '@/lib/business'

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#F59C00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Reviews() {
  const displayed = REVIEWS.slice(0, 3)

  return (
    <section
      id="reviews"
      className="bg-white py-20 sm:py-28 border-y border-[#E9E6DF]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="section-label mb-3">Reviews</p>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0D1117] tracking-[-0.02em] leading-tight"
            >
              {BUSINESS.rating.toFixed(1)} stars out of 5
              <br />
              <span className="text-[#6B7280]">— every single time.</span>
            </h2>
          </div>

          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B7280] hover:text-[#0D1117] transition-colors flex-shrink-0"
          >
            See all {BUSINESS.reviewCount} reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {displayed.map((review) => (
            <motion.article
              key={review.name}
              variants={card}
              className="bg-[#FAFAF9] border border-[#E9E6DF] hover:border-[#F59C00]/40 hover:shadow-[0_6px_24px_rgba(245,156,0,0.08)] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            >
              {/* Google logo + stars */}
              <div className="flex items-center justify-between">
                <StarRow count={review.rating} />
                <svg className="w-14 h-5 opacity-60" viewBox="0 0 56 20" aria-label="Google" fill="none">
                  <text x="0" y="15" fill="#4285F4" fontFamily="sans-serif" fontSize="14" fontWeight="bold">G</text>
                  <text x="10" y="15" fill="#EA4335" fontFamily="sans-serif" fontSize="14" fontWeight="bold">o</text>
                  <text x="19" y="15" fill="#FBBC05" fontFamily="sans-serif" fontSize="14" fontWeight="bold">o</text>
                  <text x="28" y="15" fill="#4285F4" fontFamily="sans-serif" fontSize="14" fontWeight="bold">g</text>
                  <text x="37" y="15" fill="#34A853" fontFamily="sans-serif" fontSize="14" fontWeight="bold">l</text>
                  <text x="42" y="15" fill="#EA4335" fontFamily="sans-serif" fontSize="14" fontWeight="bold">e</text>
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-[#374151] text-[14px] leading-[1.75] flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer */}
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
            See all {BUSINESS.reviewCount} Google reviews
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
