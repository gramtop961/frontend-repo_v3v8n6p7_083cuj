import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-teal-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6Y1Zsa3sGJNZaG0n/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/80" />

      <motion.div style={{ y, opacity }} className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <span className="px-3 py-1 rounded-full bg-white/70 text-xs font-medium text-gray-700 shadow-sm">
            New • AuraPhone Series
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            Feel the Lightness
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-lg">
            A pastel-inspired smartphone with interactive 3D that you can play with. Built for comfort, designed for wonder.
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
