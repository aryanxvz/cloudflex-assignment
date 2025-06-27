export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%234F46E5'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🎧 Headphones%3C/text%3E%3C/svg%3E",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%2310B981'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E👕 T-Shirt%3C/text%3E%3C/svg%3E",
    description: "Soft, comfortable organic cotton t-shirt available in multiple colors.",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%2306B6D4'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🍼 Bottle%3C/text%3E%3C/svg%3E",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23EF4444'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E⌨️ Keyboard%3C/text%3E%3C/svg%3E",
    description: "RGB mechanical keyboard with tactile switches, perfect for gaming and typing.",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Leather Messenger Bag",
    price: 89.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23A855F7'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E👜 Bag%3C/text%3E%3C/svg%3E",
    description: "Handcrafted leather messenger bag with multiple compartments for work essentials.",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F59E0B'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E⌚ Watch%3C/text%3E%3C/svg%3E",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23DC2626'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E☕ Mugs%3C/text%3E%3C/svg%3E",
    description: "Set of 4 handmade ceramic coffee mugs with unique glazed finish.",
    category: "Home & Kitchen"
  },
  {
    id: 8,
    name: "Wireless Phone Charger",
    price: 49.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%2384CC16'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🔌 Charger%3C/text%3E%3C/svg%3E",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics"
  },
  {
    id: 9,
    name: "Yoga Mat",
    price: 54.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23EC4899'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🧘 Yoga Mat%3C/text%3E%3C/svg%3E",
    description: "Premium non-slip yoga mat made from eco-friendly materials.",
    category: "Sports & Fitness"
  },
  {
    id: 10,
    name: "Desk Plant - Succulent",
    price: 19.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%2365A30D'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🌱 Plant%3C/text%3E%3C/svg%3E",
    description: "Low-maintenance succulent plant perfect for office or home decoration.",
    category: "Home & Garden"
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 69.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%2314B8A6'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🔊 Speaker%3C/text%3E%3C/svg%3E",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.",
    category: "Electronics"
  },
  {
    id: 12,
    name: "Canvas Backpack",
    price: 64.99,
    image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%236366F1'/%3E%3Ctext x='200' y='200' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dy='0.3em'%3E🎒 Backpack%3C/text%3E%3C/svg%3E",
    description: "Durable canvas backpack with laptop compartment and multiple pockets.",
    category: "Accessories"
  }
];