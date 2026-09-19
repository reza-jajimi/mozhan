import { Link } from 'react-router-dom'
import { Reveal } from '../common/Reveal'

export function BookingBanner() {
  return (
    <section className="booking-banner">
      <div className="booking-image" />
      <div className="container booking-content">
        <Reveal>
          <span className="eyebrow">در تماس باشیم</span>
          <h2>برای داشتن موهایی سالم‌تر و نرم‌تر آماده‌ای؟</h2>
          <p>کمی درباره موها و نتیجه‌ای که در ذهن دارید برای ما بنویسید.</p>
          <Link className="button button--gold" to="/contact">رزرو نوبت</Link>
        </Reveal>
      </div>
    </section>
  )
}
