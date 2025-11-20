import { Menu, MessageCircle, BookOpen, DollarSign, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-400 shadow ring-1 ring-white/20 flex items-center justify-center">
            <span className="text-white font-bold">FB</span>
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Flames Blue</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-white/80 hover:text-white inline-flex items-center gap-2"><Home className="w-4 h-4" /> Home</a>
          <a href="#docs" className="text-white/80 hover:text-white inline-flex items-center gap-2"><BookOpen className="w-4 h-4" /> Docs</a>
          <a href="#pricing" className="text-white/80 hover:text-white inline-flex items-center gap-2"><DollarSign className="w-4 h-4" /> Pricing</a>
          <a href="#assist" className="text-white/80 hover:text-white inline-flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Ask AI</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
