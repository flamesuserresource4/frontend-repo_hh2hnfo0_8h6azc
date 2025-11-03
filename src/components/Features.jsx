import { Cpu, Shield, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Production-grade AI",
    desc: "Latency-optimized voice, text and multimodal agents designed for real users and real traffic.",
  },
  {
    icon: Shield,
    title: "Safety & governance",
    desc: "Guardrails, red-teaming and analytics baked in so your agents stay on brand and on task.",
  },
  {
    icon: Headphones,
    title: "Voice-first UX",
    desc: "Ultra-natural prosody, barge-in handling and call routing powered by enterprise telephony.",
  },
  {
    icon: Rocket,
    title: "From idea to launch",
    desc: "Strategy, design, implementation and MLOps — delivered by a senior, hands-on team.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#090910] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
            Why teams choose Auralabs
          </h2>
          <p className="mt-4 text-zinc-400">
            We blend rigorous engineering with crisp design to create delightful agent
            experiences that move metrics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-purple-400/40 transition-colors"
            >
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 blur" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>
    </section>
  );
}
