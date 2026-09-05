export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companySubtitle?: string;
  period: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship' | 'Trainee';
  location: string;
  mainFocus: string[];
  technologies: string[];
  responsibilities: string[];
  summary: string;
}

export interface CurrentRoleHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const CURRENT_ROLE_HIGHLIGHTS: CurrentRoleHighlight[] = [
  {
    id: "bi",
    title: "Business Intelligence",
    description: "Developing Power BI dashboards for Finance, Marketing, Production, and other departments.",
    iconName: "BarChart3",
    tag: "Finance • Marketing • Production"
  },
  {
    id: "monitoring",
    title: "Process Monitoring",
    description: "Creating dashboards that help departments track processes, KPIs, and operational performance.",
    iconName: "Activity",
    tag: "KPIs & Performance Visibility"
  },
  {
    id: "solutions",
    title: "Digital Solutions",
    description: "Developing digital solutions to improve accuracy and efficiency within production processes.",
    iconName: "Cpu",
    tag: "Production Process Accuracy"
  },
  {
    id: "analysis",
    title: "Business Analysis",
    description: "Understanding business requirements and translating them into practical analytical and digital solutions.",
    iconName: "CheckCircle2",
    tag: "Stakeholder Alignment"
  }
];

export const CURRENT_ROLE_PIPELINE = [
  { step: "01", title: "Business Requirement", desc: "Understanding pain points, KPI requirements & process objectives" },
  { step: "02", title: "Data", desc: "Gathering and consolidating data across departmental sources" },
  { step: "03", title: "Analysis", desc: "Modeling, transforming, and validating metrics for accuracy" },
  { step: "04", title: "Power BI / Digital Solution", desc: "Building intuitive visual interfaces and tailored digital tools" },
  { step: "05", title: "Insight", desc: "Delivering clear, actionable visibility into operations and trends" },
  { step: "06", title: "Process Improvement", desc: "Driving measurable operational efficiency and decision quality" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "escreen",
    role: "Trainee Business Analyst",
    company: "E-Screen Systems",
    companySubtitle: "E-Screen Systems (Pvt) Ltd • Textile Printing & Manufacturing Solutions Provider",
    period: "Present",
    isCurrent: true,
    type: "Trainee",
    location: "Nugegoda, Sri Lanka",
    mainFocus: [
      "Business Analysis",
      "Power BI",
      "Business Intelligence",
      "Process Monitoring",
      "Digital Solutions",
      "Production Process Improvement"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Business Analysis", "Process Mapping", "Excel"],
    summary:
      "Working on business intelligence, process monitoring, business analysis, and digital solutions across Finance, Marketing, Production, and operational departments.",
    responsibilities: [
      "Preparing and developing Power BI dashboards for Finance, Marketing, Production, and other departments.",
      "Developing dashboards to track departmental processes and KPIs.",
      "Working with different departments to understand their reporting and process-monitoring requirements.",
      "Transforming business data into useful visual insights.",
      "Supporting data-driven decision-making.",
      "Providing digital solutions to improve the accuracy of production processes.",
      "Identifying opportunities to improve existing processes through technology and data.",
      "Supporting process improvement and operational efficiency.",
      "Translating business requirements into practical dashboards and digital solutions."
    ]
  },
  {
    id: "ansell",
    role: "Data Analyst Intern",
    company: "Ansell",
    companySubtitle: "Ansell Textiles Lanka (Pvt) Ltd • Global leader in protection solutions",
    period: "Previous",
    isCurrent: false,
    type: "Internship",
    location: "Seeduwa, Sri Lanka",
    mainFocus: [
      "Power BI Dashboards",
      "HR Payroll Analytics",
      "Data Cleaning & Validation",
      "Enterprise Systems",
      "Reporting Automation"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Oracle", "PeopleHR HRIS", "Excel"],
    summary:
      "Delivered data analytics, data quality validation, and Power BI reporting within the HR Payroll function, utilizing Oracle and PeopleHR enterprise systems.",
    responsibilities: [
      "Developed and maintained Power BI dashboards and reports.",
      "Extracted, cleaned, and transformed data from multiple sources.",
      "Performed data validation and quality checks.",
      "Collaborated with HR Payroll to analyze workforce and payroll data.",
      "Worked with Oracle systems and PeopleHR HRIS for employee data management, payroll reporting, and workforce analytics."
    ]
  },
  {
    id: "hela",
    role: "Intern – Operations (Data Focus)",
    company: "Hela Clothing – Head Office",
    companySubtitle: "Leading multinational apparel manufacturer",
    period: "August 2025 – January 2026",
    isCurrent: false,
    type: "Internship",
    location: "Nugegoda, Sri Lanka",
    mainFocus: [
      "Operational KPIs",
      "Manufacturing Analytics",
      "Power BI Dashboards",
      "SAP Data Analysis",
      "Process Inefficiency Identification"
    ],
    technologies: ["Power BI", "SAP", "Excel", "Operational Analytics", "Process Tracking"],
    summary:
      "Analyzed manufacturing datasets and SAP-generated operations data to build operational KPI dashboards and support management decision-making.",
    responsibilities: [
      "Designed and deployed interactive Power BI dashboards to visualize operational KPIs.",
      "Generated production and quality reports using Excel.",
      "Analyzed manufacturing datasets to identify inefficiencies.",
      "Worked with SAP-generated data.",
      "Supported management decision-making through data-driven insights."
    ]
  }
];
