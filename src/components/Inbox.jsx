export default function Inbox() {
  const items = [
    { name: 'Ava Patel', email: 'ava@studio.co', msg: 'Love the product! How do I…', time: '2m' },
    { name: 'Lucas Wang', email: 'lucas@acme.io', msg: 'Need a quote for team plan', time: '18m' },
    { name: 'Mina Farah', email: 'mina@farah.dev', msg: 'Bug on pricing page when…', time: '1h' },
    { name: 'Diego R.', email: 'diego@foundry.ai', msg: 'Schedule a demo next week?', time: '3h' },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
              <div className="px-4 py-3 text-sm text-white/70 border-b border-white/10">Inbox</div>
              <ul className="divide-y divide-white/10">
                {items.map((it, idx) => (
                  <li key={idx} className="px-4 py-4 hover:bg-white/5 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">{it.name}</div>
                        <div className="text-xs text-white/60">{it.email}</div>
                      </div>
                      <div className="text-xs text-white/50">{it.time}</div>
                    </div>
                    <div className="mt-1 text-white/80 text-sm">{it.msg}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-5">
              <div className="text-white/90 font-medium">Forms</div>
              <div className="mt-2 text-white/70 text-sm">Create forms that collect data and stream responses live, from a single prompt.</div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm">Create form</button>
            </div>
            <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-5">
              <div className="text-white/90 font-medium">New</div>
              <div className="mt-2 text-white/70 text-sm">Auto‑tag, assign, and reply. Export CSV.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
