import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const colors = [
  { name: "Cloud", class: "from-sky-100 to-white", hex: "#EAF6FF" },
  { name: "Blush", class: "from-rose-100 to-white", hex: "#FFE8ED" },
  { name: "Mint", class: "from-emerald-100 to-white", hex: "#E6FAEF" },
  { name: "Lavender", class: "from-indigo-100 to-white", hex: "#ECEBFF" },
];

export default function ColorShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const rotate = useTransform(progress, [0, 1], [-8, 8]);

  return (
    <section id="colors" ref={ref} className="relative py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Pastel colorways</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Soft on the eyes, rich in personality. Choose a tone that matches your vibe.</p>
        </div>

        <motion.div style={{ rotate }} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {colors.map((c) => (
            <div key={c.name} className={`group relative aspect-[3/5] rounded-3xl overflow-hidden border bg-gradient-to-br ${c.class} border-white/60 shadow-sm` }>
              <div className="absolute inset-0 flex items-end p-4">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">{c.name}</span>
                    <span className="text-[10px] text-gray-600">{c.hex}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/70">
                    <div className="h-1.5 rounded-full bg-gray-900/70 group-hover:bg-gray-900 transition-all w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
