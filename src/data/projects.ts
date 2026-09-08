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
  imageUrl?: string;
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
    subtitle: "End to End Data Analytics Project using Python, SQL Server, and Power BI",
    category: "Data Analytics | Power BI",
    filterTags: ["ALL", "DATA ANALYTICS", "POWER BI", "BUSINESS ANALYSIS", "SQL / DATA"],
    tools: ["Python (Pandas)", "SQL Server", "Power BI", "SQL", "Jupyter Notebook", "Excel"],
    githubUrl: "https://github.com/saranga20010224/Customer-Shopping-Behavior-Analysis",
    imageUrl: "/images/projects/customer-shopping-behavior-dashboard.png",
    description:
      "An end-to-end Data Analytics project demonstrating a complete analytics pipeline from raw CSV data to Python data cleaning & EDA, SQL Server database querying, and an interactive Power BI dashboard. Analyzes customer purchasing patterns, revenue drivers, demographic distributions, product category performance, and subscription adoption.",
    metrics: [
      { label: "Total Revenue", value: "$59K", type: "highlight" },
      { label: "Customer Base", value: "971 Shoppers", type: "neutral" },
      { label: "Top Category", value: "Clothing ($27K)", type: "positive" },
      { label: "Data Pipeline", value: "Python → SQL → Power BI", type: "highlight" }
    ],
    visualType: "customer",
    abstractHighlights: [
      "Raw CSV data cleaning & feature engineering with Python (Pandas)",
      "Relational database creation & analytical querying in SQL Server",
      "Interactive Power BI dashboard with dynamic slicers & KPIs",
      "Customer demographic, subscription & category revenue insights"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Revenue Contribution by Product Category",
      legend: ["Clothing", "Accessories", "Footwear", "Outerwear"],
      bars: [
        { label: "Clothing", height: 85, color: "bg-blue-600" },
        { label: "Accessories", height: 56, color: "bg-sky-500" },
        { label: "Footwear", height: 26, color: "bg-indigo-500" },
        { label: "Outerwear", height: 16, color: "bg-cyan-600" }
      ]
    },
    caseStudy: {
      problem:
        "Retail organizations require clear, data-driven visibility into customer shopping behavior to optimize sales, marketing, and inventory strategies. The business objective was to analyze raw customer transaction records to identify top revenue-generating categories, understand customer demographics and age segments, evaluate the relationship between subscriptions and customer purchasing habits, and measure customer satisfaction through review ratings.",
      approach: [
        "Data Preparation in Python: Handled missing values in review ratings, standardized column names, removed redundant fields, checked data quality issues, and performed exploratory data analysis (EDA) using Pandas",
        "Feature Engineering: Created customer age groups (Young Adult, Adult, Middle-aged, Senior), converted purchase frequency into numerical values, and derived additional analytical variables",
        "Database Development in SQL Server: Created the customer_behavior database, imported cleaned data into the customer table, and wrote business-focused SQL queries to aggregate and analyze data",
        "Business Intelligence in Power BI: Developed an interactive dashboard featuring dynamic slicers (Season, Category, Gender, Shipping Type), KPI cards, category revenue breakdowns, demographic distributions, and subscription status"
      ],
      toolsAndTech: ["Python (Pandas)", "Jupyter Notebook", "Microsoft SQL Server", "SQL", "Power BI", "Excel"],
      analysis: [
        "Revenue analysis by product category, establishing Clothing ($27K) and Accessories ($18K) as the primary revenue drivers",
        "Gender-based revenue distribution showing male shoppers contributed the majority of sales revenue (68.67% / $40K)",
        "Customer age segmentation identifying Young Adult (267) and Adult (245) as the dominant demographic cohorts",
        "SQL-based customer segmentation categorizing shoppers into New, Returning, and Loyal tiers based on previous purchase frequency",
        "Subscription pattern evaluation revealing 73.84% (717) non-subscribers versus 26.16% (254) subscribers, identifying a key retention target",
        "Average purchase value analysis across shipping types and product review rating consistency tracking across categories (3.7 - 3.8 avg rating)"
      ],
      keyInsights:
        "Clothing generated the highest revenue contribution ($27K), followed by Accessories ($18K). Male customers contributed 68.67% ($40K) of total revenue, with most shoppers in the Young Adult and Adult segments. Non-subscribers represented 73.84% of customers, highlighting an opportunity for loyalty conversion. Customer product ratings remained consistent across all categories (3.7 - 3.8 out of 5).",
      businessValue:
        "Equipped retail decision-makers with transparent, interactive visibility into customer purchasing drivers, demographic preferences, and subscription trends—enabling targeted promotional strategies, improved product assortment planning, and data-driven customer loyalty initiatives."
    }
  },
  {
    id: "po-delay-analysis",
    title: "Purchase Order Creation Delay Analysis in Apparel Manufacturing Operations",
    subtitle: "Operations & Statistical Modeling on Procurement Timelines",
    category: "Business Analytics | Operations Analytics",
    filterTags: ["ALL", "BUSINESS ANALYSIS", "OPERATIONS ANALYTICS", "POWER BI"],
    tools: ["Power BI", "SPSS", "SAP", "Excel"],
    imageUrl: "/images/projects/po-delay-analysis.png",
    githubUrl: "https://github.com/saranga20010224/FS-3001---Internship-Research-Project",
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
    githubUrl: "https://github.com/saranga20010224/Supermarket-Sales-Dashboard",
    imageUrl: "/images/projects/supermarket-sales-dashboard.png",
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
    githubUrl: "https://github.com/saranga20010224/Apparel-Sales-Production-Dashboard",
    imageUrl: "/images/projects/apparel-sales-production.png",
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
  },
  {
    id: "student-management-app",
    title: "Student Management Application",
    subtitle: "Java-based Database Application",
    category: "Software Development | Database",
    filterTags: ["ALL", "SQL / DATA"],
    tools: ["Java", "MySQL", "JDBC"],
    githubUrl: "https://github.com/saranga20010224/Student-Data-Base-App--Mini-project",
    imageUrl: "/images/projects/student-management-app.jpg",
    description: "A robust Java-based Student Management Application seamlessly connected to a MySQL database. Demonstrates core database-driven application development, employing JDBC to efficiently manage, retrieve, and update student records in a structured environment.",
    metrics: [
      { label: "Architecture", value: "Client-Server", type: "highlight" },
      { label: "Backend", value: "MySQL Database", type: "positive" },
      { label: "Connectivity", value: "JDBC API", type: "neutral" },
      { label: "Core Feature", value: "CRUD Operations", type: "highlight" }
    ],
    visualType: "customer",
    abstractHighlights: [
      "Database-driven application development using Java",
      "Seamless integration with MySQL via JDBC",
      "Efficient student records management",
      "Structured database schema and queries"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Database Application Overview",
      legend: ["Setup", "Queries", "UI"],
      bars: [
        { label: "Setup", height: 60, color: "bg-blue-600" },
        { label: "Queries", height: 85, color: "bg-sky-500" },
        { label: "UI", height: 45, color: "bg-indigo-500" }
      ]
    },
    caseStudy: {
      problem: "Educational institutions require reliable and efficient systems to manage student records without relying on manual, error-prone paper-based methods.",
      approach: [
        "Designed a relational database schema in MySQL to store student details securely",
        "Developed a Java application to serve as the front-end interface for users",
        "Implemented the JDBC API to establish a reliable connection between the Java application and the MySQL database",
        "Created SQL queries to handle CRUD (Create, Read, Update, Delete) operations seamlessly"
      ],
      toolsAndTech: ["Java", "MySQL", "JDBC", "SQL"],
      analysis: [
        "Structured data storage ensuring data integrity and fast retrieval",
        "Robust error handling for database connection and query execution",
        "Optimized query performance for managing large sets of student data"
      ],
      keyInsights: "Implementing a structured database application significantly reduces administrative overhead and ensures accurate, centralized record keeping.",
      businessValue: "Provides a scalable, reliable, and user-friendly system for institutions to manage student information, demonstrating strong foundational skills in full-stack Java and database development."
    }
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    subtitle: "Command-Line Python Application",
    category: "Software Development",
    filterTags: ["ALL"],
    tools: ["Python"],
    githubUrl: "https://github.com/saranga20010224/Simple-Calculator",
    imageUrl: "/images/projects/simple-calculator.jpg",
    description: "A lightweight, command-line calculator built in Python supporting arithmetic operations including addition, subtraction, multiplication, division, power, and remainder. Features robust input validation, graceful error handling for division by zero, and interactive session resets.",
    metrics: [
      { label: "Environment", value: "Command-Line", type: "highlight" },
      { label: "Language", value: "Python", type: "positive" },
      { label: "Operations", value: "6 Types", type: "neutral" },
      { label: "Design", value: "Interactive Loop", type: "highlight" }
    ],
    visualType: "customer",
    abstractHighlights: [
      "Interactive command-line interface with session management",
      "Arithmetic, power, and modulo operations",
      "Robust input validation and error handling",
      "Graceful exception handling for zero division"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Application Logic Overview",
      legend: ["Validation", "Calculation", "I/O"],
      bars: [
        { label: "Valid", height: 80, color: "bg-blue-600" },
        { label: "Calc", height: 95, color: "bg-emerald-500" },
        { label: "I/O", height: 60, color: "bg-slate-500" }
      ]
    },
    caseStudy: {
      problem: "Beginner programming concepts like functions, loops, and input handling require practical, interactive applications to solidify understanding and demonstrate foundational software engineering principles.",
      approach: [
        "Developed an interactive Python script utilizing a continuous while loop for sustained user sessions",
        "Implemented robust conditional logic to route user input to appropriate arithmetic functions",
        "Engineered input validation to gracefully catch and handle non-numeric inputs and mathematical errors",
        "Integrated custom commands ('#' to terminate, '$' to reset) for enhanced user control over the application state"
      ],
      toolsAndTech: ["Python"],
      analysis: [
        "Evaluation of edge cases in arithmetic operations, specifically ensuring stability during division by zero",
        "Analysis of user input sanitization to prevent application crashes from invalid data types",
        "Optimization of the command loop for seamless transitions between multiple sequential calculations"
      ],
      keyInsights: "Implementing a simple utility application highlights the critical importance of defensive programming, particularly user input validation and exception handling.",
      businessValue: "Demonstrates strong foundational programming skills in Python, including control flow, functional decomposition, and error handling—key competencies for robust software development."
    }
  },
  {
    id: "apparel-operations-dashboard",
    title: "Operations Dashboard for Apparel Manufacturing",
    subtitle: "Sales and Purchase Order Risk Overview",
    category: "Business Intelligence | Operations Analytics",
    filterTags: ["ALL", "POWER BI", "OPERATIONS ANALYTICS", "BUSINESS ANALYSIS"],
    tools: ["Power BI", "SAP", "Excel", "DAX"],
    githubUrl: "https://github.com/saranga20010224/Operations-Dashboard-for-Apparel-Manufacturing-",
    imageUrl: "/images/projects/apparel-operations-dashboard.png",
    description: "A Power BI dashboard that tracks sales order and purchase order risk indicators for production and delivery planning. It analyzes SAP data to identify line items that are pending, overdue, or blocked due to raw material shortages, overdue cut dates, or delayed production.",
    metrics: [
      { label: "Data Source", value: "SAP", type: "highlight" },
      { label: "Core Analysis", value: "Order Risk KPIs", type: "positive" },
      { label: "Tracking", value: "PO Aging & PCD", type: "neutral" },
      { label: "Tech Stack", value: "Power BI & Excel", type: "highlight" }
    ],
    visualType: "procurement",
    abstractHighlights: [
      "Extracted SAP ERP procurement records and timestamps",
      "Created DAX measures to track overdue Planned Cut Dates (PCD) and production completion",
      "Tracked raw material shortages and fabric-in-housed status",
      "Mapped past-due Purchase Orders by week for proactive follow-up"
    ],
    chartPreview: {
      chartType: "split",
      chartTitle: "Production Risk KPI Distribution",
      legend: ["Overdue PCD", "Fabric Pending", "Production Pending"],
      bars: [
        { label: "Cut Delay", height: 65, color: "bg-red-500" },
        { label: "Fabric", height: 40, color: "bg-orange-500" },
        { label: "Prod", height: 85, color: "bg-amber-500" }
      ]
    },
    caseStudy: {
      problem: "Supply chain, planning, and production teams in apparel manufacturing lack visibility into sales and purchase orders that are at risk of delay. Delays due to missing raw materials, incomplete production, or overdue planned cut dates require proactive identification.",
      approach: [
        "Extracted raw data from SAP and restructured it in Excel for optimal modeling",
        "Imported cleaned data into Power BI Desktop and developed a robust data model",
        "Formulated key DAX measures to calculate PCD Pending, Fabric Status, Production Completion, and RM Shortages",
        "Designed interactive dashboard pages including high-level summaries and detailed drill-downs for specific risk factors"
      ],
      toolsAndTech: ["Power BI", "Microsoft Excel", "SAP", "DAX"],
      analysis: [
        "Identified sales order line items where cutting has not started by the Planned Cut Date (PCD)",
        "Tracked line items delayed due to pending fabric or raw material inventory",
        "Analyzed and mapped past-due purchase orders against their relevant week for aging analysis"
      ],
      keyInsights: "Providing a unified view of production bottlenecks allows procurement and planning teams to proactively address material shortages and overdue tasks before they impact final delivery dates.",
      businessValue: "Empowers cross-functional manufacturing teams with critical risk indicators, facilitating proactive problem-solving, protecting delivery schedules, and improving overall supply chain reliability."
    }
  },
  {
    id: "apparel-sales-profitability-dashboard",
    title: "Apparel Sales & Profitability Dashboard",
    subtitle: "Manufacturing Sales & Margin Analytics",
    category: "Business Intelligence | Power BI",
    filterTags: ["ALL", "POWER BI", "BUSINESS ANALYSIS", "DATA ANALYTICS"],
    tools: ["Power BI", "Power Query", "SAP", "Excel", "DAX"],
    githubUrl: "https://github.com/saranga20010224/Apparel-Sales-Profitability-Dashboard",
    imageUrl: "/images/projects/apparel-sales-profitability-dashboard.png",
    description: "An interactive Power BI dashboard analyzing apparel manufacturing sales, profitability, and production efficiency. It processes SAP-extracted data to track FOB value, Net Profit, and Earnings Per Minute (EPM), providing actionable insights into customer concentration and product margins.",
    metrics: [
      { label: "Data Source", value: "SAP", type: "highlight" },
      { label: "Core Metric", value: "Earnings Per Min", type: "positive" },
      { label: "Scope", value: "Sales & Margins", type: "neutral" },
      { label: "Tech Stack", value: "Power BI & Excel", type: "highlight" }
    ],
    visualType: "apparel",
    abstractHighlights: [
      "Extracted and standardized raw SAP sales order data via Excel and Power Query",
      "Formulated DAX measures for Total FOB, Net Profit (NP), and Earnings Per Minute (EPM)",
      "Analyzed customer concentration risk and business-unit revenue distribution",
      "Monitored on-time delivery (SHIP%) and efficiency per order line"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Sales & Profitability Breakdown",
      legend: ["Intimates", "Menswear", "Kids"],
      bars: [
        { label: "Intimates", height: 90, color: "bg-blue-600" },
        { label: "Menswear", height: 75, color: "bg-sky-500" },
        { label: "Kids", height: 30, color: "bg-indigo-500" }
      ]
    },
    caseStudy: {
      problem: "Apparel manufacturing teams lack unified visibility into the profitability of specific customer accounts, product lines, and production runs. Costing, production, and sales data are siloed, making it difficult to evaluate margins or identify high-value programs before scaling production.",
      approach: [
        "Ingested and cleaned SAP sales order and costing data using Microsoft Excel and Power Query",
        "Developed a robust Power BI data model integrating product, customer, logistics, and costing fields",
        "Created custom DAX calculations to evaluate key industry metrics such as Earnings Per Minute (EPM) and Net Profit/FOB ratios",
        "Designed an interactive dashboard with dynamic slicers for Brand, SBU, Gender, Season, and Program Type"
      ],
      toolsAndTech: ["Power BI", "Power Query", "SAP", "Excel", "DAX"],
      analysis: [
        "Identified business-unit revenue drivers, revealing Intimates as the highest FOB contributor despite lower unit volumes",
        "Highlighted customer concentration risks where a single account represented ~43% of total FOB value",
        "Evaluated margin visibility at the line level, spotting thin-margin styles and customers early in the cycle",
        "Benchmarked on-time delivery (SHIP%) by customer and plant to improve supply chain reliability"
      ],
      keyInsights: "Connecting factory-floor efficiency (Sewing SMV) directly to commercial sales data (FOB/Net Profit) empowers teams to calculate true Earnings Per Minute, driving highly targeted and profitable production planning.",
      businessValue: "Transforms raw transactional SAP data into a strategic asset, enabling merchandising, finance, and production leadership to protect margins, optimize capacity allocation, and diversify customer portfolios."
    }
  },
  {
    id: "talent-development-training-dashboard",
    title: "Talent Development & Training Dashboard",
    subtitle: "HR & Learning Development Analytics",
    category: "Business Intelligence | HR Analytics",
    filterTags: ["ALL", "POWER BI", "BUSINESS ANALYSIS", "DATA ANALYTICS"],
    tools: ["Power BI", "Power Query", "SharePoint", "Excel", "DAX"],
    githubUrl: "https://github.com/saranga20010224/Talent-Development-Training-Dashboard",
    imageUrl: "/images/projects/talent-development-dashboard.png",
    description: "An interactive Power BI dashboard tracking corporate learning and development (L&D) initiatives. It analyzes employee training attendance, session delivery against planned schedules, and actual training costs across departments and competencies using a live SharePoint dataset.",
    metrics: [
      { label: "Data Source", value: "SharePoint", type: "highlight" },
      { label: "Employees", value: "4,400+", type: "positive" },
      { label: "Scope", value: "L&D Metrics", type: "neutral" },
      { label: "Tech Stack", value: "Power BI & DAX", type: "highlight" }
    ],
    visualType: "procurement",
    abstractHighlights: [
      "Connected directly to a shared SharePoint Excel workbook via Power Query",
      "Merged Attendance and Session data for unified row-level training context",
      "Created 30+ guarded DAX measures for calculating attendance rates and training costs",
      "Implemented conditional formatting for KPIs driven directly by DAX color logic"
    ],
    chartPreview: {
      chartType: "bar",
      chartTitle: "Training Program Execution",
      legend: ["Planned", "Completed", "Attendance"],
      bars: [
        { label: "Plan", height: 95, color: "bg-blue-600" },
        { label: "Done", height: 75, color: "bg-sky-500" },
        { label: "Attend", height: 98, color: "bg-emerald-500" }
      ]
    },
    caseStudy: {
      problem: "HR and Learning & Development teams struggle to measure the effectiveness, attendance, and cost of their corporate training programs. Tracking planned sessions versus actual execution across thousands of employees and departments requires an automated, live reporting solution.",
      approach: [
        "Connected Power BI to a collaboratively maintained Excel workbook hosted on SharePoint",
        "Transformed and joined employee, attendance, and session data using Power Query",
        "Developed a robust snowflake schema with bi-directional relationships for precise filtering",
        "Engineered over 30 custom DAX measures, including dynamic KPI color formatting and guarded calculations"
      ],
      toolsAndTech: ["Power BI", "Power Query", "SharePoint", "Excel", "DAX"],
      analysis: [
        "Tracked a large-scale L&D operation comprising 4,400+ employees and 34,000+ attendance records",
        "Evaluated training delivery mix, showing 81% of programs were sourced and delivered internally",
        "Monitored departmental compliance with mandatory training and logged ~98% overall attendance rates",
        "Analyzed actual training costs (LKR) at the session level to calculate cost-per-department and employee"
      ],
      keyInsights: "Replacing manual file distribution with a live SharePoint connection ensures HR Business Partners and Finance teams always analyze a single source of truth for workforce capability reviews and budget tracking.",
      businessValue: "Transforms administrative HR data into strategic talent development insights, empowering leadership to monitor L&D investments, track skill-building compliance, and optimize the annual training calendar."
    }
  }
];
