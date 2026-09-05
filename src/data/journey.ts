export interface JourneyStep {
  year: string;
  title: string;
  subtitle: string;
  category: "Academic" | "Experience" | "Current";
  isCurrent?: boolean;
  description: string;
  iconName: string;
  tags: string[];
}

export const CAREER_JOURNEY: JourneyStep[] = [
  {
    year: "2021",
    title: "G.C.E. Advanced Level",
    subtitle: "Physical Science Stream — Sri Sumangala College, Kandy",
    category: "Academic",
    description: "Completed A/Ls in Physical Science (Combined Mathematics — B, Physics — B, Chemistry — B), providing a strong quantitative and analytical foundation.",
    iconName: "BookOpen",
    tags: ["Physical Science", "Combined Mathematics", "Analytical Foundations"]
  },
  {
    year: "2022 – 2026",
    title: "BSc in Industrial Statistics and Mathematical Finance",
    subtitle: "University of Colombo (Officially Graduated – 2026)",
    category: "Academic",
    description: "Officially graduated with a multidisciplinary honors degree integrating core statistics, mathematical finance, database systems, Python programming, and data analytics.",
    iconName: "GraduationCap",
    tags: ["Statistics", "Mathematical Finance", "SQL & Databases", "Python"]
  },
  {
    year: "2025",
    title: "Intern – Operations (Data Focus)",
    subtitle: "Hela Clothing (Pvt) Ltd (August 2025 – January 2026)",
    category: "Experience",
    description: "Designed and deployed interactive Power BI dashboards for operational KPIs, analyzed manufacturing datasets, and worked with SAP-generated operational records.",
    iconName: "Activity",
    tags: ["Operations Analytics", "Power BI", "SAP", "Manufacturing KPIs"]
  },
  {
    year: "2026",
    title: "Data Analyst Intern",
    subtitle: "Ansell Textiles Lanka (Pvt) Ltd",
    category: "Experience",
    description: "Extracted, cleaned, and validated enterprise data; developed Power BI dashboards; and analyzed workforce and payroll records with Oracle systems and PeopleHR HRIS.",
    iconName: "BarChart3",
    tags: ["HR Analytics", "Oracle", "PeopleHR HRIS", "Power BI Dashboards"]
  },
  {
    year: "Current",
    title: "Trainee Business Analyst",
    subtitle: "E Screen Systems",
    category: "Current",
    isCurrent: true,
    description: "Developing Power BI dashboards across Finance, Marketing, and Production; tracking departmental KPIs; understanding business requirements; and delivering digital solutions to improve production process accuracy.",
    iconName: "Briefcase",
    tags: ["Business Analysis", "Power BI", "Digital Solutions", "Process Improvement"]
  }
];
