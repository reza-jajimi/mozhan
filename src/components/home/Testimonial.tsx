import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../data/site";
import { SectionHeading } from "../common/SectionHeading";

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const change = (direction: number) => {
    setIndex(
      (value) =>
        (value + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="section section-dark testimonial-section">
      <div className="container testimonial-inner">
        <SectionHeading
          eyebrow="نظر مشتریان"
          title="مشتری‌های ما چه می‌گویند؟"
          align="center"
        />

        <div className="quote-mark">“</div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <p>{current.quote}</p>
            <footer>
              <strong>{current.name}</strong>
              <span>{current.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="slider-controls">
          <button
            type="button"
            onClick={() => change(-1)}
            aria-label="نظر قبلی"
          >
            →
          </button>
          <div className="dots">
            {testimonials.map((item, itemIndex) => (
              <button
                key={item.name}
                type="button"
                className={itemIndex === index ? "dot active" : "dot"}
                aria-label={`نمایش نظر ${itemIndex + 1}`}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
          <button type="button" onClick={() => change(1)} aria-label="نظر بعدی">
            ←
          </button>
        </div>
      </div>
    </section>
  );
}
