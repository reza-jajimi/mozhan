import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/site'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ServicesPreview() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="خدمات موژان"
            title="خدمات حرفه‌ای مو"
            text="از درمان‌های صافی تا احیا و مراقبت، هر خدمت بر اساس وضعیت و ویژگی‌های واقعی موهای شما شروع می‌شود."
          />
          <Link className="text-link dark-link" to="/services">
            همه خدمات <span>↗</span>
          </Link>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.article
                className="service-card"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div className="card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <span className="card-eyebrow">{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="card-meta">زمان تقریبی: {service.duration}</span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
