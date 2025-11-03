import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">Auralabs AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-300 hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-zinc-300 hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-zinc-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-zinc-300 hover:text-white transition-colors">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/90 hover:text-white border border-white/10 hover:border-white/20 transition-colors">
              Contact
            </button>
            <a
              href="#demo"
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 hover:from-fuchsia-400 hover:via-purple-500 hover:to-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70"
            >
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
