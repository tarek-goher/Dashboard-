import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";
import { useCountUp } from "@/hooks/use-count-up";
import { kpiStats, monthlySales, categoryBreakdown } from "@/data/stats";
import { orders } from "@/data/orders";
import { products } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const COLORS = ['#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', '#f43f5e'];

const KpiCard = ({ title, value, icon: Icon, prefix = "", delay = 0, colorClass = "text-primary" }: any) => {
  const animatedValue = useCountUp(value);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover-elevate transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden relative group">
        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${colorClass}`}>
          <Icon className="w-16 h-16 transform rotate-12" />
        </div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Icon className={`h-4 w-4 ${colorClass}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {prefix}{animatedValue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-emerald-500 font-medium">+12.5%</span> from last month
          </p>
        </CardContent>
        <div className={`absolute bottom-0 left-0 h-1 w-full opacity-50 bg-gradient-to-r from-transparent via-current to-transparent ${colorClass}`} />
      </Card>
    </motion.div>
  );
};

export default function Overview() {
  const recentOrders = orders.slice(0, 5);
  const topProducts = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);

  return (
    <div className="space-y-6">
      <ThreeBackground />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mission Control</h2>
          <p className="text-muted-foreground">Overview of your business metrics.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Revenue" value={kpiStats.totalRevenue} icon={DollarSign} prefix="$" delay={0.1} colorClass="text-emerald-500" />
        <KpiCard title="Total Orders" value={kpiStats.totalOrders} icon={ShoppingCart} delay={0.2} colorClass="text-blue-500" />
        <KpiCard title="Active Users" value={kpiStats.totalUsers} icon={Users} delay={0.3} colorClass="text-violet-500" />
        <KpiCard title="Total Products" value={kpiStats.totalProducts} icon={Package} delay={0.4} colorClass="text-cyan-500" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 bg-card/80 backdrop-blur-sm border-border/50 hover-elevate transition-all">
          <CardHeader>
            <CardTitle>Revenue vs Orders</CardTitle>
          </CardHeader>
          <CardContent className="pl-0 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlySales} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#06b6d4" fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 bg-card/80 backdrop-blur-sm border-border/50 hover-elevate transition-all">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0 group hover:bg-accent/50 p-2 rounded-md transition-colors">
                  <div>
                    <p className="font-medium text-sm">{order.customerName}</p>
                    <p className="text-xs text-muted-foreground">{order.product}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-medium text-sm">${order.amount.toFixed(2)}</p>
                    <Badge variant={order.status === 'shipped' ? 'default' : order.status === 'pending' ? 'secondary' : 'outline'} className="capitalize w-20 justify-center">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 border-b border-border pb-4 last:border-0 last:pb-0 group hover:bg-accent/50 p-2 rounded-md transition-colors">
                  <div className="h-10 w-10 rounded bg-accent overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">${product.price.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{product.sold} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
