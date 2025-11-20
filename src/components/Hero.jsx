import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 w-full">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur pointer-events-none">
              New: auto‑tag, assign, reply • Export CSV
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Build fast with production‑ready blocks
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              Everything you need already wired: forms, payments, analytics, and AI assistance — no setup required.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#forms" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow">
                Start building
              </a>
              <a href="#pricing" className="rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/20">
                See pricing
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="rounded-2xl bg-slate-900/50 border border-white/15 backdrop-blur p-4">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>AI Assistant</span>
                <span className="rounded-full bg-emerald-500/15 text-emerald-300 px-2 py-0.5">gpt‑4o‑mini</span>
              </div>
              <div className="mt-3 rounded-xl bg-slate-800/70 p-3 text-white/90">
                <p className="text-sm">How do I add payments?</p>
                <div className="mt-2 text-xs text-white/70">I can wire a checkout with Stripe and show a "Pay" button on your pricing page. Apply now?</div>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-white text-slate-900">Apply change</button>
                  <button className="text-xs px-3 py-1.5 rounded-lg border border-white/20 text-white">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  );
}
