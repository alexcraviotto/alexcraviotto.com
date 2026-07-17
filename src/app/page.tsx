const experience = [
  { company: "HeyGen",           role: "Software Engineer", period: "2026–"     },
  { company: "Consumer App",     role: "Founder",           period: "2025–",    badge: "+45K downloads" },
  { company: "Feynman Software", role: "Software Engineer", period: "2025–2026" },
  { company: "Reminiscencefy",   role: "Founder",           period: "2022–",    badge: "+40K users" },
  { company: "ConversaLink",     role: "Co-Founder",        period: "2023–2025" },
];

export default function Home() {
  return (
    <main className="px-10 md:px-16 max-w-lg w-full space-y-10">
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
          Alex Craviotto
        </h1>
        <p className="text-sm text-black/50">
          Software Engineer @ HeyGen
        </p>
      </div>

      <blockquote className="space-y-1">
        <p className="text-sm leading-relaxed text-black/70 italic">
          &ldquo;Everything I do is for the 17-year-old version of myself.&rdquo;
        </p>
        <cite className="text-xs text-black/40 not-italic">— Virgil Abloh</cite>
      </blockquote>

      <div className="space-y-3">
        {experience.map(({ company, role, period, badge }) => (
          <div key={company} className="flex justify-between items-baseline gap-4">
            <div>
              <span className="text-sm text-black/80">{company}</span>
              {role && <span className="text-xs text-black/40 ml-2">{role}</span>}
              {badge && <span className="text-xs text-black/30 ml-2">{badge}</span>}
            </div>
            <span className="text-xs text-black/30 shrink-0 tabular-nums">{period}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-5 text-xs text-black/30">
        <a href="https://github.com/alexcraviotto" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors duration-200">github</a>
        <a href="https://x.com/craviottx" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors duration-200">twitter</a>
        <a href="https://linkedin.com/in/alexcraviotto" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors duration-200">linkedin</a>
      </div>
    </main>
  );
}
