import type { GalleryItem, Package, Service } from "../types";

export const services: Service[] = [
  {
    title: "کراتین سیگنچر",
    eyebrow: "صافی + احیا",
    description:
      "یک درمان صافی شخصی‌سازی‌شده برای نرم‌تر شدن بافت مو، کاهش وز و ایجاد ظاهری مرتب و درخشان، بدون از بین بردن حرکت طبیعی مو.",
    duration: "۲.۵ تا ۴ ساعت",
    image:
      "images/keratin-signature.jfif",
  },
  {
    title: "بوتاکس مو",
    eyebrow: "تغذیه عمیق",
    description:
      "یک روتین احیایی برای موهای خشک و خسته که با آبرسانی عمیق، درخشندگی بیشتر و حسی نرم‌تر و سالم‌تر همراه است.",
    duration: "۲ تا ۳ ساعت",
    image:
      "images/botox-hair.webp",
  },
  {
    title: "رنگ و گلاس",
    eyebrow: "تناژ + درخشش",
    description:
      "رنگ‌آمیزی ظریف و خدمات گلاس برای ایجاد عمق و درخشندگی بیشتر، با تمرکز همیشگی بر سلامت و مراقبت از مو.",
    duration: "۱.۵ تا ۳ ساعت",
    image:
      "images/color-warm.jfif",
  },
  {
    title: "کوتاهی و استایل",
    eyebrow: "فرم + استایل",
    description:
      "یک جلسه کوتاهی، فرم‌دهی یا استایل متناسب با جنس مو، فرم صورت و سبک زندگی روزمره شما.",
    duration: "۶۰ تا ۹۰ دقیقه",
    image:
      "images/trim-style.webp",
  },
];

export const packages: Package[] = [
  {
    name: "پایه",
    price: "1.5 میلیون",
    description: "شروعی تمیز و حرفه‌ای برای داشتن موهایی نرم‌تر و خوش‌حالت‌تر.",
    items: [
      "مشاوره مو",
      "کراتین سیگنچر",
      "شست‌وشو + براشینگ",
      "راهنمای مراقبت بعد از کار",
    ],
  },
  {
    name: "سیگنچر",
    price: "2.5 میلیون",
    featured: true,
    description:
      "روتین کامل کراتین موژان برای رسیدن به ظاهری مرتب، نرم و چشمگیر.",
    items: [
      "آنالیز دقیق مو",
      "کراتین پریمیوم",
      "ماسک احیای مو",
      "کوتاهی + فینیش",
      "پک مراقبت بعد از کار",
    ],
  },
  {
    name: "مِیزون",
    price: "3.8 میلیون",
    description:
      "یک جلسه کامل و لوکس با تمرکز هم‌زمان بر زیبایی ظاهری و سلامت بلندمدت مو.",
    items: [
      "مشاوره خصوصی",
      "کراتین پریمیوم",
      "مراقبت بوتاکس مو",
      "درمان پوست سر",
      "استایل لوکس",
      "برنامه مراقبت خانگی",
    ],
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "کراتین ابریشمی",
    category: "کراتین",
    image: "images/keratin-silk.webp",
  },
  {
    title: "رنگ قهوه‌ای گرم",
    category: "رنگ",
    image: "images/color-warm.webp",
  },
  {
    title: "استایل طبیعی و براق",
    category: "استایل",
    image: "images/style-natural.webp",
  },
  {
    title: "احیای درخشان مو",
    category: "مراقبت",
    image: "images/care-glossy.webp",
  },
  {
    title: "موهای نرم و لطیف",
    category: "کراتین",
    image: "images/keratin-silky.webp ",
  },
  {
    title: "استایل مجلسی",
    category: "استایل",
    image: "images/style-formal.webp",
  },
];

export const testimonials = [
  {
    quote:
      "موهایم بالاخره دوباره نرم و سالم به نظر می‌رسند، بدون اینکه حالت طبیعی‌شان از بین برود. نتیجه دقیقاً همان چیزی بود که می‌خواستم.",
    name: "سارا م.",
    role: "مشتری کراتین",
  },
  {
    quote:
      "از مشاوره تا توصیه‌های مراقبتی، همه‌چیز با دقت انجام شد. نتیجه واقعاً زیبا و حرفه‌ای بود.",
    name: "نیکا ر.",
    role: "مشتری مراقبت مو",
  },
  {
    quote:
      "فضایی آرام و شیک با نتیجه‌ای که بین جلسات هم زیبایی و نرمی خودش را حفظ کرد.",
    name: "مینا ک.",
    role: "مشتری سیگنچر",
  },
];
