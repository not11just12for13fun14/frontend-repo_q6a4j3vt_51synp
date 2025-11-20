import { Brain, Bot } from "lucide-react";

export default function AISection() {
  return (
    <section id="assist" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur pointer-events-none">
            AI Integrations
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Attach AI to any flow</h2>
          <p className="mt-3 text-white/80 max-w-xl">
            Summarize feedback, classify leads, generate replies — no code. Pick a model, add an action, press run.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[{t:'OpenAI',d:'Model: gpt‑4o‑mini'},{t:'Anthropic',d:'Model: Claude'}].map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-white/90 font-medium"><Bot className="w-4 h-4" /> {c.t}</div>
                <div className="text-xs text-white/60 mt-1">{c.d}</div>
                <button className="mt-3 text-xs rounded-lg bg-white text-slate-900 px-3 py-1.5">Connect</button>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-5">
            <div className="text-white/90 font-medium">Ask AI about this page…</div>
            <div className="mt-3 flex gap-2">
              <input className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40" placeholder="How do I add payments?" />
              <button className="rounded-lg bg-white text-slate-900 px-4">Ask</button>
            </div>
            <div className="mt-4 text-sm text-white/80">
              I can wire a checkout with Stripe and show a "Pay" button on your Pricing page. Apply now?
            </div>
            <div className="mt-3 flex gap-2">
              <button className="text-xs px-3 py-1.5 rounded-lg bg-white text-slate-900">Apply change</button>
              <button className="text-xs px-3 py-1.5 rounded-lg border border-white/20 text-white">Preview</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
