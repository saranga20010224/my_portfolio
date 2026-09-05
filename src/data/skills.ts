export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export interface FeaturedTech {
  name: string;
  category: string;
  iconName: string;
  highlight?: boolean;
  roleDescription: string;
}

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    id: "data-prog",
    category: "Data & Programming",
    subtitle: "Analytical scripting, statistical packages & relational databases",
    iconName: "FileCode2",
    skills: [
      "Python",
      "Pandas",
      "SQL",
      "SQL Server",
      "SPSS",
      "Minitab"
    ]
  },
  {
    id: "bi",
    category: "Business Intelligence",
    subtitle: "Enterprise reporting, KPI modeling & executive dashboards",
    iconName: "BarChart3",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Visualization",
      "KPI Reporting"
    ]
  },
  {
    id: "db-erp",
    category: "Database / ERP / Business Systems",
    subtitle: "Core enterprise platforms, relational engines & HRIS systems",
    iconName: "Building2",
    skills: [
      "SQL Server",
      "Oracle",
      "SAP",
      "PeopleHR / HRIS"
    ]
  },
  {
    id: "data-rep",
    category: "Data & Reporting",
    subtitle: "Spreadsheet modeling, ETL hygiene & automated workflows",
    iconName: "Sheet",
    skills: [
      "Microsoft Excel",
      "Pivot Tables",
      "Excel Formulas",
      "Data Cleaning",
      "Data Transformation",
      "Reporting Automation"
    ]
  },
  {
    id: "other",
    category: "Other Technologies",
    subtitle: "General productivity suites, foundational markup & styling",
    iconName: "Code2",
    skills: [
      "Microsoft Office",
      "HTML",
      "CSS"
    ]
  }
];

export const FEATURED_TECH_STACK: FeaturedTech[] = [
  {
    name: "Power BI",
    category: "Primary BI Suite",
    iconName: "BarChart3",
    highlight: true,
    roleDescription: "Primary tool for developing cross-departmental dashboards, DAX calculations & KPI reports."
  },
  {
    name: "SQL",
    category: "Database & Querying",
    iconName: "Database",
    roleDescription: "Data extraction, schema queries, aggregation, and relational table manipulation."
  },
  {
    name: "Python",
    category: "Data Science & Scripting",
    iconName: "FileCode2",
    roleDescription: "Exploratory data analysis, automated data wrangling, and analytics scripts."
  },
  {
    name: "Excel",
    category: "Spreadsheet & Modeling",
    iconName: "Sheet",
    roleDescription: "Operational data modeling, rapid ad-hoc reporting, formulas & pivot tables."
  },
  {
    name: "SAP",
    category: "Enterprise ERP",
    iconName: "Layers",
    roleDescription: "Enterprise procurement, manufacturing operational datasets, and inventory logs."
  },
  {
    name: "Oracle",
    category: "Enterprise Database / HR",
    iconName: "Server",
    roleDescription: "HR payroll records, employee data management, and enterprise reporting pipelines."
  },
  {
    name: "SPSS",
    category: "Statistical Package",
    iconName: "Binary",
    roleDescription: "ANOVA tests, Chi-Square independence analysis, and inferential statistical modeling."
  }
];
