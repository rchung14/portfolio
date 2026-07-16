import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import Pricing from './pages/Pricing.jsx';
import About from './pages/About.jsx';
import Legal from './pages/Legal.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Legal doc="privacy" route="/privacy" />} />
        <Route path="/terms" element={<Legal doc="terms" route="/terms" />} />
        <Route
          path="/accessibility"
          element={<Legal doc="accessibility" route="/accessibility" />}
        />
        {/* Unknown client routes fall back to the home view; unknown URLs
            hitting the server are handled by the spa-fallback rewrite. */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
