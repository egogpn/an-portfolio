import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — ANNIE" },
      { name: "description", content: "Typographic experiments, poster studies and motion tests." },
      { property: "og:title", content: "Playground — ANNIE" },
      { property: "og:description", content: "An ongoing sketchbook of typography, color and motion." },
    ],
  }),
  component: Playground,
});

const skills = ["Typography", "Branding", "Packaging", "Editorial", "Motion", "Illustration", "Art Direction"];

type Tile =
  | { kind: "type"; label: string; content: string; bg: string; fg: string }
  | { kind: "motion"; label: string; content: string; bg: string; fg: string }
  | { kind: "poster"; label: string; content: string; bg: string; fg: string }
  | { kind: "color"; label: string; palette: string[] }
  | { kind: "layout"; label: string; bg: string; fg: string }
  | { kind: "sketch"; label: string; content: string; bg: string; fg: string };

const tiles: Tile[] = [
  { kind: "type", label: "TYPE STUDY 01", content: "Æ", bg: "#2A4BFF", fg: "#F2EFE6" },
  { kind: "poster", label: "POSTER · 24×36", content: "FORMA", bg: "#FFE3B0", fg: "#0E0E0E" },
  { kind: "motion", label: "MOTION TEST", content: "↻", bg: "#0E0E0E", fg: "#FFC400" },
  { kind: "color", label: "PALETTE / NOON", palette: ["#2A4BFF", "#FFC400", "#FF4D1F", "#1FB988"] },
  { kind: "type", label: "TYPE STUDY 02", content: "好", bg: "#FF4D1F", fg: "#F2EFE6" },
  { kind: "layout", label: "GRID STUDY", bg: "#F2EFE6", fg: "#0E0E0E" },
  { kind: "poster", label: "POSTER · RISO", content: "BLOOM", bg: "#1FB988", fg: "#0E0E0E" },
  { kind: "sketch", label: "SKETCH 014", content: "○△□", bg: "#E85D8B", fg: "#0E0E0E" },
];

function Playground() {
  return (
    <div>
      {/* Hero */}
      <section
        className="px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden relative"
        style={{
          background:
            "radial-gradient(80% 60% at 90% 10%, #FFEBA0 0%, transparent 60%), radial-gradient(80% 60% at 0% 100%, #CDE0FF 0%, transparent 60%), var(--background)",
        }}
      >
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground mb-5">
            SKETCHBOOK / ONGOING
          </div>
          <h1 className="font-display font-black tracking-[-0.06em] md:tracking-[-0.045em] leading-[0.85] text-[clamp(38px,13vw,160px)] md:text-[11vw]">
            <span className="inline-flex flex-nowrap">
              {Array.from("PLAYGROUND.").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block shrink-0"
                  whileHover={{
                    y: -14,
                    rotate: i % 2 === 0 ? -6 : 6,
                    color: ["#1E63FF", "#FF4D1F", "#1FB988", "#FFC400", "#E85D8B"][i % 5],
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 12 }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80">
            A loose archive of unfinished, in-progress and never-for-clients work — type, posters, color tests and small motion loops.
          </p>
        </Reveal>
      </section>

      {/* Disciplines marquee */}
      <Reveal>
        <div className="border-y border-foreground/20 py-6 overflow-hidden bg-foreground text-background">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap font-display font-black tracking-[-0.02em] text-3xl md:text-5xl"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0">
                {skills.map((s) => (
                  <span key={s} className="px-6 flex items-center gap-6">
                    {s}
                    <span className="text-[#FFC400]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* Tile grid */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -10, rotate: i % 2 === 0 ? -1.5 : 1.5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="aspect-square relative overflow-hidden rounded-xl flex items-center justify-center shadow-[6px_8px_0_rgba(14,14,14,0.85)] border-2 border-foreground"
                style={{
                  background: t.kind === "color" ? undefined : t.bg,
                  color: t.kind === "color" ? undefined : t.fg,
                }}
              >
                {t.kind === "color" ? (
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    {t.palette.map((c, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.4 }}
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                ) : t.kind === "layout" ? (
                  <div className="absolute inset-6 grid grid-cols-6 grid-rows-6 gap-1">
                    <div className="col-span-4 row-span-2 bg-foreground/85" />
                    <div className="col-span-2 row-span-4 bg-foreground/30" />
                    <div className="col-span-2 row-span-2 bg-foreground/55" />
                    <div className="col-span-2 row-span-2 bg-foreground/20" />
                    <div className="col-span-6 row-span-2 bg-foreground/10" />
                  </div>
                ) : (
                  <motion.div
                    animate={t.kind === "motion" ? { rotate: 360 } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`font-display font-black tracking-[-0.04em] ${
                      t.kind === "poster" ? "text-4xl md:text-5xl" : "text-7xl md:text-8xl"
                    }`}
                  >
                    {t.content}
                  </motion.div>
                )}
                <span
                  className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest"
                  style={{
                    color: t.kind === "color" ? "#0E0E0E" : t.fg,
                    background: t.kind === "color" ? "rgba(255,255,255,0.85)" : "transparent",
                    padding: t.kind === "color" ? "2px 6px" : 0,
                  }}
                >
                  {t.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
