// All portfolio content lives here so it is easy to update.
// Sources: Fiza's CV (experience, education, certifications) and her brief (skills list).

export const aboutPoints = [
  'BS Computer Science student at Capital University of Science & Technology (CUST), Islamabad',
  'Frontend and full-stack internship experience, including the MIS Department at Airblue',
  'Hands-on work on a KPI Management System with React, ASP.NET Core and SQL Server',
  'Project coordination experience leading cross-functional work end to end',
  'Creative problem solving with a strong interest in combining design and technology',
]

// Only figures that are supported by the CV.
export const stats = [
  { value: '3.21', label: 'CGPA after 4 semesters' },
  { value: '2', label: 'Development internships' },
  { value: '10 months', label: 'Project management (Devsio)' },
]

export const skillGroups = [
  {
    title: 'Graphic Design',
    icon: 'palette',
    items: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Canva',
      'Social Media Design',
      'Branding',
      'Poster Design',
      'Photo Editing',
    ],
  },
  {
    title: 'Development',
    icon: 'code',
    items: [
      'HTML & CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'SQL Server',
      'C++',
      'Python',
    ],
  },
  {
    title: 'Professional Skills',
    icon: 'briefcase',
    items: [
      'Project Coordination',
      'Digital Marketing',
      'Social Media Management',
      'UI Design',
      'Communication',
      'Problem Solving',
    ],
  },
]

