import { AnimatedPage } from "../components/common/AnimatedPage";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { toPersianDigits } from "../util/toPersianDigits";

export function About() {
  return (
    <AnimatedPage>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">درباره موژان</span>
          <h1>
            بیشتر از یک <em>سالن زیبایی</em>
          </h1>
          <p>
            موژان با تصور یک فضای آرام‌تر برای زیبایی شکل گرفت؛ جایی که نتایج
            زیبا از شنیدن، تخصص و احترام به خود مو شروع می‌شوند.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container split-section">
          <Reveal className="portrait-frame tall">
            <img
              src="images/salon-interior.webp"
              alt="فضای گرم و شیک سالن زیبایی"
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="فلسفه ما"
              title="زیبایی مو، با دقت و آگاهی"
              text="ما باور داریم بهترین درمان، درمانی است که با فردی که روی صندلی نشسته هماهنگ باشد. یعنی فراتر از درخشش لحظه‌ای، به بافت، استحکام، مراقبت و سبک زندگی هم توجه کنیم."
            />
            <div className="about-stats">
              <div>
                <strong>{toPersianDigits(2020)}</strong>
                <span>شروع فعالیت</span>
              </div>
              <div>
                <strong>{toPersianDigits("100%")}</strong>
                <span>مراقبت شخصی</span>
              </div>
              <div>
                <strong>{toPersianDigits("01:01")}</strong>
                <span>اول مشاوره</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container values-grid">
          {[
            [
              "تخصص",
              "هر خدمت با صبر، دقت و توجه به حرکت طبیعی مو انجام می‌شود.",
            ],
            [
              "مراقبت",
              "محصول حرفه‌ای مهم است، اما دانستن زمان و روش درست استفاده از آن اهمیت بیشتری دارد.",
            ],
            [
              "اعتماد",
              "پیشنهادهای ما کاربردی، شفاف و متناسب با فرد هستند؛ نه صرفاً بر اساس مد روز.",
            ],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="value-card">
                <span>۰{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}
