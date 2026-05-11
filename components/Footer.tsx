'use client'

import { Phone, MapPin, Facebook, ExternalLink, Zap } from 'lucide-react'
import { BUSINESS } from '@/lib/business'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',  href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const AREAS = ['Wollert', 'Epping', 'Craigieburn', 'Doreen', 'South Morang', 'Mernda', 'Roxburgh Park', 'Mickleham']

export default function Footer() {
  return (
    <footer
      className="bg-[#0C0F1A] border-t border-[rgba(255,255,255,0.06)]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#F59C00] rounded-lg grid place-items-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} fill="white" />
              </div>
              <span className="font-bold text-[15px] text-white tracking-tight">Alks Electricals</span>
            </div>
            <p className="text-[#5A6278] text-[13px] leading-[1.75] mb-5 max-w-[200px]">
              Licensed electrical and handyman services across Melbourne&apos;s north.
            </p>
            <div className="flex gap-2">
              {['Licensed', 'Insured'].map(b => (
                <span
                  key={b}
                  className="text-[11px] font-medium text-[#5A6278] border border-[rgba(255,255,255,0.08)] px-2.5 py-1 rounded-md"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A3D52] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#5A6278] hover:text-white text-[13px] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A3D52] mb-4">
              Service Areas
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {AREAS.map(a => (
                <li key={a} className="text-[#5A6278] text-[13px]">{a}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A3D52] mb-4">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS.phoneTel}
                  className="flex items-center gap-2.5 text-white hover:text-[#F59C00] text-[14px] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59C00] flex-shrink-0" strokeWidth={2} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#3A3D52] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <address className="not-italic text-[#5A6278] text-[13px] leading-[1.6]">
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.suburb} {BUSINESS.address.state} {BUSINESS.address.postcode}
                </address>
              </li>
              <li>
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#5A6278] hover:text-white text-[13px] transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2} />
                  alks.ahs
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#3A3D52] text-[12px]">
            © {new Date().getFullYear()} {BUSINESS.name}. Wollert VIC 3750.
          </p>
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#3A3D52] hover:text-[#5A6278] text-[12px] transition-colors"
          >
            View on Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
