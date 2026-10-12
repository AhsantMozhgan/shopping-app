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

export const data = {
    products:[
        {
            slug: 'iphone-15',
            title: 'iPhone 15',
            description: 'The latest iPhone with advanced camera features.',
            price: 999,
            image: '/products/iphone-15.jpg',
            category: 'electronics',
            rating: 4.8,
            inStock: true,
        },
        {
            slug: 'macbook-pro',
            title: 'MacBook Pro',
            description: 'Powerful laptop for professionals.',
            price: 1999,
            image: '/products/macbook-pro.jpg',
            category: 'electronics',
            rating: 4.9,
            inStock: true,
        },
        {
            slug: 'airpods-pro',
            title: 'AirPods Pro',
            description: 'Wireless earbuds with active noise cancellation.',
            price: 249,
            image: '/products/airpods-pro.jpg',
            category: 'electronics',
            rating: 4.7,
            inStock: true,
        },
        {
            slug: 'leather-jacket',
            title: 'Leather Jacket',
            description: 'Classic brown leather jacket.',
            price: 199,
            image: '/products/leather-jacket.jpg',
            category: 'clothing',
            rating: 4.5,
            inStock: false,
        },
        {
            slug: 'running-shoes',
            title: 'Running Shoes',
            description: 'Lightweight running shoes for everyday training.',
            price: 129,
            image: '/products/running-shoes.jpg',
            category: 'clothing',
            rating: 4.6,
            inStock: true,
        },
        {
            slug: 'coffee-maker',
            title: 'Coffee Maker',
            description: 'Programmable coffee maker with thermal carafe.',
            price: 89,
            image: '/products/coffee-maker.jpg',
            category: 'home',
            rating: 4.4,
            inStock: true,
        },
    ]
}
