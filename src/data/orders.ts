export interface Order {
  id: string;
  customerName: string;
  product: string;
  amount: number;
  status: "pending" | "confirmed" | "shipped" | "cancelled";
  date: string;
}

export const orders: Order[] = [
  { id: "ORD-1001", customerName: "Alice Johnson", product: "Quantum Headset", amount: 299.99, status: "shipped", date: "2023-10-01T10:20:00Z" },
  { id: "ORD-1002", customerName: "Bob Smith", product: "Aero Jacket", amount: 129.50, status: "pending", date: "2023-10-02T14:15:00Z" },
  { id: "ORD-1003", customerName: "Charlie Davis", product: "Artisan Coffee Beans", amount: 49.98, status: "confirmed", date: "2023-10-02T16:30:00Z" },
  { id: "ORD-1004", customerName: "Diana Prince", product: "The Pragmatic Programmer", amount: 45.00, status: "shipped", date: "2023-10-03T09:10:00Z" },
  { id: "ORD-1005", customerName: "Evan Wright", product: "Carbon Fiber Tennis Racket", amount: 189.99, status: "cancelled", date: "2023-10-03T11:45:00Z" },
  { id: "ORD-1006", customerName: "Fiona Gallagher", product: "Neon Mechanical Keyboard", amount: 159.00, status: "shipped", date: "2023-10-04T08:25:00Z" },
  { id: "ORD-1007", customerName: "George Miller", product: "Velocity Running Shoes", amount: 110.00, status: "pending", date: "2023-10-04T13:50:00Z" },
  { id: "ORD-1008", customerName: "Hannah Abbott", product: "Organic Matcha", amount: 89.97, status: "confirmed", date: "2023-10-05T10:05:00Z" },
  { id: "ORD-1009", customerName: "Ian Curtis", product: "Lunar Hoodie", amount: 85.00, status: "shipped", date: "2023-10-05T15:30:00Z" },
  { id: "ORD-1010", customerName: "Jane Doe", product: "Pulse Smartwatch", amount: 249.99, status: "pending", date: "2023-10-06T09:40:00Z" },
  { id: "ORD-1011", customerName: "Kevin Spacey", product: "Nomad Backpack", amount: 140.00, status: "confirmed", date: "2023-10-06T11:15:00Z" },
  { id: "ORD-1012", customerName: "Laura Dern", product: "Himalayan Pink Salt", amount: 39.98, status: "shipped", date: "2023-10-07T14:20:00Z" },
  { id: "ORD-1013", customerName: "Michael Cera", product: "Clean Architecture", amount: 42.00, status: "pending", date: "2023-10-07T16:55:00Z" },
  { id: "ORD-1014", customerName: "Nina Dobrev", product: "Pro Yoga Mat", amount: 65.00, status: "cancelled", date: "2023-10-08T08:30:00Z" },
  { id: "ORD-1015", customerName: "Oscar Isaac", product: "Nova Monitor 27\"", amount: 349.00, status: "shipped", date: "2023-10-08T10:45:00Z" },
  { id: "ORD-1016", customerName: "Paul Dano", product: "Essential Tee", amount: 75.00, status: "confirmed", date: "2023-10-09T13:10:00Z" },
  { id: "ORD-1017", customerName: "Quinn Fabray", product: "Raw Honey", amount: 31.98, status: "pending", date: "2023-10-09T15:25:00Z" },
  { id: "ORD-1018", customerName: "Rachel Berry", product: "Refactoring UI", amount: 49.00, status: "shipped", date: "2023-10-10T09:50:00Z" },
  { id: "ORD-1019", customerName: "Sam Evans", product: "Kettlebell Set", amount: 89.99, status: "confirmed", date: "2023-10-10T11:35:00Z" },
  { id: "ORD-1020", customerName: "Tina Cohen-Chang", product: "Quantum Headset", amount: 299.99, status: "pending", date: "2023-10-11T14:05:00Z" },
  { id: "ORD-1021", customerName: "Ursula Buffay", product: "Aero Jacket", amount: 129.50, status: "shipped", date: "2023-10-11T16:40:00Z" },
  { id: "ORD-1022", customerName: "Victor Stone", product: "Artisan Coffee Beans", amount: 74.97, status: "cancelled", date: "2023-10-12T08:15:00Z" },
  { id: "ORD-1023", customerName: "Wanda Maximoff", product: "The Pragmatic Programmer", amount: 45.00, status: "confirmed", date: "2023-10-12T10:50:00Z" },
  { id: "ORD-1024", customerName: "Xavier Woods", product: "Carbon Fiber Tennis Racket", amount: 189.99, status: "pending", date: "2023-10-13T13:20:00Z" },
  { id: "ORD-1025", customerName: "Yara Shahidi", product: "Neon Mechanical Keyboard", amount: 159.00, status: "shipped", date: "2023-10-13T15:45:00Z" },
  { id: "ORD-1026", customerName: "Zack Snyder", product: "Velocity Running Shoes", amount: 110.00, status: "confirmed", date: "2023-10-14T09:30:00Z" },
  { id: "ORD-1027", customerName: "Amy Adams", product: "Organic Matcha", amount: 59.98, status: "pending", date: "2023-10-14T11:10:00Z" },
  { id: "ORD-1028", customerName: "Ben Affleck", product: "Lunar Hoodie", amount: 85.00, status: "shipped", date: "2023-10-15T14:25:00Z" },
  { id: "ORD-1029", customerName: "Chris Evans", product: "Pulse Smartwatch", amount: 249.99, status: "cancelled", date: "2023-10-15T16:00:00Z" },
  { id: "ORD-1030", customerName: "Dakota Johnson", product: "Nomad Backpack", amount: 140.00, status: "confirmed", date: "2023-10-16T08:45:00Z" },
];
