import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/Layout";
import { LoadingScreen } from "@/components/LoadingScreen";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Pages
import Overview from "@/pages/overview";
import Orders from "@/pages/orders";
import Products from "@/pages/products";
import Users from "@/pages/users";
import Reports from "@/pages/reports";
import Settings from "@/pages/settings";
import Profile from "@/pages/profile";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Redirect to="/overview" />
        </Route>
        <Route path="/overview" component={Overview} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/reports" component={Reports} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loading" />
            ) : (
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} key="router">
                <Router />
              </WouterRouter>
            )}
          </AnimatePresence>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
