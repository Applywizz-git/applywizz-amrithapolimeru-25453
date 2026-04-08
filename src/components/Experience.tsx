import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Workday Analyst",
    company: "JPMorgan Chase | USA (Remote)",
    period: "Jun 2023 - Present",
    logo: "/JPMorgan_Chase.png",
    points: [
      "Managed employee lifecycle transactions across Core HCM, Compensation, and Benefits using Business Process Framework (BPF) configuration and tenant management improving HR operations accuracy for 10,000+ employees.",
      "Partnered with Payroll administrators and Finance Operations teams to stabilize PECI and benefits vendor integrations through EIB validation and connector monitoring, reducing payroll exceptions by 28%.",
      "Configured Role-Based Security and Domain Security policies aligned with SOX controls, strengthening segregation-of-duties governance across regulated banking workflows.",
      "Developed BIRT and Composite Reports for HR and Compensation stakeholders using calculated fields and matrix reporting logic, eliminating ~20 manual reporting hours per month.",
      "Collaborated with Recruiting and HR Operations partners to refine onboarding workflows and position management structures supporting enterprise hiring cycles across Workday HCM operations.",
      "Coordinated SIT and UAT validation across multiple tenant releases using ServiceNow and JIRA tracking, achieving zero critical defects during production deployment cycles.",
      "Enabled Finance Operations reporting alignment by supporting GL and procurement workflow visibility through Workday dashboards used by cross-functional finance analysts.",
      "Strengthened HRIS data governance by auditing employee job profile updates, organization assignments, and compensation eligibility rules, improving downstream reporting accuracy by 18%.",
    ],
  },
  {
    role: "Workday HCM Analyst",
    company: "Mayo Clinic | India",
    period: "Mar 2021 - Mar 2023",
    logo: "/Mayo_Clinic.png",
    points: [
      "Configured Workday Financials across General Ledger, AP/AR, and procurement workflows improving financial transaction traceability during ERP modernization rollout.",
      "Led Advanced Compensation cycle configuration using eligibility rules, compensation grades, and merit planning structures supporting 8,000+ employees during annual review cycles.",
      "Collaborated with Benefits administrators to maintain enrollment workflow accuracy using BPF updates and calculated field validations, reducing open enrollment correction tickets by 22%.",
      "Designed Matrix and Advanced Reports using Workday Reporting tools to provide real-time headcount and leave utilization dashboards for HR leadership decision support.",
      "Partnered with Payroll teams to stabilize vendor integration outputs through Core Connector monitoring and XML validation routines improving compensation data synchronization reliability.",
      "Administered Domain Security governance updates supporting HIPAA-aligned access controls across sensitive workforce data structures.",
      "Facilitated stakeholder workshops translating HR Operations requirements into Workday configuration updates supporting organization structure optimization initiatives.",
      "Improved HRIS data integrity by auditing position management and job classification structures using tenant-level validation reports reducing downstream reporting inconsistencies by 19%.",
    ],
  },
  {
    role: "Workday Functional Analyst",
    company: "Optum (UnitedHealth Group) | India",
    period: "Feb 2020 - Feb 2021",
    logo: "/Optum.jpeg",
    points: [
      "Supported Workday Financials configuration across General Ledger, AP/AR, and procurement workflows improving financial transaction traceability during ERP modernization rollout.",
      "Built EIB templates supporting large-scale financial data migration validation across legacy-to-Workday conversion activities ensuring audit-ready go-live datasets.",
      "Configured Core HCM and Benefits lifecycle workflows using Business Process Framework supporting employee onboarding and job change transactions across healthcare HR operations.",
      "Collaborated with Finance Operations stakeholders to validate bank reconciliation reporting structures improving settlement visibility across enterprise finance teams.",
      "Supported SIT and UAT execution cycles using ServiceNow defect tracking ensuring configuration readiness prior to production deployment.",
      "Strengthened Role-Based Security alignment across HR and Financial tenants through segregation-of-duties validation improving compliance readiness during implementation milestones.",
    ],
  },
];


const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative mb-12 pl-12 md:pl-0 ${i % 2 === 0
              ? "md:pr-12 md:mr-auto md:w-1/2"
              : "md:pl-12 md:ml-auto md:w-1/2"
              }`}
          >
            {/* Mobile node */}
            <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background md:hidden" />

            {/* Desktop node */}
            <div
              className={`hidden md:block absolute top-2 w-3 h-3 rounded-full bg-primary border-2 border-background ${i % 2 === 0 ? "right-[-6.5px]" : "left-[-6.5px]"
                }`}
            />

            <div className="glass-card rounded-2xl p-6">
              <span className="text-xs font-medium text-accent-foreground bg-accent/40 px-2.5 py-1 rounded-full">
                {exp.period}
              </span>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.points.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm">• {p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
