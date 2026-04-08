import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
    >
      <div className="max-w-6xl mx-auto bg-leaf-dark/95 backdrop-blur-md border border-leaf-dark/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg transition-colors duration-500">
        <a href="#" className="font-heading font-bold text-lg text-leaf-dark-foreground">
          AP<span className="text-accent-foreground dark:text-accent-foreground">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-leaf-dark-foreground/80 hover:text-leaf-dark-foreground transition-colors font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume_amritha-polimeru_wda.pdf"
            download="resume_amritha-polimeru.pdf"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-bold hover:scale-105 transition-transform"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-leaf-dark-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-4 bg-leaf-dark backdrop-blur-lg border border-leaf-dark/20 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-leaf-dark-foreground/80 hover:text-leaf-dark-foreground transition-colors font-semibold py-2 border-b border-leaf-dark-foreground/10 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
