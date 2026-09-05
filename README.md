# Saranga Rathnayaka — Professional Analytics Portfolio Website

A personal portfolio website engineered for **Saranga Rathnayaka**, positioned as:
> **Business Analyst | Data Analyst | Business Intelligence**
> *"Turning Business Problems Into Data-Driven Solutions."*

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Key Features

- **Recruiter 5-Second Scan**: Clear identity above the fold with current role badge (*Trainee Business Analyst @ E Screen Systems*), academic honors (*BSc. Industrial Statistics & Mathematical Finance, University of Colombo*), core skills, and quick CV access.
- **Strict Content Fidelity**: Accurate employment timeline with E Screen Systems highlighted prominently as Current, and Ansell Textiles Lanka and Hela Clothing accurately designated as Previous. Zero fabricated metrics or clients.
- **Interactive Abstract BI Dashboard Visual**: Custom glassmorphic analytics environment showcasing live KPI metrics, operational variance trends, and the 5-stage transformation framework (`Data → Analysis → Insight → Business Decision → Process Improvement`).
- **Deep-Dive Featured Case Studies**:
  1. *Customer Shopping Behavior Analytics Dashboard* (Python | Pandas | SQL Server | Power BI | Excel)
  2. *Purchase Order Creation Delay Analysis in Apparel Manufacturing* (Power BI | SPSS | SAP | Excel)
  3. *Supermarket Sales Dashboard* (Power BI | Power Query | DAX | Excel)
  4. *Apparel Sales & Production Dashboard* (Power BI | DAX | Power Query | Excel)
- **Dynamic Category Filtering**: Seamlessly filter projects by *All, Power BI, Python, SQL, Business Analytics, Statistical Analysis, and Operations Analytics*.
- **Interactive Modals**:
  - Full Case Study Modal (Overview, Problem, Data Sources, Methodology, Analysis, Dashboard, Editable Insights, Business Value).
  - Executive Resume Viewer Modal with instant download targeting `/resume/Saranga_Rathnayaka_CV.pdf`.
- **Systematic Analytics Workflow**: "From Data to Decision" 6-step framework (Understand → Collect → Transform → Analyze → Visualize → Improve).
- **Persistent Theme Switcher**: Modern corporate light and dark themes using consulting color palettes (Deep Navy, Slate, Charcoal, Electric Blue, Emerald).
- **Validated Contact Form**: Full client-side validation with real-time feedback, loading state, and success confirmations.

---

## 📁 Project Structure

```
├── index.html                           # Semantic SEO-optimized entry point
├── package.json                         # Build scripts & dependencies
├── tailwind.config.js                   # Custom design system tokens & colors
├── vite.config.ts                       # Vite bundler configuration
│
├── public/
│   └── resume/
│       └── Saranga_Rathnayaka_CV.pdf    # Downloadable resume PDF
│
├── src/
│   ├── main.tsx                         # React root mount
│   ├── App.tsx                          # Core application layout & theme controller
│   ├── index.css                        # Tailwind directives, animations & custom styles
│   │
│   ├── data/                            # Decoupled data layer for effortless updates
│   │   ├── profile.ts                   # Personal details, snapshot cards, what I do, brand message
│   │   ├── experience.ts                # E Screen Systems, Ansell, Hela Clothing
│   │   ├── projects.ts                  # 4 analytics projects, metrics & case studies
│   │   ├── education.ts                 # University of Colombo & Sri Sumangala College
│   │   ├── skills.ts                    # Categorized technical skills & featured tech stack
│   │   ├── certifications.ts            # 6 verified industry certifications
│   │   ├── workflow.ts                  # "From Data to Decision" 6-step methodology
│   │   ├── journey.ts                   # 2021 to Current visual career journey
│   │   └── index.ts                     # Consolidated barrel export
│   │
│   └── components/                      # Modular UI components
│       ├── Navbar.tsx                   # Sticky responsive header with theme toggle & resume CTA
│       ├── Hero.tsx                     # Value proposition, CTAs & headline
│       ├── HeroVisual.tsx               # Abstract interactive BI dashboard canvas
│       ├── Snapshot.tsx                 # 4 recruiter quick-scan cards
│       ├── About.tsx                    # Executive summary & domain breadth
│       ├── BrandStatement.tsx           # Value proposition highlight banner
│       ├── WhatIDo.tsx                  # 4 key capability cards with deliverables
│       ├── CurrentRole.tsx              # "What I'm Working On" @ E Screen Systems + pipeline
│       ├── Experience.tsx               # Interactive timeline with role inspector
│       ├── Education.tsx                # Degree visual dominance & academic progression
│       ├── Skills.tsx                   # Categorized skills & emphasized Power BI stack
│       ├── Projects.tsx                 # Filterable showcase grid
│       ├── ProjectCard.tsx              # Card with abstract dashboard chart preview
│       ├── ProjectModal.tsx             # Comprehensive case-study modal
│       ├── Workflow.tsx                 # 6-step analytical process
│       ├── Journey.tsx                  # Visual timeline from 2021 to present
│       ├── Certifications.tsx           # Credential cards ready for verification URLs
│       ├── Contact.tsx                  # Contact cards & validated message form
│       ├── ResumeModal.tsx              # Executive on-screen CV viewer
│       └── Footer.tsx                   # Sitemap, credentials, copyright & back-to-top
```

---

## 🛠️ How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Create a production build**:
   ```bash
   npm run build
   ```
   Assets will be generated in `dist/`.

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Update Your Information

All portfolio text and data are cleanly separated into `src/data/`:
- **Current role & responsibilities**: Update `src/data/experience.ts`.
- **Add or edit projects**: Update `src/data/projects.ts`.
- **Add certifications**: Update `src/data/certifications.ts`.
- **Replace CV**: Replace the file at `public/resume/Saranga_Rathnayaka_CV.pdf`.
