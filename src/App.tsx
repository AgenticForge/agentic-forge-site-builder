import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppContent from "./components/AppContent";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to handle 404 redirects
const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <RedirectHandler />
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
