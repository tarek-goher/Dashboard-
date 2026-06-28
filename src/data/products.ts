export interface Product {
  id: string;
  name: string;
  category: "Electronics" | "Clothing" | "Food" | "Books" | "Sports";
  price: number;
  stock: number;
  sold: number;
  image: string;
}

export const products: Product[] = [
  { id: "1", name: "Quantum Headset", category: "Electronics", price: 299.99, stock: 45, sold: 120, image: "https://picsum.photos/seed/1/200/200" },
  { id: "2", name: "Aero Jacket", category: "Clothing", price: 129.50, stock: 12, sold: 340, image: "https://picsum.photos/seed/2/200/200" },
  { id: "3", name: "Artisan Coffee Beans", category: "Food", price: 24.99, stock: 300, sold: 850, image: "https://picsum.photos/seed/3/200/200" },
  { id: "4", name: "The Pragmatic Programmer", category: "Books", price: 45.00, stock: 80, sold: 210, image: "https://picsum.photos/seed/4/200/200" },
  { id: "5", name: "Carbon Fiber Tennis Racket", category: "Sports", price: 189.99, stock: 5, sold: 42, image: "https://picsum.photos/seed/5/200/200" },
  { id: "6", name: "Neon Mechanical Keyboard", category: "Electronics", price: 159.00, stock: 20, sold: 189, image: "https://picsum.photos/seed/6/200/200" },
  { id: "7", name: "Velocity Running Shoes", category: "Sports", price: 110.00, stock: 34, sold: 405, image: "https://picsum.photos/seed/7/200/200" },
  { id: "8", name: "Design Systems", category: "Books", price: 39.99, stock: 110, sold: 150, image: "https://picsum.photos/seed/8/200/200" },
  { id: "9", name: "Organic Matcha", category: "Food", price: 29.99, stock: 450, sold: 1020, image: "https://picsum.photos/seed/9/200/200" },
  { id: "10", name: "Lunar Hoodie", category: "Clothing", price: 85.00, stock: 0, sold: 500, image: "https://picsum.photos/seed/10/200/200" },
  { id: "11", name: "Pulse Smartwatch", category: "Electronics", price: 249.99, stock: 65, sold: 320, image: "https://picsum.photos/seed/11/200/200" },
  { id: "12", name: "Nomad Backpack", category: "Clothing", price: 140.00, stock: 22, sold: 210, image: "https://picsum.photos/seed/12/200/200" },
  { id: "13", name: "Himalayan Pink Salt", category: "Food", price: 19.99, stock: 210, sold: 410, image: "https://picsum.photos/seed/13/200/200" },
  { id: "14", name: "Clean Architecture", category: "Books", price: 42.00, stock: 95, sold: 180, image: "https://picsum.photos/seed/14/200/200" },
  { id: "15", name: "Pro Yoga Mat", category: "Sports", price: 65.00, stock: 40, sold: 150, image: "https://picsum.photos/seed/15/200/200" },
  { id: "16", name: "Nova Monitor 27\"", category: "Electronics", price: 349.00, stock: 15, sold: 85, image: "https://picsum.photos/seed/16/200/200" },
  { id: "17", name: "Essential Tee", category: "Clothing", price: 25.00, stock: 500, sold: 1200, image: "https://picsum.photos/seed/17/200/200" },
  { id: "18", name: "Raw Honey", category: "Food", price: 15.99, stock: 180, sold: 340, image: "https://picsum.photos/seed/18/200/200" },
  { id: "19", name: "Refactoring UI", category: "Books", price: 49.00, stock: 60, sold: 125, image: "https://picsum.photos/seed/19/200/200" },
  { id: "20", name: "Kettlebell Set", category: "Sports", price: 89.99, stock: 8, sold: 65, image: "https://picsum.photos/seed/20/200/200" },
];
