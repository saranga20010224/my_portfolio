export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  domain: string;
  iconName: string;
  verificationUrl?: string; // Ready for links to be added later
  isHighlighted?: boolean;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "ba-foundations",
    title: "Business Analysis Foundations",
    issuer: "LinkedIn Learning",
    domain: "Business Analysis",
    iconName: "Compass",
    isHighlighted: true
  },
  {
    id: "power-platform-ba",
    title: "Power Platform in Business Analysis",
    issuer: "Microsoft / Coursera",
    domain: "Digital Solutions & Power Platform",
    iconName: "Zap",
    isHighlighted: true
  },
  {
    id: "power-bi-101",
    title: "Power BI 101: Microsoft Power BI Essentials",
    issuer: "Udemy",
    domain: "Business Intelligence",
    iconName: "BarChart3",
    isHighlighted: true
  },
  {
    id: "sql-programming",
    title: "The Complete Introduction to SQL Programming",
    issuer: "Udemy",
    domain: "Data & Databases",
    iconName: "Database",
    isHighlighted: true
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    domain: "Programming",
    iconName: "FileCode2"
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    issuer: "Simplilearn",
    domain: "Data Analytics",
    iconName: "TrendingUp"
  },
  {
    id: "databases-sql-python",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    domain: "Data Science & Databases",
    iconName: "Server"
  }
];
