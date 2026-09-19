import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DestinationsPage } from './components/DestinationsPage';
import { PackagesPage } from './components/PackagesPage';
import { ContactPage } from './components/ContactPage';
import { GuidesPage } from './components/GuidesPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Seo } from './components/Seo';

export default function App() {
  return (
    <Router>
      <Seo />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
