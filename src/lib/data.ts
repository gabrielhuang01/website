export const personalInfo = {
  name: "Gabriel Huang",
  location: "Ithaca, NY",
  email: "gzh2@cornell.edu",
  github: "https://github.com/gabrielhuang00",
  linkedin: "https://linkedin.com/in/gabriel-huang-627159237",
  profilePicture: "/profile-latest.png",
  heroDescription:
    "Currently an LLM Evaluation & Research Fellow at Handshake x OpenAI and conducting research in reinforced learning at Cornell Engineering.",
};

export const workExperience = [
  {
    company: "Handshake x OpenAI",
    location: "Remote",
    position: "LLM Evaluation & Research Fellow",
    period: "July 2025 - Present",
    logo: "https://logo.clearbit.com/openai.com",
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
    logo: "https://logo.clearbit.com/cornell.edu",
    achievements: [
      "Engineered a discrete-event simulation stack (C, Python) for single- and multi-station queueing networks (e.g., criss-cross) with pluggable schedulers (FIFO/priority/hedging) and seeded reproducibility.",
      "Developed modular, class-based experiment harnesses, unit tests, and logging/visualization of performance fronts, and instrumented KPIs including mean sojourn time, queue length, tail delay quantiles, and throughput.",
      "Implemented and benchmarked novel policy-gradient methods (PATHWISE/reparameterization, IPA, PPO) against REINFORCE and classical heuristics (MaxWeight, MaxPressure), running ablations across arrival/service regimes and overload.",
    ],
  },
  {
    company: "Commonpoint",
    location: "New York, NY",
    position: "Impact Data Scientist",
    period: "March 2024 - May 2025",
    logo: "https://www.commonpoint.org/wp-content/uploads/2023/11/logo2.webp",
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
    logo: "https://logo.clearbit.com/involio.com",
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
    logo: "https://logo.clearbit.com/cornell.edu",
    achievements: [
      "GPA: 3.75",
      "Dual degree in Computer Science and Operations Research & Financial Engineering",
      "Currently conducting Reinforced Learning research under Prof. Jim Dai",
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
    "C",
    "Java",
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
    "PyTorch",
    "TensorFlow",
  ],
  databaseAndStorage: [
    "SQL",
    "Database Optimization",
    "ETL Processes",
  ],
  toolsAndServices: [
    "Tableau",
    "Looker",
    "scikit-learn",
    "Hugging Face",
    "Unit Testing",
    "Git",
    "Data Quality Control",
    "Event Simulation",
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
      "Status: Deployed (March 2025 - Present)",
    ],
    skills: ["Python", "asyncio", "REST APIs", "Websockets", "NLP", "HuggingFace", "Financial Trading"],
  },
  {
    title: "SVD Gradient Execution Algorithm",
    github: "https://github.com/gabrielhuang00/svd-trading-algorithm",
    description: [
      "Backtested and developed a fully autonomous trading algorithm using Python's backtrader library",
      "Utilized Singular Value Decomposition to map out correlations between 5 different market sectors over an 8-year period, using 12 different stocks from these sectors",
      "Executed trades when the gradient between the projection of price vectors onto selected singular vectors exceeded an optimized threshold",
      "Duration: May 2022 – June 2022",
    ],
    skills: ["Python", "Backtrader", "Quantstats", "YFinance", "NumPy", "SVD", "Trading Algorithm"],
  },
];

export const awards = [
  {
    name: "Gates Scholarship",
    issuer: "Bill & Melinda Gates Foundation",
    date: "2023",
    type: "Merit-Based Scholarships",
    position: "Scholar",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable ML Systems with PyTorch",
    excerpt: "A deep dive into creating production-ready machine learning systems that can handle real-world data loads and user demands.",
    content: "Full blog post content would go here...",
    author: "Gabriel Huang",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Machine Learning",
    tags: ["PyTorch", "ML Systems", "Production", "Scalability"],
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 2,
    title: "The Future of Reinforcement Learning in Finance",
    excerpt: "Exploring how RL algorithms are revolutionizing algorithmic trading and risk management in modern financial markets.",
    content: "Full blog post content would go here...",
    author: "Gabriel Huang",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Finance",
    tags: ["Reinforcement Learning", "Trading", "Finance", "Algorithms"],
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 3,
    title: "Optimizing React Performance: A Complete Guide",
    excerpt: "Learn advanced techniques to make your React applications lightning fast with practical examples and real-world case studies.",
    content: "Full blog post content would go here...",
    author: "Gabriel Huang",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 4,
    title: "Data Science at Scale: Lessons from Building Trading Algorithms",
    excerpt: "Insights from developing high-frequency trading systems and the challenges of processing massive datasets in real-time.",
    content: "Full blog post content would go here...",
    author: "Gabriel Huang",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Data Science",
    tags: ["Data Science", "Trading", "Algorithms", "Real-time"],
    featured: false,
    image: "/api/placeholder/600/300",
  },
];
