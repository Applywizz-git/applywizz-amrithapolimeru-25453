import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1Img from "/Enterprise_Compensation_Cycle_Optimization.png";
import project2Img from "/Benefits_Administration_Workflow_Enhancement.jpeg";
import project3Img from "/Financial_Data_Visibility_Improvement_Initiative.png";

const projects = [
  {
    title: "Enterprise Compensation Cycle Optimization",
    desc: "Configured annual compensation review structures using eligibility rules, compensation grades, and calculated fields in Workday Compensation, improving merit cycle processing accuracy across multi-department HR operations.",
    tools: ["Workday Compensation", "BPF", "Calculated Fields", "Matrix Reports"],
    impact: "Merit cycle processing accuracy improved significantly",
    image: project1Img,
  },
  {
    title: "Benefits Administration Workflow Enhancement",
    desc: "Redesigned benefits enrollment workflows using Business Process Framework configuration improving employee self-service completion rates during open enrollment cycles and reducing enrollment exception tickets.",
    tools: ["Workday Benefits", "BPF", "Advanced Reports", "EIB"],
    impact: "Enrollment correction tickets reduced by 22%",
    image: project2Img,
  },
  {
    title: "Financial Data Visibility Improvement Initiative",
    desc: "Implemented financial reporting structures using Workday Financials dashboards supporting Finance Operations teams in monitoring General Ledger and procurement activity. Strengthened reconciliation readiness through EIB-based data validation.",
    tools: ["Workday Financials", "EIB", "Role-Based Security", "GL Reporting"],
    impact: "Manual reconciliation effort reduced by 20+ hours/month",
    image: project3Img,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Featured Projects
      </motion.h2>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 scrollbar-hide">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-3xl p-6 min-w-[300px] lg:min-w-0 snap-center flex flex-col overflow-hidden group border border-border/50 hover:border-accent/40 transition-colors duration-300 relative"
          >
            {/* Image Header wrapper via negative margins to bleed out of p-6 box */}
            <div className="relative h-48 -mt-6 -mx-6 mb-6 overflow-hidden rounded-t-3xl border-b border-border/50">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 z-20 glass-card p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ExternalLink className="w-4 h-4 text-foreground" />
              </div>
            </div>

            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{p.title}</h3>

            <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tools.map((t) => (
                <span key={t} className="bg-accent/40 text-accent-foreground text-xs px-2.5 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border/60 mt-auto">
              <p className="text-xs font-semibold text-primary dark:text-primary flex items-center gap-1.5">
                <span className="text-sm">📈</span> {p.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
