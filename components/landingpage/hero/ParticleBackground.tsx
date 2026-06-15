// components/landingpage/hero/ParticleBackground.tsx

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />
      <div className="absolute left-[30%] top-[8%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
      <div className="absolute right-[20%] top-[18%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />

      <svg className="absolute inset-0 h-full w-full opacity-30">
        <line x1="10%" y1="15%" x2="30%" y2="8%" stroke="#22d3ee" />
        <line x1="30%" y1="8%" x2="80%" y2="18%" stroke="#a855f7" />
      </svg>
    </div>
  );
}
