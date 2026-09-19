import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedPage } from "../components/common/AnimatedPage";
import { SectionHeading } from "../components/common/SectionHeading";

const questions = [
  [
    "کراتین مو چقدر زمان می‌برد؟",
    "بیشتر جلسات بسته به طول، تراکم مو و نوع درمان انتخاب‌شده بین ۲.۵ تا ۴ ساعت زمان می‌برند.",
  ],
  [
    "نتیجه کراتین چقدر ماندگار است؟",
    "ماندگاری به جنس مو و مراقبت‌های خانگی بستگی دارد. روتین مراقبتی مناسب در زمان مراجعه به شما توضیح داده می‌شود.",
  ],
  [
    "می‌توانم قبل یا بعد از کراتین موهایم را رنگ کنم؟",
    "در بسیاری از موارد بله، اما زمان‌بندی اهمیت دارد. بهتر است هنگام مشاوره برنامه رنگ مو را مطرح کنید تا خدمات با فاصله مناسب انجام شوند.",
  ],
  [
    "آیا مشاوره الزامی است؟",
    "برای اولین مراجعه یک مشاوره کوتاه توصیه می‌شود. این مرحله کمک می‌کند سابقه مو و درمان مناسب را بهتر بررسی کنیم.",
  ],
  [
    "محصولات مراقبت بعد از کار هم ارائه می‌کنید؟",
    "بله. بر اساس نوع درمان و شرایط مو، یک روتین ساده خانگی و محصولات حرفه‌ای مناسب پیشنهاد می‌کنیم.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">سؤالات متداول</span>
          <h1>
            موی خوب با <em>سؤال‌های خوب</em> شروع می‌شود
          </h1>
          <p>هر چیزی که لازم است پیش از رزرو نوبت بدانید.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container faq-layout">
          <SectionHeading
            eyebrow="پرسش‌ها"
            title="قبل از رزرو"
            text="اگر پاسخ سؤال شما اینجا نیست، برای ما پیام بفرستید تا راهنمایی‌تان کنیم."
          />
          <div className="faq-list">
            {questions.map(([question, answer], index) => {
              const isOpen = open === index;
              return (
                <div className="faq-item" key={question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p>{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
