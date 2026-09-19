import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toPersianDigits } from "../../util/toPersianDigits";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">موی سالم · حس بهتر</span>
          <h1>
            تخصص در
            <em>کراتین مو</em>و مراقبت حرفه‌ای
          </h1>
          <p>
            درمان‌های دقیق، محصولات حرفه‌ای و فینیشی شیک که بر اساس نیاز موهای
            شما طراحی می‌شوند؛ نه یک فرمول یکسان برای همه.
          </p>

          <div className="hero-actions">
            <Link className="button button--gold" to="/contact">
              رزرو نوبت
            </Link>
            <Link className="text-link" to="/services">
              مشاهده خدمات <span>↗</span>
            </Link>
          </div>

          <div className="hero-points">
            <span>
              <b>{toPersianDigits("01")}</b> محصولات حرفه‌ای
            </span>
            <span>
              <b>{toPersianDigits("02")}</b> متخصصان باتجربه
            </span>
            <span>
              <b>{toPersianDigits("03")}</b> مراقبت شخصی‌سازی‌شده
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <div className="hero-image-wrap">
            <img src="images/Hero.jfif" alt="موهای صاف و براق" />
          </div>
          <div className="hero-note">
            <span>شروع فعالیت</span>
            <strong>{toPersianDigits("2020")}</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
