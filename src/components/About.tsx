import { motion } from "framer-motion";
import { User, BarChart3, Zap } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Who I Am",
    points: [
      "Senior Workday Analyst",
      "6+ Years of Experience",
      "MBA - St. Vincent College",
    ],
  },
  {
    icon: BarChart3,
    title: "What I Do",
    points: [
      "Workday HCM & Financials Config",
      "HRIS Reporting & Analytics",
      "ERP & Payroll Integration Support",
    ],
  },
  {
    icon: Zap,
    title: "My Strength",
    points: [
      "Business Process Framework (BPF)",
      "Role-Based Security & SOX Compliance",
      "EIB & Core Connector Integrations",
    ],
  },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/50 flex items-center justify-center mb-5">
              <card.icon className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-4">{card.title}</h3>
            <ul className="space-y-2">
              {card.points.map((p) => (
                <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
