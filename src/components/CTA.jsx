export default function CTA() {
  return (
    <section id="buy" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/60 shadow-lg bg-gradient-to-br from-pink-100 via-blue-100 to-teal-100">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.5),transparent_45%)]" />
          <div className="relative p-10 md:p-14 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to hold calm in your hand?</h3>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Pre-order AuraPhone now and get a matching pastel case on us.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium shadow-md hover:bg-black transition-colors">
                Pre-order for $799
              </button>
              <button className="px-6 py-3 rounded-full bg-white/80 text-gray-900 text-sm font-medium shadow hover:bg-white">
                Compare models
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
