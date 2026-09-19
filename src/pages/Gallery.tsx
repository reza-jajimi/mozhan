import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedPage } from "../components/common/AnimatedPage";
import { SectionHeading } from "../components/common/SectionHeading";
import { gallery } from "../data/site";

const filters = ["همه", "کراتین", "رنگ", "استایل", "مراقبت"];

export function Gallery() {
  const [filter, setFilter] = useState("همه");
  const items = useMemo(
    () =>
      filter === "همه"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">نمونه‌کارهای منتخب</span>
          <h1>
            نمونه‌کارهای <em>کراتین موژان</em>
          </h1>
          <p>
            نگاهی به بخشی از تجربه‌ها و نمونه‌کارهای موژان از کراتین و احیای مو
            تا رنگ و استایل‌های مختلف.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionHeading eyebrow="گالری" title="سبک نهایی موژان" />
          <div
            className="filter-bar"
            role="tablist"
            aria-label="فیلترهای گالری"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "filter active" : "filter"}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-grid">
            {items.map((item) => (
              <motion.figure
                layout
                key={item.title}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}
