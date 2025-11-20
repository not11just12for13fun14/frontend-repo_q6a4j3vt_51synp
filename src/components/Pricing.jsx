export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
          <p className="mt-2 text-white/70">Plan • Pro — $19/mo</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <div className="text-white/90 font-medium">Pro</div>
            <div className="text-3xl font-bold text-white mt-2">$19<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>Unlimited blocks</li>
              <li>AI assistant</li>
              <li>Stripe/Razorpay</li>
              <li>Analytics</li>
            </ul>
            <button className="mt-5 w-full rounded-lg bg-white text-slate-900 py-2 font-medium">Choose Pro</button>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <div className="text-white/90 font-medium">Payments</div>
            <div className="mt-3 rounded-xl bg-slate-800/70 p-4">
              <div className="text-white/80 text-sm">Card •••• 4242</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-white/70">
                <input className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" placeholder="MM/YY" />
                <input className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" placeholder="CVC" />
                <button className="rounded-lg bg-white text-slate-900">Pay • $19</button>
              </div>
              <div className="mt-2 text-[10px] text-white/50">Powered by Stripe • Secure • PCI‑DSS</div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <div className="text-white/90 font-medium">Analytics</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Visitors</div>
                <div className="text-xl font-semibold">+12% WoW</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Split</div>
                <div className="text-xl font-semibold">Web 68% • Mobile 32%</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Conversions</div>
                <div className="text-xl font-semibold">Daily</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Top pages</div>
                <div className="text-xl font-semibold">Web • Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
