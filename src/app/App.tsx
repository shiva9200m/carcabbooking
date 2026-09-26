import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HomePage } from "@/pages/HomePage";
import { DestinationsPage } from "@/pages/DestinationsPage";
import { PackagesPage } from "@/pages/PackagesPage";
import { ContactPage } from "@/pages/ContactPage";
import { GuidesPage } from "@/pages/GuidesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import { Seo } from "@/seo/Seo";

import { AnalyticsTracker } from "@/analytics/AnalyticsTracker";

export default function App() {
  return (
    <Router>
      {/* SEO */}
      <Seo />

      {/* GA4 CUSTOM EVENT TRACKING */}
      <AnalyticsTracker />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/destinations"
              element={<DestinationsPage />}
            />

            <Route
              path="/packages"
              element={<PackagesPage />}
            />

            <Route
              path="/guides"
              element={<GuidesPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}