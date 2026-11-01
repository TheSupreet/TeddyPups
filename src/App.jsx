import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import GoneHomePage from "./pages/GoneHomePage";
import HappyFamiliesPage from "./pages/HappyFamiliesPage";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import NotFoundPage from "./pages/NotFoundPage";
import PuppiesPage from "./pages/PuppiesPage";
import PuppyDetailPage from "./pages/PuppyDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="puppies" element={<PuppiesPage />} />
          <Route path="puppies/:slug" element={<PuppyDetailPage />} />
          <Route path="gone-home" element={<GoneHomePage />} />
          <Route path="happy-families" element={<HappyFamiliesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
