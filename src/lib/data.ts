export const personalInfo = {
  name: "Gabriel Huang",
  location: "Ithaca, NY",
  email: "gzh2@cornell.edu",
  github: "https://github.com/gabrielhuang00",
  linkedin: "https://linkedin.com/in/gabriel-huang-627159237",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Dual B.S. in Computer Science & ORIE at Cornell University. Passionate about machine learning, data science, and building impactful solutions. Currently working as an LLM Evaluation & Research Fellow at Handshake x OpenAI and conducting research in reinforced learning at Cornell Engineering.",
};

export const workExperience = [
  {
    company: "Handshake x OpenAI",
    location: "Remote",
    position: "LLM Evaluation & Research Fellow",
    period: "July 2025 - Present",
    achievements: [
      "Collaborate with OpenAI labs to build validation testing infrastructure for GPT, validating unreleased capabilities with confidential benchmarks; specifics under NDA.",
      "Build and maintain an automated eval harness (Python, OpenAI APIs, async workers) running async prompts across proprietary benchmarks; shipping weekly dashboards with 95% CIs.",
      "Spearhead teams of QA experts (Physics, CS PhDs) in preparing SoTA training data, testing lab capabilities with cutting edge human-validated domain data.",
    ],
  },
  {
    company: "Cornell Engineering; ORIE Dept.",
    location: "Ithaca, NY",
    position: "Undergraduate Reinforced Learning Researcher",
    period: "June 2025 - Present",
    achievements: [
      "Engineered a discrete-event simulation stack (Python) for single- and multi-station queueing networks (e.g., criss-cross) with pluggable schedulers (FIFO/priority/hedging) and seeded reproducibility.",
      "Developed modular, class-based experiment harnesses, unit tests, and logging/visualization of performance fronts, and instrumented KPIs including mean sojourn time, queue length, tail delay quantiles, and throughput.",
      "Implemented and benchmarked novel policy-gradient methods (PATHWISE/reparameterization, IPA, PPO) against REINFORCE and classical heuristics (MaxWeight, MaxPressure), running ablations across arrival/service regimes and overload.",
    ],
  },
  {
    company: "Commonpoint",
    location: "New York, NY",
    position: "Impact Data Scientist",
    period: "March 2024 - May 2025",
    achievements: [
      "Engineered data analytics solutions to serve NYC, optimizing staff satisfaction, participant distribution, and program performance systems while incorporating ETL processes and ensuring data quality control.",
      "Designed and implemented statistical, machine-learning solutions (sklearn) to best model and optimize problems with company turnover.",
      "Pioneer real-time data visualization platforms (Tableau, Looker), empowering C-Suite decision making and enhancing fiscal reporting efficiency.",
      "Spearhead high-impact presentations on new investments, securing $500,000+ funding increases by demonstrating measurable organizational impact to external stakeholders.",
    ],
  },
  {
    company: "Involio",
    location: "Remote",
    position: "Software Engineering Intern",
    period: "September 2022 - February 2023",
    achievements: [
      "Developed and maintained core features for a social investing platform using React and TypeScript, improving frontend performance and user engagement.",
      "Built scalable backend services in Python (Flask) to support user portfolios, trade tracking, and real-time market data feeds.",
      "Designed and integrated RESTful APIs to fetch and display live financial metrics and user-generated content.",
      "Implemented SQL queries and optimized database schemas to reduce query latency.",
    ],
  },
];

export const education = [
  {
    institution: "Cornell University",
    location: "Ithaca, NY",
    degree: "Dual B.S. in Computer Science & ORIE",
    period: "Aug 2023 - May 2027",
    achievements: [
      "GPA: 3.75",
      "Dual degree in Computer Science and Operations Research & Information Engineering",
      "Currently conducting undergraduate research in reinforced learning",
      "Expected graduation: May 2027",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "R",
  ],
  frontendDevelopment: [
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "WebSocket",
  ],
  backendDevelopment: [
    "Python",
    "Flask",
    "RESTful APIs",
    "asyncio",
    "OpenAI APIs",
  ],
  databaseAndStorage: [
    "SQL",
    "Database Optimization",
    "ETL Processes",
  ],
  cloudAndDevOps: [
    "Data Visualization",
    "Statistical Analysis",
    "Machine Learning",
  ],
  toolsAndServices: [
    "Tableau",
    "Looker",
    "scikit-learn",
    "Hugging Face",
    "Unit Testing",
    "Git",
    "Data Quality Control",
    "Policy Gradient Methods",
    "REINFORCE",
    "PPO",
    "Discrete Event Simulation",
  ],
};

export const projects = [
  {
    title: "Kalshi Arbitrage Algorithm",
    github: "https://github.com/gabrielhuang00/kalshi-arbitrage",
    description: [
      "After recognizing inefficiencies in Kalshi's nascent markets, develop arbitrage scanners that scrape range markets for clear inefficiencies and execute on them.",
      "Backend built on Python, utilizing asyncio REST and websocket calls to Kalshi's API.",
      "Sharpe: 2.8. Currently improving by building NLP, regex recognition of market structure through title — main losses are through miscategorization of respective market.",
      "Technologies: asyncio, REST, websockets, huggingface",
      "Status: Deployed (March 2025 - Present)",
    ],
  },
];

export const awards = [
  {
    name: "Gates Scholarship",
    issuer: "Bill & Melinda Gates Foundation",
    date: "2023",
    type: "Merit-Based Scholarship",
    position: "Scholar",
  },
];
