import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

const reasons = [
  ['۰۱', 'نتایج ماندگار', 'فرمول‌های انتخاب‌شده و آموزش مراقبت بعد از کار کمک می‌کنند نتیجه زیبا و مرتب باقی بماند.'],
  ['۰۲', 'مو در اولویت است', 'هر درمان با بررسی صادقانه بافت، شرایط مو و روتین روزمره شما شروع می‌شود.'],
  ['۰۳', 'لوکس اما آرام', 'فضایی آرام، جزئیات حساب‌شده و تجربه‌ای که برای هر مراجعه‌کننده شخصی طراحی شده است.'],
]

export function WhyUs() {
  return (
    <section className="section section-cream">
      <div className="container split-section">
        <Reveal className="portrait-frame">
          <img
            src="images/why-us.webp"
            alt="جزئیات یک استایل موی شیک"
            loading="lazy"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="چرا موژان"
            title="مراقبتی دقیق برای زیبایی موی شما"
            text="موی زیبا فقط به نتیجه نهایی مربوط نیست. مهم است موهای شما بعد از مراجعه چه حسی داشته باشند، چگونه حرکت کنند و در روزهای بعد چطور رفتار کنند."
          />
          <div className="reason-list">
            {reasons.map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="reason">
                  <span className="reason-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
