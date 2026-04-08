import { motion } from "framer-motion";

const categories = [
  {
    title: "Workday Platforms",
    skills: ["Workday HCM", "Workday Financials", "Workday Compensation", "Workday Benefits", "Workday Absence Management", "Workday Recruiting", "Workday Onboarding", "Workday Security", "Workday Reporting", "Tenant Management"],
  },
  {
    title: "HRIS & Functional Configuration",
    skills: ["Business Process Framework (BPF)", "Employee Lifecycle Mgmt", "Position Management", "Org Structure Config", "Compensation Cycle Support", "Benefits Administration"],
  },
  {
    title: "Reporting & Analytics",
    skills: ["BIRT Reporting", "Advanced Reports", "Matrix Reports", "Composite Reports", "Calculated Fields", "Workday Dashboards", "HCM Analytics", "Compensation Analytics"],
  },
  {
    title: "Security & Compliance",
    skills: ["Role-Based Security", "Domain Security", "Segregation of Duties (SoD)", "SOX Compliance", "Audit Readiness", "Data Governance"],
  },
  {
    title: "Integrations & Data Management",
    skills: ["Enterprise Interface Builder (EIB)", "Core Connectors (PECI, PICOF)", "Workday Studio", "REST API", "SOAP API", "XML / XSLT", "JSON"],
  },
  {
    title: "ERP & Tools",
    skills: ["General Ledger (GL)", "AP / AR", "Procurement Workflows", "Bank Reconciliation", "JIRA", "ServiceNow", "SIT / UAT", "Agile / Scrum"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="font-heading font-semibold mb-4 text-foreground">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/40 text-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
