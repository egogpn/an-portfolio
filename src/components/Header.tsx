import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/work-info", label: "WORK INFO" },
  { to: "/playground", label: "PLAYGROUND" },
] as const;

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 md:py-8 flex items-center justify-between bg-background/80 backdrop-blur-md"
    >
      <Link
        to="/"
        className="font-mono text-2xl md:text-5xl font-bold tracking-tight text-foreground"
      >
        ա.          
      </Link>
      <nav className="flex items-center gap-6 md:gap-10">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="font-mono text-[11px] md:text-xs font-semibold tracking-[0.12em] text-foreground/90 hover:text-foreground transition-colors"
            activeProps={{ className: "font-mono text-[11px] md:text-xs font-bold tracking-[0.12em] text-foreground underline underline-offset-4" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
