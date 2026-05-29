import {
  Award,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const socials = {
  linkedin: "https://www.linkedin.com/in/harisha-gunti-0b2993314",
  github: "https://github.com/23eg110d24-cmd",
  email: "mailto:guntiharisha@gmail.com",
  phone: "tel:+919000336087"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const aboutCards = [
  {
    icon: GraduationCap,
    title: "Computer Science Undergraduate",
    body: "B.Tech CSE student at Anurag University with a CGPA of 7.57 and an applied engineering mindset."
  },
  {
    icon: BrainCircuit,
    title: "ML and AI Focus",
    body: "Passionate about data-driven systems, model evaluation, classification, regression, and practical AI workflows."
  },
  {
    icon: Code2,
    title: "Full Stack Builder",
    body: "Comfortable turning ideas into usable products with React, Spring Boot, REST APIs, authentication, and deployment."
  }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      ["Python", 88],
      ["Java", 78],
      ["C", 72],
      ["SQL", 80],
      ["R", 68],
      ["JavaScript", 76],
      ["HTML", 90],
      ["CSS", 86]
    ]
  },
  {
    title: "Libraries & Tools",
    icon: Layers3,
    skills: [
      ["NumPy", 84],
      ["Pandas", 86],
      ["Matplotlib", 78],
      ["Seaborn", 80],
      ["Scikit-learn", 82],
      ["Tableau", 74]
    ]
  },
  {
    title: "Frameworks & Technologies",
    icon: Server,
    skills: [
      ["Spring Boot", 78],
      ["React", 82],
      ["Vite", 80],
      ["Docker", 70],
      ["JWT", 76],
      ["REST APIs", 84],
      ["Spring Security", 74],
      ["JPA", 72]
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [["MySQL", 80]]
  }
] as const;

export const projects = [
  {
    title: "Gold Price Prediction",
    category: "Machine Learning",
    description:
      "A regression pipeline that predicts gold prices using Random Forest models, exploratory analysis, feature relationships, and visual evaluation.",
    tech: ["Random Forest Regression", "Python", "Pandas", "Seaborn", "Data Visualization"],
    accent: "from-red-500 to-rose-400",
    icon: Sparkles,
    liveUrl: "https://colab.research.google.com/drive/1I7irBGb1YMmu2bB8jeuArSbsK2TV0sS9?usp=sharing"
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Classification workflow for identifying churn risk with imbalanced data handling, SMOTE, Random Forest, data analysis, and model evaluation.",
    tech: ["Classification", "SMOTE", "Random Forest", "Data Analysis", "Model Evaluation"],
    accent: "from-red-600 to-orange-400",
    icon: BrainCircuit,
    liveUrl: "https://colab.research.google.com/drive/1pUxlyICjrM32SmxkIwWtd_M49bQF44Ex?usp=sharing"
  },
  {
    title: "Hamo - Library Management Portal",
    category: "Full Stack",
    description:
      "Role-based library portal with secure authentication, Spring Boot APIs, React Vite frontend, Dockerized delivery, and CI/CD deployment.",
    tech: ["Spring Boot", "React", "Docker", "JWT", "Spring Security", "JPA", "CI/CD", "Render", "Vercel"],
    accent: "from-zinc-900 to-red-600",
    icon: ShieldCheck,
    githubUrl: "https://github.com/23eg110d24-cmd/Hamo",
    liveUrl: "https://hamo-phi.vercel.app/"
  }
];

export const certifications = [
  ["Introduction to Machine Learning", "NPTEL", "ML"],
  ["Introduction to Data Science", "Cisco Networking Academy", "DS"],
  ["Mastering AI on AWS", "Udemy - School of AI", "AI"],
  ["Advanced Automation Professional", "Automation Anywhere", "AA"],
  ["Python Essentials 1", "Cisco Networking Academy", "PY"],
  ["Python Essentials 2", "Cisco Networking Academy", "PY"],
  ["CCNA: Enterprise Networking, Security, and Automation", "Cisco Networking Academy", "CN"],
  ["Apply AI: Analyze Customer Reviews", "Cisco Networking Academy", "AI"]
];

export const education = [
  {
    place: "Anurag University",
    program: "B.Tech Computer Science and Engineering",
    period: "Aug 2023 - May 2027",
    score: "CGPA: 7.57 (Upto 5th Semester)"
  },
  {
    place: "Deeksha Junior College, Kushaiguda",
    program: "Class XII",
    period: "Apr 2023",
    score: "Percentage: 87%"
  },
  {
    place: "Sai Siddartha High School, Dammaiguda",
    program: "Class X",
    period: "Mar 2021",
    score: "GPA: 10.0"
  }
];

export const contactMethods = [
  { label: "Email", value: "guntiharisha@gmail.com", href: socials.email, icon: Mail },
  { label: "Phone", value: "+91 90003 36087", href: socials.phone, icon: Phone },
  { label: "LinkedIn", value: "Connect professionally", href: socials.linkedin, icon: Award },
  { label: "GitHub", value: "View repositories", href: socials.github, icon: Code2 }
];
