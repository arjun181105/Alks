import Navigation    from '@/components/Navigation'
import Hero          from '@/components/Hero'
import Services      from '@/components/Services'
import Reviews       from '@/components/Reviews'
import CTABanner     from '@/components/CTABanner'
import About         from '@/components/About'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import MobileCallBar from '@/components/MobileCallBar'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <CTABanner />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
