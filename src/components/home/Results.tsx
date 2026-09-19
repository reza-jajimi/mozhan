import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gallery } from "../../data/site";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export function Results() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="قبل و بعد"
            title="نتایج واقعی"
            text="بخشی از فینیش‌ها و تغییراتی که با روتین‌های مراقبتی و درمانی موژان ایجاد شده‌اند."
          />
          <Link className="text-link" to="/gallery">
            مشاهده گالری <span>↗</span>
          </Link>
        </div>

        <div className="results-grid">
          {gallery.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div className="result-card" whileHover={{ scale: 1.015 }}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="result-overlay">
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
