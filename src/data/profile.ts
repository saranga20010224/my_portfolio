export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SnapshotItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  iconName: string;
  highlight?: boolean;
}

export interface CompetencyCard {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface AboutPillar {
  title: string;
  iconName: string;
  description: string;
  points: string[];
}

export const PROFILE_DATA = {
  name: "Saranga Rathnayaka",
  roleTitle: "Business Analyst | Data Analyst",
  tagline: "Turning Business Problems Into Data-Driven Solutions.",
  currentRoleBadge: "Currently: Trainee Business Analyst @ E Screen Systems",
  summary:
    "I am a data-driven analytics professional with a background in Industrial Statistics and Mathematical Finance, passionate about transforming data into actionable insights, interactive dashboards, and practical digital solutions that improve business processes and decision-making.",
  currentRoleHeroLine:
    "Currently working as a Trainee Business Analyst at E Screen Systems, developing Power BI dashboards and digital solutions across Finance, Marketing, Production, and other business functions.",

  aboutMe: {
    heading: "About Me",
    subheading: "Building Solutions, Driving Operational Impact",
    pillars: [
      {
        title: "Business Analysis",
        iconName: "Compass",
        description: "Translating complex operational needs into practical analytical and digital solutions.",
        points: [
          "Understanding business requirements",
          "Process analysis & workflow mapping",
          "Requirement-to-solution thinking",
          "Identifying opportunities for process improvement",
          "Translating business needs into practical solutions"
        ]
      },
      {
        title: "Data Analytics",
        iconName: "LineChart",
        description: "Extracting, modeling, and validating data to uncover hidden patterns and operational drivers.",
        points: [
          "Data cleaning and transformation",
          "Exploratory Data Analysis (EDA)",
          "Statistical analysis & hypothesis testing",
          "KPI analysis & performance benchmarks",
          "Data-driven decision support"
        ]
      },
      {
        title: "Business Intelligence",
        iconName: "LayoutDashboard",
        description: "Designing end-to-end interactive Power BI reporting ecosystems for multi-departmental visibility.",
        points: [
          "Power BI dashboards & KPI decks",
          "Interactive reporting & drill-throughs",
          "Data visualization & storytelling",
          "DAX measures & calculated tables",
          "Power Query ETL & data modeling",
          "Automated reporting workflows"
        ]
      }
    ] as AboutPillar[],
    myJourney: {
      title: "About My Journey",
      paragraphs: [
        "I’m Saranga Rathnayaka, an analytics professional who graduated with a BSc in Industrial Statistics and Mathematical Finance from the University of Colombo. My quantitative education provides a rigorous foundation in probability, statistical modeling, database systems, and computational analytics.",
        "My professional journey encompasses data analytics and payroll reporting at Ansell Textiles Lanka, operations-focused manufacturing analytics at Hela Clothing, and my current role as a Trainee Business Analyst at E Screen Systems. Across these roles, I combine business acumen, statistical rigor, and modern BI tools to turn raw organizational data into continuous process improvements."
      ]
    }
  },

  brandStatement: {
    quote: "I bridge the gap between business requirements, data, and technology.",
    supportingText:
      "By combining statistical thinking, business analysis, data visualization, and digital solutions, I aim to turn complex business problems into clear insights and practical improvements.",
    pillars: [
      { label: "Business Analysis", desc: "Understanding requirements, workflows & strategic objectives" },
      { label: "Data Analytics", desc: "Transforming raw data into validated, statistical insights" },
      { label: "Business Intelligence", desc: "Power BI dashboards, DAX modeling & executive visibility" },
      { label: "Process Improvement", desc: "Deploying digital solutions to enhance operational accuracy" }
    ]
  },

  contact: {
    email: "sarangaisr23@gmail.com",
    phone: "+94 76 430 56 80",
    location: "Sri Lanka",
    linkedIn: "https://linkedin.com/in/saranga-rathnayaka",
    gitHub: "https://github.com/saranga-rathnayaka",
    resumePath: "/resume/Saranga_Rathnayaka_CV.pdf"
  },

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saranga-rathnayaka",
      icon: "Linkedin",
      ariaLabel: "Visit Saranga Rathnayaka's LinkedIn Profile"
    },
    {
      name: "GitHub",
      url: "https://github.com/saranga-rathnayaka",
      icon: "Github",
      ariaLabel: "Visit Saranga Rathnayaka's GitHub Profile"
    },
    {
      name: "Email",
      url: "mailto:sarangaisr23@gmail.com",
      icon: "Mail",
      ariaLabel: "Send an email to Saranga Rathnayaka"
    }
  ] as SocialLink[],

  snapshot: [
    {
      id: "current-role",
      label: "Current Role",
      value: "Trainee Business Analyst",
      subValue: "E Screen Systems",
      iconName: "Briefcase",
      highlight: true
    },
    {
      id: "core-focus",
      label: "Core Focus",
      value: "Business & Data Analytics",
      subValue: "Process monitoring & digital solutions",
      iconName: "TrendingUp"
    },
    {
      id: "bi-expertise",
      label: "BI Expertise",
      value: "Power BI",
      subValue: "Power Query, DAX & KPI Reporting",
      iconName: "BarChart3"
    },
    {
      id: "academic-background",
      label: "Academic Background",
      value: "Graduate | Industrial Statistics & Math Finance",
      subValue: "BSc — University of Colombo (2023 – 2026)",
      iconName: "GraduationCap"
    }
  ] as SnapshotItem[],

  coreCompetencies: [
    {
      id: "comp-ba",
      title: "Business Analysis",
      iconName: "Compass",
      skills: [
        "Requirements Understanding",
        "Process Analysis",
        "Business Requirement Translation",
        "Process Improvement",
        "Solution Identification"
      ]
    },
    {
      id: "comp-da",
      title: "Data Analytics",
      iconName: "LineChart",
      skills: [
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "KPI Analysis",
        "Business Insights"
      ]
    },
    {
      id: "comp-bi",
      title: "Business Intelligence",
      iconName: "BarChart3",
      skills: [
        "Power BI",
        "DAX",
        "Power Query",
        "Dashboard Development",
        "Reporting Automation"
      ]
    },
    {
      id: "comp-dv",
      title: "Data Visualization",
      iconName: "LayoutDashboard",
      skills: [
        "Interactive Dashboards",
        "KPI Reporting",
        "Data Storytelling",
        "Management Reporting"
      ]
    },
    {
      id: "comp-ds",
      title: "Digital Solutions",
      iconName: "Zap",
      skills: [
        "Process Digitization",
        "Workflow Improvement",
        "Digital Reporting Solutions",
        "Accuracy & Efficiency Improvement"
      ]
    },
    {
      id: "comp-erp",
      title: "ERP & Business Systems",
      iconName: "Layers",
      skills: [
        "SAP",
        "Oracle",
        "PeopleHR / HRIS",
        "Business Data Extraction"
      ]
    }
  ] as CompetencyCard[]
};
