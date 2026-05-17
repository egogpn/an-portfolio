import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/work-info")({
  head: () => ({
    meta: [
      { title: "Work Info — ANNIE" },
      { name: "description", content: "Selected projects across branding, editorial, motion and packaging." },
      { property: "og:title", content: "Work Info — ANNIE" },
      { property: "og:description", content: "An archive of selected client work and self-initiated projects." },
    ],
  }),
  component: WorkInfo,
});

const projects = [
  { title: "Amoeba Music", category: "Branding · Identity", year: "2024", desc: "Rebrand and in-store system for an independent record shop, anchored in cosmic typography and hand-set posters.", bg: "#2A4BFF", fg: "#F2EFE6", image: "/projects/amoeba-card.png" },
  { title: "Hong Kong", category: "Typography · Motion", year: "2024", desc: "A kinetic type study exploring Cantonese characters, neon and the choreography of bilingual signage.", bg: "#FF4D1F", fg: "#0E0E0E", image: "/projects/hongkong-card.png" },
  { title: "Myeow", category: "Packaging · Identity", year: "2023", desc: "Playful pet wellness brand: structural packaging system, voice and a maximal illustration library.", bg: "#FFC400", fg: "#0E0E0E", image: "/projects/myeow-card.png" },
  { title: "Ultimate Fantasia", category: "Art Direction", year: "2023", desc: "Cover art and editorial direction for an annual electronic music compilation. Lush, late-night, generous.", bg: "#1FB988", fg: "#F2EFE6", image: "/projects/fantasia-card.png" },
  { title: "Bloom Theory", category: "Editorial · Print", year: "2022", desc: "Botanical research journal in three volumes — modular grids, custom display cuts and risograph plates.", bg: "#E85D8B", fg: "#0E0E0E" },
  { title: "Forma Studio", category: "Identity · Web", year: "2022", desc: "Visual system for an architecture studio: monogram, signage, stationery and a quiet editorial website.", bg: "#0E0E0E", fg: "#F2EFE6" },
];

function WorkInfo() {
  return (
    <div>
      {/* Header */}
      <section
        className="px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden relative"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 20%, #FFD8E8 0%, transparent 60%), radial-gradient(80% 60% at 10% 90%, #C9E8D6 0%, transparent 60%), var(--background)",
        }}
      >
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground mb-5">
            INDEX / 2022 — 2024
          </div>
          <h1 className="font-display font-black tracking-[-0.045em] leading-[0.85] text-[16vw] md:text-[11vw]">
            {Array.from("WORK INFO.").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{ y: -12, color: ["#1E63FF", "#FF4D1F", "#1FB988", "#FFC400"][i % 4] }}
                transition={{ type: "spring", stiffness: 280, damping: 12 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80">
            Selected client and self-initiated work — identity, editorial, motion and packaging — built across studios in Hong Kong and New York.
          </p>
        </Reveal>
      </section>

      {/* Project list */}
      <div className="px-6 md:px-12">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative border-t border-foreground/20 py-8 md:py-10 cursor-pointer overflow-hidden"
            >
              {/* sweeping color background on hover */}
              <motion.div
                variants={{
                  rest: { scaleY: 0 },
                  hover: { scaleY: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: p.bg, transformOrigin: "bottom" }}
                className="absolute inset-0 -z-10"
              />

              <Link to="/" className="block">
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
                  <motion.div
                    variants={{ rest: { color: "var(--foreground)" }, hover: { color: p.fg } }}
                    className="col-span-1 font-mono text-[11px]"
                  >
                    0{i + 1}
                  </motion.div>
                  <motion.h3
                    variants={{ rest: { x: 0, color: "var(--foreground)" }, hover: { x: 12, color: p.fg } }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="col-span-11 md:col-span-5 font-display text-3xl md:text-6xl font-black tracking-[-0.03em] leading-[0.95]"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.div
                    variants={{ rest: { color: "var(--muted-foreground)" }, hover: { color: p.fg } }}
                    className="col-span-6 md:col-span-3 font-mono text-[11px] tracking-[0.18em] uppercase"
                  >
                    {p.category}
                  </motion.div>
                  <motion.div
                    variants={{ rest: { color: "var(--muted-foreground)" }, hover: { color: p.fg } }}
                    className="col-span-3 md:col-span-1 font-mono text-[11px] tracking-[0.18em]"
                  >
                    {p.year}
                  </motion.div>
                  <motion.div
                    variants={{ rest: { x: -8, opacity: 0.6 }, hover: { x: 0, opacity: 1, color: p.fg } }}
                    transition={{ type: "spring", stiffness: 240, damping: 16 }}
                    className="col-span-3 md:col-span-2 font-mono text-xs tracking-[0.2em] text-right"
                  >
                    VIEW →
                  </motion.div>
                </div>
              </Link>

              {/* Floating preview thumbnail */}
              {p.image && (
                <motion.div
                  variants={{
                    rest: { opacity: 0, scale: 0.8, rotate: -8, y: 30 },
                    hover: { opacity: 1, scale: 1, rotate: -4, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 w-48 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-[8px_10px_0_rgba(0,0,0,0.7)] hidden md:block"
                >
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                </motion.div>
              )}
            </motion.div>
          </Reveal>
        ))}
        <div className="border-t border-foreground/20" />
      </div>
    </div>
  );
}
