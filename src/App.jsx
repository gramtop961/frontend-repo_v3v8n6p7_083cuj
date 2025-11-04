import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ColorShowcase from "./components/ColorShowcase";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ColorShowcase />
        <CTA />
      </main>
      <footer className="pb-10 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} AuraPhone. Crafted with pastels and calm.</p>
      </footer>
    </div>
  );
}

export default App;
