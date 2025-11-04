import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/60 bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
            <Rocket className="h-5 w-5 text-blue-700" />
          </div>
          <span className="font-semibold tracking-tight text-gray-800">AuraPhone</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#colors" className="hover:text-gray-900 transition-colors">Colors</a>
          <a href="#buy" className="hover:text-gray-900 transition-colors">Buy</a>
        </nav>
        <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
          Pre-order
        </button>
      </div>
    </header>
  );
}
