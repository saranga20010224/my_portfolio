export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  focusArea: string;
  deliverables: string[];
}

export const BUSINESS_ANALYTICS_PROCESS: ProcessStage[] = [
  {
    step: "01",
    title: "Business Problem",
    subtitle: "Identify the organizational challenge or bottleneck",
    description: "Frame the operational problem, departmental pain point, or reporting inefficiency needing resolution.",
    iconName: "AlertCircle",
    focusArea: "Context Framing",
    deliverables: ["Problem Statement", "Scope Definition", "Stakeholder Identification"]
  },
  {
    step: "02",
    title: "Understand Requirements",
    subtitle: "Elicit business & process monitoring requirements",
    description: "Engage with business departments to map workflows, clarify KPI definitions, and align expectations.",
    iconName: "Compass",
    focusArea: "Requirement Elicitation",
    deliverables: ["KPI Definitions", "Process Flow Diagrams", "Business Requirements Document"]
  },
  {
    step: "03",
    title: "Collect / Extract Data",
    subtitle: "Acquire relevant transactional & operational data",
    description: "Identify and extract raw records from enterprise sources including SAP, Oracle, SQL Server, and Excel.",
    iconName: "Database",
    focusArea: "Data Ingestion",
    deliverables: ["Data Sourcing", "Schema Mapping", "Extraction Queries"]
  },
  {
    step: "04",
    title: "Clean & Transform",
    subtitle: "Validate data quality & build relational models",
    description: "Handle missing entries, anomalies, and inconsistencies using Power Query, Python/Pandas, and SQL.",
    iconName: "Sliders",
    focusArea: "Data Hygiene & ETL",
    deliverables: ["Data Quality Checks", "Star-Schema Design", "Normalized Tables"]
  },
  {
    step: "05",
    title: "Analyze",
    subtitle: "Conduct statistical & exploratory data analysis",
    description: "Apply analytical techniques, trend investigations, and statistical tests (ANOVA, Chi-Square) to discover root causes.",
    iconName: "TrendingUp",
    focusArea: "Quantitative Rigor",
    deliverables: ["Exploratory Analysis (EDA)", "Statistical Inferences", "Variance Breakdown"]
  },
  {
    step: "06",
    title: "Build Dashboard / Solution",
    subtitle: "Develop Power BI dashboards & digital tools",
    description: "Formulate robust DAX measures, design intuitive user interfaces, and build targeted digital solutions.",
    iconName: "LayoutDashboard",
    focusArea: "Solution Engineering",
    deliverables: ["Interactive Power BI Reports", "DAX Calculations", "Digital Process Solutions"]
  },
  {
    step: "07",
    title: "Generate Insights",
    subtitle: "Extract clear, actionable operational narratives",
    description: "Translate complex visual metrics into concise, evidence-based business insights for leadership.",
    iconName: "Lightbulb",
    focusArea: "Insight Discovery",
    deliverables: ["Operational Diagnostics", "Performance Summaries", "Risk Flags"]
  },
  {
    step: "08",
    title: "Support Decision-Making",
    subtitle: "Facilitate informed strategic & operational decisions",
    description: "Empower departmental heads with reliable visibility to allocate resources and guide decisions with confidence.",
    iconName: "CheckCircle2",
    focusArea: "Executive Support",
    deliverables: ["Departmental Briefings", "KPI Reviews", "Actionable Recommendations"]
  },
  {
    step: "09",
    title: "Improve the Process",
    subtitle: "Drive measurable accuracy & efficiency gains",
    description: "Close the feedback loop by refining workflows, eliminating manual steps, and monitoring long-term gains.",
    iconName: "Zap",
    focusArea: "Continuous Improvement",
    deliverables: ["Process Optimization", "Efficiency Monitoring", "Automated Workflows"]
  }
];
