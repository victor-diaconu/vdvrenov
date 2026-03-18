// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import ReactGA from "react-ga4";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Replace with your GA4 Measurement ID
const TRACKING_ID = "G-LGHDRKQKN4";
ReactGA.initialize(TRACKING_ID);

const queryClient = new QueryClient();

// Component to track pageviews on route change
const GAListener = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GAListener>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GAListener>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;