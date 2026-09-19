import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import { AnimatedPage } from "../components/common/AnimatedPage";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { toPersianDigits } from "../util/toPersianDigits";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;

    window.setTimeout(() => {
      setIsSubmitting(false);
      toast.success("ممنونیم. درخواست شما با موفقیت دریافت شد.");
      form.reset();
    }, 700);
  };

  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">ارتباط با ما</span>
          <h1>
            درباره <em>موهایتان</em> صحبت کنیم
          </h1>
          <p>
            درباره چیزی که می‌خواهید برای ما بنویسید تا برای انتخاب درمان مناسب
            و زمان نوبت راهنمایی‌تان کنیم.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <SectionHeading
              eyebrow="تماس"
              title="به موژان سر بزنید"
              text="فضایی آرام و خصوصی در قلب تهران."
            />
            <div className="contact-details">
              <div>
                <span>تلفن</span>
                <a href="tel:+981133200408">
                  {toPersianDigits("+981133200408")}
                </a>
              </div>
              <div>
                <span>واتساپ</span>
                <a href="https://wa.me/981133200408">ارسال پیام</a>
              </div>
              <div>
                <span>آدرس</span>
                <p>تهران، ایران · با تعیین وقت قبلی</p>
              </div>
              <div>
                <span>ساعات کاری</span>
                <p>{toPersianDigits("شنبه تا پنجشنبه · 10:00 تا 20:00")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="form-wrap" delay={0.08}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  نام شما
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="نام شما"
                  />
                </label>
                <label>
                  شماره تماس
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder={toPersianDigits("۰۹۱...")}
                  />
                </label>
              </div>
              <label>
                خدمت موردنظر
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    یک خدمت را انتخاب کنید
                  </option>
                  <option>کراتین سیگنچر</option>
                  <option>بوتاکس مو</option>
                  <option>رنگ و گلاس</option>
                  <option>کوتاهی و استایل</option>
                </select>
              </label>
              <label>
                پیام
                <textarea
                  name="message"
                  rows={5}
                  placeholder="کمی درباره موها و نتیجه‌ای که می‌خواهید برای ما بنویسید..."
                />
              </label>
              <button
                className="button button--dark"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
              </button>
              <small className="form-note">
                این فرم صرفاً نمایشی و سمت فرانت‌اند است و می‌تواند بعداً به
                سرویس رزرو یا پیام‌رسان متصل شود.
              </small>
            </form>
          </Reveal>
        </div>
      </section>
    </AnimatedPage>
  );
}
