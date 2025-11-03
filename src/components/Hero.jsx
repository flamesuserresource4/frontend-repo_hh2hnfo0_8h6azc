import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b12]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500" />
              Now launching: voice-first AI agents
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
              Build voice-native AI agents that feel alive
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Auralabs is a tech-forward AI agency helping modern teams ship conversational
              products — from realtime voice to multimodal copilots — with a focus on
              performance, brand and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 hover:from-fuchsia-400 hover:via-purple-500 hover:to-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70"
              >
                Book a strategy call
              </a>
              <a
                href="#case-studies"
                className="inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/90 hover:text-white border border-white/10 hover:border-white/20"
              >
                View case studies
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
              {[
                "OpenAI",
                "Anthropic",
                "Cohere",
                "Twilio",
                "Vercel",
                "AWS",
              ].map((logo) => (
                <div key={logo} className="text-xs text-zinc-500">{logo}</div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-black/40">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            {/* soft radial gradient accents */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-pink-500/10 blur-3xl" />
              <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-fuchsia-500/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* page background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>
    </section>
  );
}
