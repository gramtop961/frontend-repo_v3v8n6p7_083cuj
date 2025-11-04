import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";

// Local error boundary to gracefully handle Spline loading/parse issues
class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Optionally log the error
    console.warn("Spline failed to load:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center px-6 py-8 rounded-2xl bg-white/70 backdrop-blur border border-white/50 shadow-sm max-w-md mx-auto">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-pink-200 via-blue-200 to-teal-200" />
            <h3 className="text-xl font-semibold text-gray-900">Interactive preview unavailable</h3>
            <p className="mt-2 text-sm text-gray-600">Your device or network blocked the 3D scene. You can still explore the phone features below.</p>
            <a href="#features" className="inline-block mt-4 px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black">Explore features</a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-teal-50">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0">
        <SplineErrorBoundary>
          <Spline
            scene="https://prod.spline.design/6Y1Zsa3sGJNZaG0n/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </SplineErrorBoundary>
      </div>

      {/* Soft gradient veil that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/80" />

      {/* Headline & CTA with gentle parallax */}
      <motion.div style={{ y, opacity }} className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-gray-700 shadow-sm">
            New • AuraPhone Series
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            Feel the Lightness
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-lg">
            A pastel-inspired smartphone with an interactive 3D preview. Built for comfort, designed for wonder.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#buy" className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium shadow-md hover:bg-black transition-colors">
              Buy now
            </a>
            <a href="#features" className="px-6 py-3 rounded-full bg-white/70 text-gray-900 text-sm font-medium shadow hover:bg-white">
              Explore features
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
