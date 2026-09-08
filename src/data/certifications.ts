export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  logo?: string; // Local image path or external URL for the logo
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
    logo: "./images/logos/linkedin.jpg",
    domain: "Business Analysis",
    iconName: "Compass",
    isHighlighted: true
  },
  {
    id: "power-platform-ba",
    title: "Power Platform in Business Analysis",
    issuer: "Microsoft / Coursera",
    logo: "./images/logos/microsoft.jpg",
    domain: "Digital Solutions & Power Platform",
    iconName: "Zap",
    isHighlighted: true
  },
  {
    id: "power-bi-101",
    title: "Power BI 101: Microsoft Power BI Essentials",
    issuer: "Udemy",
    logo: "./images/logos/udemy.jpg",
    domain: "Business Intelligence",
    iconName: "BarChart3",
    isHighlighted: true
  },
  {
    id: "sql-programming",
    title: "The Complete Introduction to SQL Programming",
    issuer: "Udemy",
    logo: "./images/logos/udemy.jpg",
    domain: "Data & Databases",
    iconName: "Database",
    isHighlighted: true
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    logo: "./images/logos/moratuwa.jpg",
    domain: "Programming",
    iconName: "FileCode2"
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    issuer: "Simplilearn",
    logo: "./images/logos/simplilearn.jpg",
    domain: "Data Analytics",
    iconName: "TrendingUp"
  },
  {
    id: "databases-sql-python",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    logo: "./images/logos/ibm.jpg",
    domain: "Data Science & Databases",
    iconName: "Server"
  }
];
