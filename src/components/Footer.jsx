export default function Footer() {
  return (
    <footer className="bg-[#08080e] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Auralabs AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-zinc-400 hover:text-white">Privacy</a>
            <a href="#terms" className="text-zinc-400 hover:text-white">Terms</a>
            <a href="#contact" className="text-zinc-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
