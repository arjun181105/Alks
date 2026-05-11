import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// ─── LocalBusiness JSON-LD Schema ─────────────────────────────────────────────
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ElectricalContractor', 'HomeAndConstructionBusiness'],
  name: 'Alks Electricals and Handyman Services',
  alternateName: 'ALKS Electricals',
  description:
    'Licensed electrician and handyman services across Wollert, Epping, Craigieburn, Doreen and Melbourne\'s Northern Suburbs. Specialising in downlights, power points, ceiling fans, switchboards, sensor lighting and general handyman work. Certificate of Electrical Safety provided. Open 24/7.',
  url: 'https://alkselectricals.com.au',
  telephone: '+61406475585',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Moorabool Grv',
    addressLocality: 'Wollert',
    addressRegion: 'VIC',
    postalCode: '3750',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.6116,
    longitude: 145.0183,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Bank Transfer, Card',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '23',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Gaurav' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'I had Abhi put some downlights, fans and new powerpoints. He is affordable, reliable and did a neat job. Highly recommended.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'S P' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Highly recommend Alks Electricals! Very helpful, skilled, reasonably priced, and truly reliable. Showed up on time, explained everything clearly, and did an excellent job — will definitely use again!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Zoe Gogos' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Abhi and his worker were amazing. Great communication and very neat work. I would recommend to anyone.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ranbir Dhaliwal' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Abhi did some electrical work for me. He was punctual, affordable and solved a lot of problems. If you have any electrical work needing done give him a call.',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Wollert', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Epping', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Craigieburn', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Doreen', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'South Morang', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Mernda', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Roxburgh Park', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    { '@type': 'City', name: 'Mickleham', containedInPlace: { '@type': 'State', name: 'Victoria' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical & Handyman Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Repairs & Installations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Downlight Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Point Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceiling Fan Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Switchboard Upgrades' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sensor & Security Lighting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Assembly' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Handyman Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Appliance Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Repairs & Maintenance' } },
    ],
  },
  sameAs: ['https://www.facebook.com/alks.ahs'],
  knowsAbout: [
    'Electrical Wiring',
    'Downlight Installation',
    'Switchboard Upgrades',
    'Power Point Installation',
    'Ceiling Fan Installation',
    'Sensor Lighting',
    'Handyman Services',
    'Furniture Assembly',
  ],
}

// ─── FAQPage Schema ─────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Alks Electricals provide a Certificate of Electrical Safety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every electrical job completed by Alks Electricals comes with a Certificate of Electrical Safety, as required under Victorian electrical safety regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Alks Electricals service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Wollert, Epping, Craigieburn, Doreen, South Morang, Mernda, Roxburgh Park, Mickleham and surrounding areas in Melbourne\'s northern suburbs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Alks Electricals available for emergency electrical work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we are open 24 hours a day, 7 days a week including weekends and public holidays. Call 0406 475 585 for urgent jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of electrical work does Alks Electricals do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We install downlights, ceiling fans, power points, switchboards, sensor and security lighting, and appliances. We also handle general electrical repairs and all types of handyman work.',
      },
    },
  ],
}

// ─── Next.js Metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://alkselectricals.com.au'),
  title: {
    default:
      'Alks Electricals & Handyman | Wollert VIC | Licensed Electrician Melbourne North',
    template: '%s | Alks Electricals Wollert',
  },
  description:
    'Licensed electrician & handyman in Wollert, Epping, Craigieburn & Melbourne\'s North. Downlights, power points, fans, switchboards. Certificate of Electrical Safety. Open 24/7. Call 0406 475 585.',
  keywords: [
    'electrician Wollert',
    'electrician Epping',
    'handyman Melbourne north',
    'downlights Wollert',
    'power points Melbourne',
    'licensed electrician Craigieburn',
    'electrician Doreen',
    'handyman Wollert',
    'electrical repairs Melbourne north',
    'switchboard upgrade Wollert',
    'ceiling fan installation Melbourne',
    'electrician 3750',
    'Alks Electricals',
  ],
  authors: [{ name: 'Abhi — Alks Electricals and Handyman Services' }],
  creator: 'Alks Electricals and Handyman Services',
  publisher: 'Alks Electricals and Handyman Services',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Alks Electricals & Handyman | Wollert VIC | 5★ Licensed Electrician',
    description:
      'Licensed electrician & handyman in Melbourne\'s North. Affordable, reliable, neat work. Certificate of Electrical Safety. Open 24/7. Call 0406 475 585.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Alks Electricals and Handyman Services',
    url: 'https://alkselectricals.com.au',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alks Electricals & Handyman | Wollert VIC | 5★ Rated',
    description:
      'Licensed electrician & handyman in Melbourne\'s North. 5★ Google rated. Open 24/7. Call 0406 475 585.',
  },
  alternates: {
    canonical: 'https://alkselectricals.com.au',
  },
  category: 'Home Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Wollert" />
        <meta name="geo.position" content="-37.6116;145.0183" />
        <meta name="ICBM" content="-37.6116, 145.0183" />
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-[#0a0f1e] text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}
