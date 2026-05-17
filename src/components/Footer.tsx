export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      {/* Dotted top border */}
      <div
        className="h-3"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #0E0E0E 0 10px, transparent 10px 20px)",
          backgroundSize: "20px 2px",
          backgroundPosition: "0 50%",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="px-6 md:px-12 py-24 md:py-32 text-center">
        <h2 className="font-display font-black tracking-[-0.035em] leading-[1] text-[9vw] md:text-[6.5vw]">
          Let's build something{" "}
          <span style={{ color: "#1E63FF" }}>vibrant</span>.
        </h2>

        <a
          href="mailto:hello@peilinli.design"
          className="mt-14 inline-block font-mono text-sm md:text-base tracking-[0.12em] border-b-2 border-foreground pb-1 hover:opacity-70 transition"
        >
          annie@gmail.com
        </a>

        <div className="mt-12 flex justify-center gap-10 md:gap-16 font-mono text-xs md:text-sm tracking-[0.2em]">
          <a href="#" className="hover:opacity-60 transition">INSTAGRAM</a>
          <a href="#" className="hover:opacity-60 transition">ARE.NA</a>
          <a href="#" className="hover:opacity-60 transition">LINKEDIN</a>
        </div>

        <div className="mt-20 font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
          © Created by Edgar
        </div>
      </div>
    </footer>
  );
}
