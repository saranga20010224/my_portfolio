export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  degreeType?: string;
  period: string;
  status: string;
  location: string;
  isDominant?: boolean;
  results?: { subject: string; grade: string }[];
  relevantAreas?: string[];
  description: string;
}

export const ACADEMIC_PIPELINE = [
  { step: "01", title: "Statistics", desc: "Probability, inference & mathematical rigor" },
  { step: "02", title: "Programming", desc: "Python, algorithmic thinking & scripting" },
  { step: "03", title: "Data", desc: "Relational databases, SQL & schema design" },
  { step: "04", title: "Analytics", desc: "Statistical modeling, EDA & hypothesis testing" },
  { step: "05", title: "Business Intelligence", desc: "Power BI dashboards & digital solutions in industry" }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "uoc",
    degree: "BSc in Industrial Statistics and Mathematical Finance",
    institution: "University of Colombo",
    degreeType: "Three-Year General Degree",
    period: "2023 – 2026",
    status: "Officially Graduated – 2026",
    location: "Colombo, Sri Lanka",
    isDominant: true,
    relevantAreas: [
      "Statistics",
      "Data Analytics",
      "Statistical Modeling",
      "Database Systems",
      "Data Visualization",
      "Financial Mathematics",
      "Web Development",
      "Programming"
    ],
    description:
      "A rigorous multidisciplinary three-year general degree synthesizing core statistical theory, applied mathematical finance, computational methods, database management systems, and practical data analytics."
  },
  {
    id: "ssc",
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "Sri Sumangala College, Kandy",
    period: "2021",
    status: "Completed",
    location: "Kandy, Sri Lanka",
    isDominant: false,
    results: [
      { subject: "Combined Mathematics", grade: "B" },
      { subject: "Physics", grade: "B" },
      { subject: "Chemistry", grade: "B" }
    ],
    description:
      "Strong secondary education in physical science and higher mathematics, establishing the quantitative and analytical foundation for university studies."
  }
];
