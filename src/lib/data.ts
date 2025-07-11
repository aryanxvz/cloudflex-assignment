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
    image: "/products/Wireless Bluetooth Headphones.jpg",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "/products/Organic Cotton T-Shirt.png",
    description: "Soft, comfortable organic cotton t-shirt available in multiple colors.",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    image: "/products/Stainless Steel Water Bottle.jpg",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    image: "/products/Mechanical Gaming Keyboard.jpg",
    description: "RGB mechanical keyboard with tactile switches, perfect for gaming and typing.",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Leather Messenger Bag",
    price: 89.99,
    image: "/products/Leather Messenger Bag.jpg",
    description: "Handcrafted leather messenger bag with multiple compartments for work essentials.",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/products/Smart Fitness Watch.png",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    image: "/products/Ceramic Coffee Mug Set.png",
    description: "Set of 4 handmade ceramic coffee mugs with unique glazed finish.",
    category: "Home & Kitchen"
  },
  {
    id: 8,
    name: "Wireless Phone Charger",
    price: 49.99,
    image: "/products/Wireless Phone Charger.png",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics"
  },
  {
    id: 9,
    name: "Yoga Mat",
    price: 54.99,
    image: "/products/Yoga Mat.png",
    description: "Premium non-slip yoga mat made from eco-friendly materials.",
    category: "Sports & Fitness"
  },
  {
    id: 10,
    name: "Desk Plant - Succulent",
    price: 19.99,
    image: "/products/Desk Plant - Succulent.png",
    description: "Low-maintenance succulent plant perfect for office or home decoration.",
    category: "Home & Garden"
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 69.99,
    image: "/products/Bluetooth Speaker.png",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.",
    category: "Electronics"
  },
  {
    id: 12,
    name: "Canvas Backpack",
    price: 64.99,
    image: "/products/Canvas Backpack.png",
    description: "Durable canvas backpack with laptop compartment and multiple pockets.",
    category: "Accessories"
  }
];