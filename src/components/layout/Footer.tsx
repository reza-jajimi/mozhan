import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark">M</span>
            <span>
              <strong>موژان</strong>
              <small>کراتین مو</small>
            </span>
          </Link>
          <p className="footer-copy">
            مراقبت حرفه‌ای از مو، درمان‌های دقیق و رویکردی آرام‌تر و شخصی‌تر به زیبایی.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-label">دسترسی</span>
          <Link to="/services">خدمات</Link>
          <Link to="/gallery">نمونه‌کارها</Link>
          <Link to="/packages">پکیج‌ها</Link>
        </div>

        <div className="footer-links">
          <span className="footer-label">مراجعه</span>
          <span>تهران، ایران</span>
          <span>شنبه تا پنجشنبه · ۱۰:۰۰ تا ۲۰:۰۰</span>
          <a href="tel:+982112345678">+۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸</a>
        </div>

        <div className="footer-links">
          <span className="footer-label">ارتباط</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">اینستاگرام</a>
          <a href="https://wa.me/982112345678" target="_blank" rel="noreferrer">واتساپ</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© ۲۰۲۴ موژان استودیو تخصصی کراتین مو. تمامی حقوق محفوظ است.</span>
        <span>برای تجربه‌ای ظریف و حرفه‌ای در مراقبت از مو.</span>
      </div>
    </footer>
  )
}
