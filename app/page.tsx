import Navigation    from '@/components/Navigation'
import Hero          from '@/components/Hero'
import Services      from '@/components/Services'
import CTABanner     from '@/components/CTABanner'
import WhyUs        from '@/components/WhyUs'
import Reviews       from '@/components/Reviews'
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
        <CTABanner />
        <WhyUs />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
