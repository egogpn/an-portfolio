import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

type Project = {
  index: string;
  total: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  bg: string;
  text: string;
  accent: string;
  pill: string;
  pillText: string;
  italic?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    total: "04",
    title: "AMOEBA\nMUSIC",
    tag: "BRANDING · STRATEGY",
    desc: "A modular brand system reimagining the world's largest independent record store for a new generation of crate-diggers.",
    image: "/projects/amoeba-card.png",
    bg: "#2A4BFF",
    text: "#F2EFE6",
    accent: "#F2C94C",
    pill: "#0E0E0E",
    pillText: "#F2EFE6",
  },
  {
    index: "02",
    total: "04",
    title: "HONG\nKONG",
    tag: "BRANDING · MOTION",
    desc: "A kinetic identity for the city — pulse, neon, and density rendered as type that moves like traffic.",
    image: "/projects/hongkong-card.png",
    bg: "#FF4D1F",
    text: "#0E0E0E",
    accent: "#1E63FF",
    pill: "#1E63FF",
    pillText: "#F2EFE6",
  },
  {
    index: "03",
    total: "04",
    title: "MYEOW",
    tag: "BRANDING · PACKAGING",
    desc: "Purrfect food for purrfect friends. Sticker-forward packaging and a chromatic identity for a premium cat-food line.",
    image: "/projects/myeow-card.png",
    bg: "#FFC400",
    text: "#0E0E0E",
    accent: "#1E63FF",
    pill: "#3DCBA8",
    pillText: "#0E0E0E",
  },
  {
    index: "04",
    total: "04",
    title: "ULTIMATE\nFANTASIA",
    tag: "BOOK · EXHIBITION",
    desc: "A book and exhibition design exploring iridescence, memory, and the surfaces of imagined futures.",
    image: "/projects/fantasia-card.png",
    bg: "#1FB988",
    text: "#F2EFE6",
    accent: "#FF3D7F",
    pill: "#FF4D1F",
    pillText: "#F2EFE6",
    italic: true,
  },
];

function Home() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);

    update();
    media.addEventListener?.("change", update);
    // Safari < 14
    // eslint-disable-next-line deprecation/deprecation
    media.addListener?.(update);

    return () => {
      media.removeEventListener?.("change", update);
      // eslint-disable-next-line deprecation/deprecation
      media.removeListener?.(update);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative px-6 md:px-12 pt-20 md:pt-24 pb-20 md:pb-24 min-h-[75svh] md:min-h-[80svh] overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 80% at 10% 0%, #FFE3B0 0%, transparent 55%), radial-gradient(100% 80% at 100% 100%, #C9D6FF 0%, transparent 60%), var(--background)",
        }}
      >
        <motion.div
          aria-hidden
          animate={{ y: [0, -24, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-10 right-[44%] w-44 h-44 rounded-full blur-3xl opacity-60"
          style={{ background: "#FF7A59" }}
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, 26, 0], x: [0, -14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-8 left-[28%] w-60 h-60 rounded-full blur-3xl opacity-50"
          style={{ background: "#3DCBA8" }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black tracking-[-0.045em] leading-[0.85] text-[14vw] lg:text-[10.25vw] cursor-default"
            >
              {Array.from("ANNIE").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  whileHover={{
                    y: -14,
                    color: ["#1E63FF", "#FF4D1F", "#1FB988", "#FFC400"][i % 4],
                    rotate: i % 2 === 0 ? -4 : 4,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 12 }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 md:mt-4 max-w-xl text-xl md:text-[1.55rem] leading-[1.25] font-medium tracking-tight"
            >
              Branding & Design{" "}
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
            </motion.p> 
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={canHover ? { rotate: 0, scale: 1.02 } : undefined}
            whileInView={
              !canHover ? { rotate: [-2, 0, -2], scale: [1, 1.02, 1] } : undefined
            }
            viewport={!canHover ? { once: true, amount: 0.65 } : undefined}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[16/13] md:aspect-[16/12] lg:aspect-[16/11] overflow-hidden rounded-2xl shadow-[14px_18px_0_rgba(14,14,14,0.9)] border-2 border-foreground bg-foreground">
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] bg-background text-foreground px-2 py-1">
                REEL · 2025
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project sections */}
      {projects.map((p) => (
        <ProjectSection key={p.index} project={p} />
      ))}
    </div>
  );
}

function ProjectSection({ project: p }: { project: Project }) {
  return (
    <section
      className="px-6 md:px-12 py-20 md:py-28"
      style={{ background: p.bg, color: p.text }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <motion.span
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="inline-block font-mono text-[10px] md:text-[11px] tracking-[0.18em] px-3 py-1.5 rotate-[-2deg] shadow-[3px_3px_0_rgba(0,0,0,0.85)] cursor-default"
            style={{ background: p.pill, color: p.pillText }}
          >
            {p.tag}
          </motion.span>
          <motion.h2
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className={`mt-10 font-display font-black tracking-[-0.04em] leading-[0.9] text-[15vw] lg:text-[7.5vw] whitespace-pre-line cursor-default ${
              p.italic ? "italic" : ""
            }`}
            style={{ textShadow: `4px 4px 0 ${p.accent}` }}
          >
            {p.title}
          </motion.h2>
          <p className="mt-8 max-w-md text-lg md:text-xl leading-snug">
            {p.desc}
          </p>
          <Link
            to="/work-info"
            className="group mt-12 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] border-b pb-1"
            style={{ borderColor: p.text }}
          >
            {p.index} / {p.total} — VIEW PROJECT
            <motion.span
              className="inline-block"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, rotate: -1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[10px_14px_0_rgba(0,0,0,0.85)] bg-white/5">
            <motion.img
              src={p.image}
              alt={p.title.replace("\n", " ")}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
