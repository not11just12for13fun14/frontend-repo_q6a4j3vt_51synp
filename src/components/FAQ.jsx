export default function FAQ() {
  const faqs = [
    {
      q: 'How do I start building my first app?',
      a: 'Simply describe your app idea in the prompt box. Our AI will generate a complete, production-ready application with the features you specify. You can customize and deploy instantly.'
    },
    {
      q: 'Can I only build & share prototypes with Flames?',
      a: 'No! You can build, deploy and monetize your app without coding. Export your code, publish with SSL, SEO and custom domains handled automatically.'
    },
    {
      q: 'Do I need coding experience?',
      a: 'No coding experience required. Our AI handles the technical details, while developers can dive into the code for full customization or export it.'
    },
    {
      q: 'How long does generation take?',
      a: 'Most apps are generated in under 2 minutes. Complex apps may take up to 5 minutes.'
    },
  ];
  return (
    <section className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Questions? We\'ve got answers</h2>
        <p className="text-center text-white/70 mt-2">Everything you need to know about building with Flames</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl bg-slate-900/60 border border-white/10 p-5">
              <div className="font-medium text-white/90">{i+1}. {f.q}</div>
              <div className="mt-2 text-white/70 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
