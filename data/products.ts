export type Product = {
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
};

export const products: Product[] = [
  {
    slug: "iphone-15",
    title: "iPhone 15",
    description: "The latest iPhone with advanced camera features.",
    price: 999,
    image: "/images/iphone-15.jpg",
    category: "electronics",
    rating: 4.8,
    inStock: true,
  },
  {
    slug: "macbook-pro",
    title: "MacBook Pro",
    description: "Powerful laptop for professionals.",
    price: 1999,
    image: "/images/macbook-pro.jpg",
    category: "electronics",
    rating: 4.9,
    inStock: true,
  },
  {
    slug: "airpods-pro",
    title: "AirPods Pro",
    description: "Wireless earbuds with active noise cancellation.",
    price: 249,
    image: "/images/airpods-pro.jpg",
    category: "electronics",
    rating: 4.7,
    inStock: true,
  },
  {
    slug: "leather-jacket",
    title: "Leather Jacket",
    description: "Classic brown leather jacket.",
    price: 199,
    image: "/images/leather-jacket.jpg",
    category: "clothing",
    rating: 4.5,
    inStock: false,
  },
  {
    slug: "running-shoes",
    title: "Running Shoes",
    description: "Lightweight running shoes for everyday training.",
    price: 129,
    image: "/images/running-shoes.jpg",
    category: "clothing",
    rating: 4.6,
    inStock: true,
  },
  {
    slug: "coffee-maker",
    title: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe.",
    price: 89,
    image: "/images/coffee-maker.jpg",
    category: "home",
    rating: 4.4,
    inStock: true,
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}