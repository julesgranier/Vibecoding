
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventPage from "./pages/EventPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import TermsAndConditionsES from "./pages/TermsAndConditionsES";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyES from "./pages/PrivacyPolicyES";
import AvisoLegal from "./pages/AvisoLegal";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import { Download } from "./pages/Download";
import Referral from "./pages/Referral";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/download" element={<Download />} />
          <Route path="/app" element={<Referral />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditionsES />} />
          <Route path="/terms-and-conditions-spanish" element={<TermsAndConditionsES />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyES />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
