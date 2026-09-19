import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "خانه", to: "/" },
  { label: "خدمات", to: "/services" },
  { label: "نمونه‌کارها", to: "/gallery" },
  { label: "درباره ما", to: "/about" },
  { label: "پکیج‌ها", to: "/packages" },
  { label: "سؤالات متداول", to: "/faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div>
          <Link
            className="button button--small button--gold nav-cta"
            to="/contact"
          >
            رزرو نوبت
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label="باز کردن منو"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/"
          className="brand"
          aria-label="خانه موژان"
          onClick={() => setOpen(false)}
        >
          <img src="/images/logo.png" alt="مژان" className="brand-logo" />
        </Link>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="منوی موبایل"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              className="button button--gold"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              رزرو وقت
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
