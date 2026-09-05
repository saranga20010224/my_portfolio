export type ProjectFilterCategory =
  | "ALL"
  | "POWER BI"
  | "DATA ANALYTICS"
  | "BUSINESS ANALYSIS"
  | "OPERATIONS ANALYTICS"
  | "SQL / DATA";

export interface ProjectMetricPreview {
  label: string;
  value: string;
  type?: 'positive' | 'neutral' | 'highlight';
}

export interface CaseStudySections {
  problem: string;
  approach: string[];
  toolsAndTech: string[];
  analysis: string[];
  keyInsights: string; // "Project insights can be added here."
  businessValue: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterTags: ProjectFilterCategory[];
  tools: string[];
  description: string;
  githubUrl?: string;
  metrics: ProjectMetricPreview[];
  visualType: 'customer' | 'procurement' | 'supermarket' | 'apparel';
  abstractHighlights: string[];
  caseStudy: CaseStudySections;
  chartPreview: {
    chartType: 'bar' | 'donut' | 'line' | 'split';
    chartTitle: string;
    legend: string[];
    bars?: { label: string; height: number; color?: string }[];
    donutSegments?: { label: string; pct: number; color: string }[];
  };
}

export const PROJECT_CATEGORIES: ProjectFilterCategory[] = [
  "ALL",
  "POWER BI",
  "DATA ANALYTICS",
  "BUSINESS ANALYSIS",
  "OPERATIONS ANALYTICS",
  "SQL / DATA"
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "customer-shopping-behavior",
    title: "Customer Shopping Behavior Analytics Dashboard",
    subtitle: "End-to-End Customer Demographics, Revenue & Purchasing Patterns",
    category: "Data Analytics | Power BI",
    filterTags: ["ALL", "DATA ANALYTICS", "POWER BI", "BUSINESS ANALYSIS", "SQL / DATA"],
    tools: ["Python", "Pandas", "SQL Server", "Power BI", "Excel"],
    githubUrl: "https://github.com/saranga-rathnayaka",
    description:
      "A complete analytics workflow involving data cleaning, feature engineering, exploratory data analysis, SQL-based analysis, and Power BI dashboard development to analyze customer behavior, revenue, demographics, product performance, and subscription patterns.",
    metrics: [
      { label: "Data Pipeline", value: "Python + SQL", type: "highlight" },
      { label: "Key Dimensions", value: "Demographics & Revenue", type: "neutral" },
      { label: "Analysis Scope", value: "Purchase Trends", type: "positive" },
      { label: "Interface", value: "Power BI KPI Deck", type: "neutral" }
    ],
    visualType: "customer",
    abstractHighlights: [
      "Customer demographics & age brackets",
      "Revenue by category & product performance",
      "Subscription vs. non-subscription patterns",
      "Purchasing frequency & review ratings"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Revenue Analysis by Customer Segment & Category",
      legend: ["Demographics", "Frequency", "Revenue"],
      bars: [
        { label: "Apparel", height: 78, color: "bg-blue-600" },
        { label: "Footwear", height: 62, color: "bg-sky-500" },
        { label: "Accessories", height: 48, color: "bg-indigo-500" },
        { label: "Outerwear", height: 70, color: "bg-blue-500" },
        { label: "Cosmetics", height: 54, color: "bg-cyan-600" }
      ]
    },
    caseStudy: {
      problem:
        "Retail commercial and marketing teams lacked consolidated visibility into customer purchasing behaviors across age demographics, subscription adoption tiers, and seasonal product category preferences. The goal was to connect raw transaction databases to actionable marketing and retention strategies.",
      approach: [
        "Ingested and cleansed transaction records with Python & Pandas, treating missing values and normalizing attributes",
        "Engineered behavioral features such as frequency quartiles, subscription segments, and spending brackets",
        "Built optimized relational queries in Microsoft SQL Server to aggregate demographic revenue lines",
        "Constructed an interactive Power BI dashboard featuring dynamic slicers and DAX measure formulation"
      ],
      toolsAndTech: ["Python", "Pandas", "SQL Server", "Power BI", "Excel"],
      analysis: [
        "Exploratory Data Analysis (EDA) investigating customer age distribution and geographical clusters",
        "Comparative revenue evaluation between subscribed members and non-subscription shoppers",
        "Product category performance tracking against seasonal promotional campaigns",
        "Customer review rating distributions correlated with repeat purchase frequency"
      ],
      keyInsights: "Project insights can be added here.",
      businessValue:
        "Provided marketing and commercial leaders with transparent consumer behavior data, enabling data-driven customer segmentation, promotional timing alignment, and retention strategies."
    }
  },
  {
    id: "po-delay-analysis",
    title: "Purchase Order Creation Delay Analysis in Apparel Manufacturing Operations",
    subtitle: "Operations & Statistical Modeling on Procurement Timelines",
    category: "Business Analytics | Operations Analytics",
    filterTags: ["ALL", "BUSINESS ANALYSIS", "OPERATIONS ANALYTICS", "POWER BI"],
    tools: ["Power BI", "SPSS", "SAP", "Excel"],
    githubUrl: "https://github.com/saranga-rathnayaka",
    description:
      "An operational analytics project analyzing Purchase Order creation delays using SAP procurement data. The project identifies delay patterns across customers and plants and applies statistical techniques including ANOVA and Chi-Square analysis to investigate operational factors.",
    metrics: [
      { label: "Source Data", value: "SAP Procurement", type: "highlight" },
      { label: "Statistical Tests", value: "ANOVA & Chi-Square", type: "positive" },
      { label: "Environment", value: "SPSS + Power BI", type: "neutral" },
      { label: "Operational Focus", value: "Delay Patterns", type: "highlight" }
    ],
    visualType: "procurement",
    abstractHighlights: [
      "SAP procurement data extraction & transformation",
      "Lead time variance across manufacturing plants",
      "ANOVA testing for lead time discrepancies between customer accounts",
      "Chi-Square independence testing on delay factors"
    ],
    chartPreview: {
      chartType: "split",
      chartTitle: "PO Creation Delay Distribution Across Manufacturing Plants",
      legend: ["Delay Variance", "Plant Factor", "Significance"],
      bars: [
        { label: "Plant A", height: 42, color: "bg-emerald-600" },
        { label: "Plant B", height: 85, color: "bg-amber-500" },
        { label: "Plant C", height: 60, color: "bg-blue-600" },
        { label: "Plant D", height: 72, color: "bg-indigo-600" },
        { label: "Plant E", height: 35, color: "bg-teal-500" }
      ]
    },
    caseStudy: {
      problem:
        "In apparel manufacturing operations, recurring delays in Purchase Order creation create ripple effects across material delivery dates, cutting room schedules, and overall manufacturing lead times. Operations leadership needed statistical clarity on whether delays were tied to specific plants, customer accounts, or order classes.",
      approach: [
        "Extracted SAP ERP procurement records and timestamps across multi-plant production facilities",
        "Standardized and validated operational dataset timestamps and status flags in Excel",
        "Performed One-Way ANOVA tests in SPSS to test mean lead time differences across manufacturing plants",
        "Conducted Chi-Square tests of independence in SPSS to examine relationships between delay reasons and customer categories",
        "Developed a Power BI operational dashboard to visualize delay distributions and monitor plant procurement velocity"
      ],
      toolsAndTech: ["Power BI", "SPSS", "SAP", "Excel"],
      analysis: [
        "Identified statistically significant variations in PO creation duration across manufacturing plants via ANOVA",
        "Quantified the relationship between customer account tiers and procurement amendment requests using Chi-Square tests",
        "Mapped operational bottlenecks throughout approval cycles from initial request to official PO release",
        "Benchmarked plant-by-plant delay duration distributions against operational KPIs"
      ],
      keyInsights: "Project insights can be added here.",
      businessValue:
        "Combined statistical rigor with operational reality, providing plant managers and procurement teams with empirical evidence to streamline PO approvals, mitigate bottleneck facilities, and safeguard production schedules."
    }
  },
  {
    id: "supermarket-sales",
    title: "Supermarket Sales Dashboard",
    subtitle: "Retail Performance, DAX Measures & Temporal Sales Trends",
    category: "Business Intelligence | Power BI",
    filterTags: ["ALL", "POWER BI", "BUSINESS ANALYSIS", "DATA ANALYTICS"],
    tools: ["Power BI", "Power Query", "DAX", "Excel"],
    githubUrl: "https://github.com/saranga-rathnayaka",
    description:
      "Interactive supermarket sales dashboard analyzing sales, profit, customer behavior, branch performance, and business trends using Power BI, DAX, calculated columns, drill-through, segmentation, and dynamic filtering.",
    metrics: [
      { label: "Core Measures", value: "DAX Formulations", type: "highlight" },
      { label: "Granularity", value: "Hour, Day, Week, Month", type: "neutral" },
      { label: "Branch Tracking", value: "Multi-Branch KPIs", type: "positive" },
      { label: "Interactivity", value: "Drill-Through Views", type: "neutral" }
    ],
    visualType: "supermarket",
    abstractHighlights: [
      "Power Query data transformation & schema modeling",
      "DAX measures for Total Sales, Profit, Transactions, and Average Rating",
      "Temporal analysis: Sales Month, Sales Week, and Time of Day",
      "Branch-level performance comparison & customer segmentation"
    ],
    chartPreview: {
      chartType: "line",
      chartTitle: "Hourly & Weekly Sales Velocity vs. Gross Margin",
      legend: ["Hourly Sales", "Transactions", "Rating"],
      bars: [
        { label: "Morning", height: 35, color: "bg-sky-500" },
        { label: "Midday", height: 75, color: "bg-blue-600" },
        { label: "Afternoon", height: 60, color: "bg-indigo-500" },
        { label: "Evening", height: 90, color: "bg-navy-700" },
        { label: "Night", height: 45, color: "bg-slate-500" }
      ]
    },
    caseStudy: {
      problem:
        "Supermarket branch managers lacked unified visibility into hourly peak sales flows, branch profitability disparities, customer member versus regular shopper habits, and product line margins required for proactive inventory replenishment and staff scheduling.",
      approach: [
        "Ingested multi-branch point-of-sale transactional datasets via Power Query",
        "Cleaned and normalized transactional schemas, creating robust date tables and time-of-day bins",
        "Formulated key DAX measures for Total Sales, Total Profit, Gross Margin %, Transactions, and Average Rating",
        "Built intuitive drill-through pages enabling deep dives from high-level branch overviews to individual product categories"
      ],
      toolsAndTech: ["Power BI", "Power Query", "DAX", "Excel"],
      analysis: [
        "Time-of-day sales velocity modeling revealing distinct lunch and evening rush hour spikes",
        "Branch benchmarking comparing gross profit margins and transaction volume",
        "Customer segmentation evaluating purchasing preferences and loyalty member basket sizes",
        "Product line contribution to overall supermarket revenue and profit margins"
      ],
      keyInsights: "Project insights can be added here.",
      businessValue:
        "Equipped supermarket branch leaders with real-time operational visibility, facilitating optimal cashier shift allocation, perishable stock management, and promotion of high-margin items."
    }
  },
  {
    id: "apparel-sales-production",
    title: "Apparel Sales & Production Dashboard",
    subtitle: "Manufacturing Operational Efficiency, Lead Times & Profitability",
    category: "Business Intelligence | Operations Analytics",
    filterTags: ["ALL", "POWER BI", "OPERATIONS ANALYTICS", "BUSINESS ANALYSIS"],
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    githubUrl: "https://github.com/saranga-rathnayaka",
    description:
      "Dashboard analyzing sales and production performance including revenue, gross profit, order quantity, production efficiency, demand, lead time, plants, products, customers, and regions.",
    metrics: [
      { label: "Domain", value: "Apparel Manufacturing", type: "highlight" },
      { label: "Operational Metric", value: "Production Lead Time", type: "neutral" },
      { label: "Financial Scope", value: "Revenue & Gross Profit", type: "positive" },
      { label: "Plant Visibility", value: "Multi-Plant Efficiency", type: "neutral" }
    ],
    visualType: "apparel",
    abstractHighlights: [
      "Sales performance tracking against production volume",
      "Production efficiency and manufacturing lead time visibility",
      "Plant performance comparison and product trend breakdown",
      "Customer profitability and regional demand analysis"
    ],
    chartPreview: {
      chartType: "donut",
      chartTitle: "Plant Production Efficiency & Customer Demand Share",
      legend: ["Plant Output", "Lead Time Status", "Profit Share"],
      donutSegments: [
        { label: "Plant Alpha", pct: 38, color: "#2563EB" },
        { label: "Plant Beta", pct: 28, color: "#0284C7" },
        { label: "Plant Gamma", pct: 20, color: "#0D9488" },
        { label: "Plant Delta", pct: 14, color: "#64748B" }
      ]
    },
    caseStudy: {
      problem:
        "Disconnection between commercial sales orders and garment factory production lead times created delivery risks, potential air-freight penalties, and margin erosion. Management required a holistic operational BI platform to track factory efficiency alongside customer account profitability.",
      approach: [
        "Unified factory floor production output logs with commercial sales ledgers via Power Query",
        "Formulated DAX metrics for Gross Margin, Production Lead Time variance, On-Time Fulfillment, and Order Quantity",
        "Engineered an analytics data model linking plant lines, product styles, customer accounts, and shipment regions",
        "Designed executive and operational dashboard layouts adapted for cross-functional management reviews"
      ],
      toolsAndTech: ["Power BI", "DAX", "Power Query", "Excel"],
      analysis: [
        "Analysis of manufacturing lead times across style complexities and production lines",
        "Assessment of customer account profitability considering production overhead and fulfillment targets",
        "Tracking factory capacity utilization to detect bottleneck lines and production backlogs",
        "Evaluation of regional demand trends to assist quarterly manufacturing capacity planning"
      ],
      keyInsights: "Project insights can be added here.",
      businessValue:
        "Bridged commercial demand with factory floor execution, empowering operations leadership to protect margins, balance plant allocations, and improve on-time delivery performance."
    }
  }
];
