import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, ChevronDown } from "lucide-react";
import { useState } from "react";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "St. Vincent College",
    icon: GraduationCap,
    video: "/Education_People.mp4"
  },
];

const certifications = [
  { name: "Human Resource Analytics", issuer: "Coursera" },
  { name: "People Analytics", issuer: "Coursera" },
  { name: "Excel Skills for Business: Advanced", issuer: "Coursera" },
  { name: "Business Process Modeling", issuer: "Coursera" },
  { name: "Introduction to Financial Accounting", issuer: "Coursera" },
  { name: "Data Analysis and Visualization with Excel", issuer: "Coursera" },
];

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Education & Certifications
        </motion.h2>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end"
            >
              {/* Background Video */}
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter blur-[1px] opacity-30 transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                >
                  <source src={e.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/20" />
              </div>

              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" /> Masters
                </h3>
                <div className="space-y-4">
                  <p className="font-bold text-foreground text-2xl leading-tight">{e.degree}</p>
                  <p className="text-muted-foreground text-base font-medium">{e.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-8"
        >
          <h3 className="font-heading font-semibold text-xl mb-8 flex items-center gap-3 justify-center">
            <Award className="w-6 h-6 text-accent" /> Professional Certifications
          </h3>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {certifications.map((c, idx) => (
              <div
                key={c.name}
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`bg-primary/40 text-foreground text-sm font-medium px-4 py-3 rounded-2xl flex items-center justify-between cursor-pointer transition-colors duration-300 ${hoveredIndex === idx ? 'bg-primary/60' : ''}`}
                  whileHover={{ scale: 1.01 }}
                >
                  <span>{c.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredIndex === idx ? 'rotate-180' : ''}`} />
                </motion.div>

                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-1 px-4">
                        <p className="text-xs text-muted-foreground flex items-center gap-2 bg-accent/10 py-2 px-3 rounded-xl border border-accent/20">
                          <span className="font-bold text-accent italic">Issuer:</span> {c.issuer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
