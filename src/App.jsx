import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inbox from './components/Inbox';
import AISection from './components/AISection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <main>
        <Inbox />
        <AISection />
        <Pricing />
        <FAQ />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex items-center justify-between">
          <div>© {new Date().getFullYear()} Flames Blue. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#docs" className="hover:text-white">Docs</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#assist" className="hover:text-white">Ask AI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App