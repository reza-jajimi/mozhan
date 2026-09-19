import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedPage } from "../components/common/AnimatedPage";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { packages } from "../data/site";
import { toPersianDigits } from "../util/toPersianDigits";

export function Packages() {
  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">{toPersianDigits("مجموعه ۲۰۲۴")}</span>
          <h1>
            روتین <em>خودتان را انتخاب کنید</em>
          </h1>
          <p>
            سه پکیج با سطوح مختلف درمان، مراقبت و فینیش. پیشنهاد نهایی بعد از
            مشاوره مشخص می‌شود.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="قیمت‌گذاری"
            title="پکیج‌های ما"
            text="انتخاب‌های ساده، مراقبت حرفه‌ای و بدون خدمات غیرضروری."
            align="center"
          />
          <div className="package-grid">
            {packages.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <motion.article
                  className={
                    item.featured ? "package-card featured" : "package-card"
                  }
                  whileHover={{ y: -8 }}
                >
                  {item.featured && (
                    <span className="popular">پرمراجعه‌ترین</span>
                  )}
                  <span className="package-name">{item.name}</span>
                  <div className="package-price">
                    {toPersianDigits(item.price)}
                    <small> تومان</small>
                  </div>
                  <p>{item.description}</p>
                  <ul>
                    {item.items.map((feature) => (
                      <li key={feature}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link
                    className={
                      item.featured
                        ? "button button--gold"
                        : "button button--outline"
                    }
                    to="/contact"
                  >
                    رزرو نوبت
                  </Link>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <p className="pricing-note">
            قیمت مرجع سال {toPersianDigits("۲۰۲۴")} · قیمت نهایی ممکن است بر
            اساس طول و شرایط مو متفاوت باشد.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
}