export const experience = [
  {
    company: 'Airblue',
    role: 'Software Development Intern — MIS Department',
    period: 'Jul 14, 2026 – Present',
    meta: 'Islamabad · 6-week internship',
    points: [
      'Developed and enhanced a KPI Management System using React (Vite) on the front end and ASP.NET Core, Entity Framework Core and SQL Server with JWT authentication on the back end.',
      'Built and redesigned key modules — Employee, Team Assessment, KPI Setup and Reviewer (Aero Bridge Usage Performa) — aligning the UI with Airblue’s design system.',
      'Implemented API integrations, database seeding and full CRUD operations, verifying endpoints through Swagger.',
    ],
    tags: ['React', 'Vite', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
  },
  {
    company: 'USA-based Insurance Company',
    role: 'Front-End Development Intern',
    period: 'Jul 2025 – Aug 2025',
    meta: 'Remote',
    points: [
      'Built responsive web interfaces for desktop and mobile using modern front-end tools.',
      'Collaborated with developers and designers to translate mockups into production-ready pages.',
      'Developed reusable front-end components and helped optimize overall website performance.',
      'Debugged front-end issues and applied clean-code standards to improve usability.',
    ],
    tags: ['Responsive UI', 'Reusable components', 'Performance', 'Clean code'],
  },
  {
    company: 'Devsio Services',
    role: 'Project Manager',
    period: 'Sep 2024 – Jun 2025',
    meta: 'Project coordination',
    points: [
      'Coordinated cross-functional projects end to end, tracking timelines and quality of delivery.',
      'Led a collaborative, results-driven team and maintained consistent messaging across channels.',
    ],
    tags: ['Project coordination', 'Team leadership', 'Delivery tracking'],
  },
]

export const projects = [
  {
    title: 'Airblue KPI / MIS System',
    kind: 'Professional · Internship',
    description:
      'A KPI Management System built during my MIS internship at Airblue. I worked across the React front end and the ASP.NET Core back end, building and redesigning the Employee, Team Assessment, KPI Setup and Reviewer modules to match Airblue’s design system.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
    preview: 'dashboard',
    image: '', // add e.g. './projects/kpi.png' (screenshots must be approved by Airblue before publishing)
    links: { demo: '', code: '' },
    note: 'Internal company system — screenshots and source are not public.',
  },
  {
    title: 'IMS-UI',
    kind: 'Frontend · Interface work',
    description:
      'The interface layer of the KPI system: login screen, reviewer dashboard, forms, tables and filters, built from reusable components with API integration and ongoing UI improvements.',
    tags: ['React', 'Reusable components', 'API integration', 'Forms', 'Tables & filters'],
    preview: 'form',
    image: '',
    links: { demo: '', code: '' },
    note: 'Internal company system — screenshots and source are not public.',
  },
  {
    title: 'Graphic Design: Insurance Awareness Series',
    kind: 'Graphic design · Social media',
    description:
      'A series of educational posts, posters and infographics that explain insurance topics — deductibles, claims, appraisals, underwriting and coverage types — in plain language with consistent branding.',
    tags: ['Social media design', 'Posters', 'Infographics', 'Branding'],
    preview: 'dashboard',
    image: './designs/deductible-explained.jpg',
    links: { demo: '#design', code: '' },
    demoLabel: 'See the gallery',
  },
]

// Add your real design work here (see README). Images go in /public/designs.
// category must be one of: Branding, Social Media, Posters, UI Design, Marketing, Photography
// Example entry:
// {
//   id: 'poster-01',
//   title: 'Event Poster',
//   category: 'Posters',
//   image: './designs/poster-01.jpg',
//   description: 'Poster designed for ...',
//   tools: ['Photoshop', 'Illustrator'],
//   height: 'tall', // 'tall' | 'medium' | 'short' — controls masonry rhythm
// },
export const designs = [
  {
    id: 'distraction-light',
    title: 'One Second Can Change Everything',
    category: 'Marketing',
    image: './designs/distraction-light.jpg',
    description:
      'Road-safety awareness post showing how a small distraction can lead to lane drifting, accidents and liability. Branded header with logo and tagline.',
    tools: [],
  },
  {
    id: 'insurance-salvage',
    title: 'Insurance Salvage',
    category: 'Posters',
    image: './designs/insurance-salvage.jpg',
    description:
      'Educational poster explaining total loss and salvage: when repair cost is higher than the car’s value.',
    tools: [],
  },
  {
    id: 'deductible-explained',
    title: 'Do You Know? Deductibles',
    category: 'Social Media',
    image: './designs/deductible-explained.jpg',
    description:
      'Social post explaining what an insurance deductible is, with a simple $1,000 cost / $500 deductible example.',
    tools: [],
  },
  {
    id: 'scheduled-vs-blanket',
    title: 'Scheduled vs Blanket Coverage',
    category: 'Social Media',
    image: './designs/scheduled-vs-blanket.jpg',
    description:
      'Side-by-side comparison graphic: itemised scheduled coverage versus a single flexible blanket limit.',
    tools: [],
  },
  {
    id: 'appraisal-checklist-cover',
    title: 'Stop Confusing Appraisal Insurance',
    category: 'Social Media',
    image: './designs/appraisal-checklist-cover.jpg',
    description: 'Carousel cover slide for an appraisal insurance checklist, with an analysis illustration and bold headline.',
    tools: [],
  },
  {
    id: 'auto-vs-jewelry-appraisal',
    title: 'Auto vs Jewelry Appraisal',
    category: 'Social Media',
    image: './designs/auto-vs-jewelry-appraisal.jpg',
    description: 'Two-column comparison of what an auto appraisal and a jewelry appraisal each check.',
    tools: [],
  },
  {
    id: 'claims-and-premiums',
    title: 'How Claims Affect Your Premium',
    category: 'Social Media',
    image: './designs/claims-and-premiums.jpg',
    description: 'Six-point explainer on filing claims wisely, with a warm orange palette and an educational disclaimer.',
    tools: [],
  },
  {
    id: 'jewellery-value',
    title: 'Does Jewellery Depreciate or Appreciate?',
    category: 'Social Media',
    image: './designs/jewellery-value.jpg',
    description: 'Four rounded info cards on a muted gemstone background covering how jewellery holds or loses value.',
    tools: [],
  },
  {
    id: 'homeowners-coverage',
    title: 'What Does Homeowners Insurance Cover?',
    category: 'Posters',
    image: './designs/homeowners-coverage.jpg',
    description: 'Coverage guide for fire, floods and earthquakes over a warm home photograph with a call-to-action footer.',
    tools: [],
  },
  {
    id: 'workers-compensation',
    title: 'Accidents Can Happen Anytime at Work',
    category: 'Marketing',
    image: './designs/workers-compensation.jpg',
    description: 'Workers’ compensation awareness graphic with a construction-site illustration and a four-point benefits list.',
    tools: [],
  },
  {
    id: 'underwriter-role',
    title: 'What Does an Insurance Underwriter Do?',
    category: 'Social Media',
    image: './designs/underwriter-role.jpg',
    description: 'Infographic on how underwriters decide coverage, premium, limits and exclusions, and the factors they review.',
    tools: [],
  },
  {
    id: 'declaration-page',
    title: 'What Is an Insurance Declaration Page?',
    category: 'Social Media',
    image: './designs/declaration-page.jpg',
    description: 'Step-by-step graphic listing the key parts of a declaration page, paired with a sample policy illustration.',
    tools: [],
  },
  {
    id: 'safety-over-celebration',
    title: 'What To Do Instead: Safety > Celebration',
    category: 'Marketing',
    image: './designs/safety-over-celebration.jpg',
    description: 'Safe-driving checklist for celebrations, with a branded header and a bold call-out banner.',
    tools: [],
  },
  {
    id: 'distraction-dark',
    title: 'Sunglasses Protect Your Eyes, Not Your Liability',
    category: 'Marketing',
    image: './designs/distraction-dark.jpg',
    description: 'High-contrast dark variant of the distraction-awareness campaign, adding how liability and claims can be affected.',
    tools: [],
  },
]

export const designCategories = [
  'All',
  'Branding',
  'Social Media',
  'Posters',
  'UI Design',
  'Marketing',
  'Photography',
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Capital University of Science and Technology (CUST), Islamabad',
    period: '2024 – Present',
    points: ['CGPA: 3.21 — 4 semesters completed'],
  },
  {
    degree: 'Intermediate in Computer Science (ICS)',
    school: 'Punjab Group of Colleges',
    period: '', // add the years from your transcript
    points: [],
  },
]

export const certifications = [
  'Python Programmer Analyst Specialization — Python Automation',
  'Certificate of Participation — Al-Funoon Gala 2026, Analytical Reasoning (IEEE)',
  'Student Appreciation Certificate — Societies/Clubs Membership, Spring 2026 (CUST)',
]

export const leadership = [
  'Event In-Charge, Youth Insight Society — led event planning and on-ground execution.',
]
