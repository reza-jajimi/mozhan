import { Link } from "react-router-dom";
import { toPersianDigits } from "../util/toPersianDigits";
export function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-5 pt-24 text-center">
      <div>
        <span className="text-sm text-gold">{toPersianDigits("خطای ۴۰۴")}</span>
        <h1 className="mt-4 font-display text-5xl">این صفحه پیدا نشد.</h1>
        <Link
          to="/"
          className="mt-7 inline-block rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
