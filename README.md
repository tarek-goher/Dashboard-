# Nexus Admin Dashboard

A modern, responsive admin dashboard for tracking business metrics — revenue, orders, products, and users — built with React, TypeScript, and Tailwind CSS.
## ✨ Features

- **Mission Control overview** — KPI cards (revenue, orders, active users, products) with animated count-up numbers
- **Interactive charts** — Revenue vs. orders area chart and sales-by-category breakdown (Recharts)
- **Orders, Products & Users management** pages
- **Reports** and **Settings** pages
- **User profile** page
- **Dark mode** by default, with theme persistence
- **Animated UI** powered by Framer Motion, including a subtle animated 3D background (Three.js)
- **Accessible, themeable components** built on Radix UI / shadcn

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| UI components | Radix UI / shadcn |
| Charts | Recharts |
| 3D / animation | Three.js, Framer Motion |
| Routing | Wouter |
| Data fetching | TanStack Query |
| Forms & validation | React Hook Form + Zod |

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Layout, charts, shadcn primitives)
├── data/           # Mock data (orders, products, stats)
├── hooks/          # Custom React hooks
├── lib/            # Utilities
├── pages/          # Route-level pages (Overview, Orders, Products, Users, Reports, Settings, Profile)
├── App.tsx         # App entry & routing
└── main.tsx        # Vite/React bootstrap
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### Environment Variables

This project requires two environment variables before running:

```bash
PORT=5000
BASE_PATH=/
```

Create a `.env` file in the project root with the values above (adjust `PORT` as needed).

### Run in development

```bash
npm run dev
```

The app will be available at `http://localhost:<PORT>`.

### Build for production

```bash
npm run build
```

Output is generated in `dist/public`.

### Preview the production build

```bash
npm run serve
```

### Type checking

```bash
npm run typecheck
```

## 📊 Pages

| Route | Description |
|---|---|
| `/overview` | KPI summary, revenue/orders chart, category breakdown, recent orders & top products |
| `/orders` | Orders list and management |
| `/products` | Product catalog and management |
| `/users` | User management |
| `/reports` | Business reports |
| `/settings` | App settings |
| `/profile` | User profile |

## 📝 License

This project is licensed under the MIT License.

## 🙋 Contact

Built by **Tarek Abdelkarim**.

- GitHub: [tarek-goher](https://github.com/tarek-goher)
- LinkedIn: [Tarek Abd Alkarim](https://www.linkedin.com/in/tarek-abd-alkarim-148453260/)
- Instagram: [@code_0sphere](https://www.instagram.com/code_0sphere/)
