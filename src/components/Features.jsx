import { motion, useScroll, useTransform } from "framer-motion";
import { Battery, Camera, Cpu, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Camera,
    title: "Pastel Pixel Engine",
    desc: "A color science tuned for soft tones that pop — every memory looks dreamy and true.",
    from: "from-pink-200",
    to: "to-rose-100",
  },
  {
    icon: Battery,
    title: "All-day Ease",
    desc: "Ultra-efficient battery with adaptive refresh gives you smoothness without drain.",
    from: "from-blue-200",
    to: "to-teal-100",
  },
  {
    icon: Cpu,
    title: "Feather Chip",
    desc: "Power that floats. Desktop-grade performance wrapped in a calm, cool shell.",
    from: "from-violet-200",
    to: "to-indigo-100",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Secure enclave and on-device intelligence keep your world truly yours.",
    from: "from-emerald-200",
    to: "to-lime-100",
  },
];

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="features" ref={ref} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Designed to feel gentle</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Balanced hardware and pastel-forward design meet subtle motion for a soothing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const card = (
              <div key={f.title} className={`rounded-2xl p-6 bg-gradient-to-br ${f.from} ${f.to} shadow-sm border border-white/60 backdrop-blur-md` }>
                <div className="h-11 w-11 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                  <Icon className="h-5 w-5 text-gray-800" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-700">{f.desc}</p>
              </div>
            );
            if (i % 2 === 0) {
              return (
                <motion.div key={f.title} style={{ y: y1 }}>
                  {card}
                </motion.div>
              );
            }
            return (
              <motion.div key={f.title} style={{ y: y2 }}>
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
