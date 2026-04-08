import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import profileImg from "/profile_image_women.png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imgX = useTransform(smoothX, [0, 1], [-15, 15]);
  const imgY = useTransform(smoothY, [0, 1], [-15, 15]);
  const floatX = useTransform(smoothX, [0, 1], [20, -20]);
  const floatY = useTransform(smoothY, [0, 1], [15, -15]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 pt-24 pb-12"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-morph" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        {/* Top line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <span className="glass-card px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available for Opportunities
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">Lewisville, TX | Open to Remote</span>
        </motion.div>

        {/* Main editorial layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-0">
          {/* Giant name typography */}
          <div className="md:col-span-7 relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground text-sm md:text-base font-medium tracking-wide uppercase mb-2"
            >
              Senior Workday Analyst
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-heading font-bold leading-[0.9] tracking-tight"
            >
              <span className="block text-[clamp(2rem,7vw,4.5rem)] text-foreground">
                AMRITHA
              </span>
              <span className="block text-[clamp(2rem,7vw,4.5rem)] text-foreground/20">
                POLIMERU
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 md:mt-8 max-w-md"
            >
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Senior Workday Analyst with <span className="text-foreground font-medium">6+ years of experience</span> supporting Workday HCM, Compensation, Benefits, Payroll, and Workday Financials across banking and healthcare organizations.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#projects"
                  className="bg-accent text-accent-foreground px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-sm"
                >
                  View Work <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="/resume_amritha-polimeru_wda.pdf"
                  download="resume_amritha-polimeru.pdf"
                  className="bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="glass-card-strong px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 text-foreground border border-accent/20"
                >
                  <Mail className="w-4 h-4" /> Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right side — Image + floating elements */}
          <div className="md:col-span-5 relative flex justify-center md:justify-end">
            {/* Image with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ x: imgX, y: imgY }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30 rounded-[32px] blur-2xl scale-110 -z-10" />

              <div className="glass-card-strong rounded-[32px] p-1 relative">
                <img
                  src={profileImg}
                  alt="AMRITHA POLIMERU"
                  className="w-56 h-64 md:w-72 md:h-80 object-cover rounded-[28px]"
                />
              </div>

              {/* Floating stat badges with parallax */}
              <motion.div
                style={{ x: floatX, y: floatY }}
                className="absolute -top-4 -left-6 md:-left-12 glass-card-strong rounded-2xl px-4 py-3 z-20"
              >
                <p className="text-2xl font-bold text-foreground">6+</p>
                <p className="text-[10px] text-muted-foreground">Years Experience</p>
              </motion.div>

              <motion.div
                style={{ x: useTransform(smoothX, [0, 1], [-12, 12]), y: useTransform(smoothY, [0, 1], [-18, 18]) }}
                className="absolute -bottom-3 -left-4 md:-left-10 glass-card-strong rounded-2xl px-4 py-3 z-20"
              >
                <p className="text-2xl font-bold text-foreground">28%</p>
                <p className="text-[10px] text-muted-foreground">Payroll Exceptions Reduced</p>
              </motion.div>

              <motion.div
                style={{ x: useTransform(smoothX, [0, 1], [15, -15]), y: useTransform(smoothY, [0, 1], [10, -10]) }}
                className="absolute -top-2 -right-4 md:-right-8 glass-card-strong rounded-full p-3 z-20"
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.div>

              <motion.div
                style={{ x: useTransform(smoothX, [0, 1], [18, -18]), y: useTransform(smoothY, [0, 1], [-8, 8]) }}
                className="absolute -bottom-5 -right-3 md:-right-10 glass-card-strong rounded-2xl px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <span className="w-4 h-4 rounded-full bg-primary/60 border border-background" />
                    <span className="w-4 h-4 rounded-full bg-accent/60 border border-background" />
                    <span className="w-4 h-4 rounded-full bg-secondary border border-background" />
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">Workday HCM · BPF · EIB · SOX · BIRT Reports</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee-style tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {["Workday HCM", "Workday Financials", "Compensation", "Benefits", "BPF", "EIB", "BIRT Reporting", "Role-Based Security", "SOX Compliance", "Core Connectors"].map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground border border-border rounded-full px-3.5 py-1.5 hover:bg-card/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
