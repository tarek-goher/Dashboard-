export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
  joinDate: string;
  ordersCount: number;
  totalSpent: number;
}

export const users: User[] = [
  { id: "USR-001", name: "Admin Alpha", email: "admin@store.com", role: "admin", joinDate: "2021-01-15", ordersCount: 0, totalSpent: 0 },
  { id: "USR-002", name: "Alice Johnson", email: "alice.j@example.com", role: "customer", joinDate: "2022-03-22", ordersCount: 12, totalSpent: 1250.50 },
  { id: "USR-003", name: "Bob Smith", email: "bsmith@example.com", role: "customer", joinDate: "2022-05-10", ordersCount: 5, totalSpent: 430.00 },
  { id: "USR-004", name: "Charlie Davis", email: "charlie.d@example.com", role: "customer", joinDate: "2022-08-01", ordersCount: 8, totalSpent: 890.75 },
  { id: "USR-005", name: "Diana Prince", email: "diana.p@example.com", role: "customer", joinDate: "2022-11-14", ordersCount: 20, totalSpent: 3450.00 },
  { id: "USR-006", name: "Evan Wright", email: "evan.w@example.com", role: "customer", joinDate: "2023-01-05", ordersCount: 2, totalSpent: 189.99 },
  { id: "USR-007", name: "Fiona Gallagher", email: "fiona.g@example.com", role: "customer", joinDate: "2023-02-20", ordersCount: 15, totalSpent: 2100.25 },
  { id: "USR-008", name: "George Miller", email: "george.m@example.com", role: "customer", joinDate: "2023-04-12", ordersCount: 7, totalSpent: 670.00 },
  { id: "USR-009", name: "Hannah Abbott", email: "hannah.a@example.com", role: "customer", joinDate: "2023-06-30", ordersCount: 1, totalSpent: 89.97 },
  { id: "USR-010", name: "Ian Curtis", email: "ian.c@example.com", role: "customer", joinDate: "2023-07-18", ordersCount: 9, totalSpent: 1050.50 },
  { id: "USR-011", name: "Jane Doe", email: "jane.d@example.com", role: "customer", joinDate: "2023-08-25", ordersCount: 3, totalSpent: 350.00 },
  { id: "USR-012", name: "Kevin Spacey", email: "kevin.s@example.com", role: "customer", joinDate: "2023-09-02", ordersCount: 11, totalSpent: 1800.75 },
  { id: "USR-013", name: "Laura Dern", email: "laura.d@example.com", role: "customer", joinDate: "2023-09-15", ordersCount: 4, totalSpent: 210.00 },
  { id: "USR-014", name: "Michael Cera", email: "michael.c@example.com", role: "customer", joinDate: "2023-09-28", ordersCount: 6, totalSpent: 540.25 },
  { id: "USR-015", name: "Nina Dobrev", email: "nina.d@example.com", role: "customer", joinDate: "2023-10-05", ordersCount: 14, totalSpent: 2850.00 },
];
