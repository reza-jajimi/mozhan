import { AnimatedPage } from '../components/common/AnimatedPage'
import { Reveal } from '../components/common/Reveal'
import { SectionHeading } from '../components/common/SectionHeading'
import { services } from '../data/site'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">خدمات ما</span>
          <h1>مراقبتی متناسب با <em>موهای شما</em></h1>
          <p>
            از صافی و احیا تا رنگ و استایل، هر خدمت بر اساس مشاوره و شناخت دقیق از نتیجه‌ای که
            می‌خواهید انجام می‌شود.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="منوی خدمات"
            title="درمان‌ها و روتین‌ها"
            text="یک نقطه شروع را انتخاب کنید و جزئیات را در کنار هم دقیق‌تر مشخص کنیم."
          />
          <div className="service-list">
            {services.map((service, index) => (
              <Reveal key={service.title}>
                <article className="service-row">
                  <div className="service-row-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="service-row-copy">
                    <span className="card-eyebrow">{service.eyebrow}</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <span className="service-duration">مدت تقریبی: {service.duration}</span>
                  </div>
                  <span className="service-index">۰{index + 1}</span>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="center-action">
            <Link className="button button--dark" to="/contact">مشاوره درباره موهای شما</Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
}
