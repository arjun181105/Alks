'use client'

import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/business'

export default function MobileCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-safe pb-4 pt-3 bg-white/95 backdrop-blur-sm border-t border-[#E9E6DF] shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)' }}
    >
      <a
        href={BUSINESS.phoneTel}
        className="flex items-center justify-center gap-3 bg-[#F59C00] hover:bg-[#FFAD1A] active:scale-[0.98] text-white font-bold text-[16px] py-4 rounded-2xl transition-all shadow-[0_4px_16px_rgba(245,156,0,0.4)] w-full"
        aria-label={`Call ${BUSINESS.phone}`}
      >
        <Phone className="w-5 h-5 animate-ring" strokeWidth={2.5} />
        Call {BUSINESS.phone}
      </a>
    </div>
  )
}
