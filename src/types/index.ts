export interface Service {
  title: string
  eyebrow: string
  description: string
  duration: string
  image: string
}

export interface Package {
  name: string
  price: string
  description: string
  featured?: boolean
  items: string[]
}

export interface GalleryItem {
  title: string
  category: string
  image: string
}