import { AnimatedPage } from '../components/common/AnimatedPage'
import { Hero } from '../components/home/Hero'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { WhyUs } from '../components/home/WhyUs'
import { Results } from '../components/home/Results'
import { Testimonial } from '../components/home/Testimonial'
import { BookingBanner } from '../components/home/BookingBanner'

export function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <Results />
      <Testimonial />
      <BookingBanner />
    </AnimatedPage>
  )
}