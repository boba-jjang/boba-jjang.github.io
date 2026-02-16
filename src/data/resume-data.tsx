import type { ResumeData } from "@/lib/types";
import { BackgroundStory } from "./background";

export const RESUME_DATA: ResumeData = {
  name: "Jae-Won Jang",
  initials: "JW",
  location: "Falls Church, VA",
  locationLink: "https://maps.app.goo.gl/3LVaKJpkPDXK4MaG7",
  about: "Security-focused computer engineer who enjoys learning deeply and teaching others.",
  summary: (
    <>
      I am a Senior Cyber Engineer at MITRE with a Ph.D. in Computer Engineering, specializing in software and systems security, control-flow integrity, and secure system design, with experience across compiler- and binary-level security, ARM architectures, and software supply-chain verification.
      
      <br />
      <br />

      Beyond my professional work, I care deeply about learning and teaching.
      Many of the projects on this site are personal explorations of topics I am
      actively revisiting—such as computer architecture, Rust, and systems
      fundamentals. I document and share this work publicly as a way to solidify
      my own understanding and, hopefully, make the learning process more useful
      to others.

      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          More about my background
        </summary>

        <div className="mt-3 rounded-md border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground/90 space-y-4">
          <BackgroundStory />
        </div>
      </details>
    </>
  ),
  cvUrl: "/JWJ-Resume.pdf",
  avatarUrl: "/images/profile.jpg",
  personalWebsiteUrl: "https://jwj.fyi",
  contact: {
    email: "jw-jang@outlook.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/boba-jjang",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jae-won-jang-a93125394/",
        icon: "linkedin",
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=en&user=1f4sH7IAAAAJ",
        icon: "google-scholar",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/j1_cookbook/",
        icon: "instagram",
      },
    ],
    downloads: [
      { label: "Download CV", url: "/JWJ-Resume.pdf" },
    ]
  },
  education: [
    {
      school: "Virginia Tech",
      url: "https://www.vt.edu/",
      degree: "Ph.D. in Computer Engineering",
      start: "2018",
      end: "2024",
    },
    {
      school: "University of South Florida",
      url: "https://www.usf.edu/",
      degree: "M.S. in Computer Engineering",
      start: "2014",
      end: "2015",
    },
    {
      school: "University of South Florida",
      url: "https://www.usf.edu/",
      degree: "B.S. in Computer Engineering",
      start: "2009",
      end: "2013",
    },
  ],
  work: [
    {
      company: "MITRE Corporation",
      link: "https://www.mitre.org/who-we-are",
      badges: [
        "Supply-chain Security",
        "SELinux",
        "Rust",
        "MLS",
        "Trade-space Analysis",
      ],
      title: "Senior Cyber Engineer",
      start: "2025",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed a modular, containerized framework for automated software supply-chain verification, extending
              TruffleHog to improve secret-scanning and dependency-analysis coverage across source repositories.
            </li>
            <li>
              Authored technical documentation and conducted architectural analyses of processor (RISC/CISC) and system
              design trade-offs to support modernization and performance optimization decisions.
            </li>
            <li>
              Led technology assessments and integration analyses for multi-level security (MLS), producing feasibility, risk,
              and trade-space evaluations to guide system design decisions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Virginia Tech",
      link: "https://www.vt.edu/",
      badges: [
        "Control-flow Integrity",
        "ARM MTE",
        "Binary Rewriting",
        "Taint Analysis",
        "LLVM/Clang",
      ],
      title: "Research Assistant",
      start: "2018",
      end: "2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Designed and deployed compiler- and binary-level security mechanisms to enforce control-flow integrity
              and automated data compartmentalization across untrusted code modules.
            </li>
            <li>
              Integrated the ARM Memory Tagging Extension (MTE) into a compiler toolchain, strengthening runtime
              memory safety and fault isolation.
            </li>
            <li>
              Implemented static and dynamic taint analysis to identify sensitive data paths and compartmentalization
              targets, automatically rewriting assembly code to isolate protected data regions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Raytheon",
      link: "https://www.rtx.com/",
      badges: [
       "Technical Writing"
      ],
      title: "Software Engineer",
      start: "2017",
      end: "2018",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Supported documentation compliance for unclassified deliverables pending clearance activation.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Penn State University",
      link: "https://www.psu.edu/",
      badges: [
        "Teaching"
      ],
      title: "Teaching Assistant",
      start: "2017",
      end: "2017",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Taught the course CMPSC 122: Intermediate Programming and led discussion sessions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Penn State University",
      link: "https://www.psu.edu/",
      badges: [
        "Hardware Security", "Logic obfuscation", "Camouflaging", "Reverse Engineering"
      ],
      title: "Research Assistant",
      start: "2016",
      end: "2017",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Researched hardware security and reverse-engineering countermeasures using transistor-level camouflaging and logic obfuscation.
            </li>
            <li>
              Designed and evaluated a method for camouflaging inter-gate connections
              by modulating transistor threshold voltages, increasing resistance to
              structural and functional reverse engineering.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "University of South Florida",
      link: "https://www.usf.edu/",
      badges: [
        "Hardware Security", "PUFs", "STT-MRAM", "Spintronics", "ASIC Layout"
      ],
      title: "Research Assistant",
      start: "2013",
      end: "2016",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Investigated hardware security primitives based on CMOS and spintronic
              memory technologies, including MTJ-based designs to improve PUF
              stability and STT-MRAM robustness against magnetic and thermal attacks.
            </li>
            <li>
              DDesigned schematics and physical layouts of non-volatile sequential
              elements using a 65nm process (up to M8 metal), culminating in a full
              padframe tape-out for prototype fabrication.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Intel",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: [
        "MongoDB", "Hardware Debugging", "Analytics"
      ],
      title: "Intern",
      start: "2013",
      end: "2013",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed analytics modules for the AIM Suite to measure customer
              engagement with in-store digital displays.
            </li>
            <li>
              Evaluated MongoDB for production deployment, analyzing scalability,
              data modeling trade-offs, and system integration constraints.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Assembly (ARM, x86/x64)",
        "C",
        "C++",
        "Haskell",
        "Python",
        "Rust",
      ],
    },
    {
      category: "Tools",
      items: [
        "angr",
        "Binary Ninja",
        "CMake",
        "Docker",
        "Dyninst",
        "GDB",
        "Ghidra",
        "Intel PIN",
        "LLVM/Clang",
        "QEMU",
        "Radare2",
      ],
    },
  ],
  projects: [
    {
      title: "Rust Up Knowledge",
      techStack: ["Rust"],
      description:
        "A personal Rust knowledge base designed for quick recall and long-term learning.",
      link: {
        label: "rust-up-knowledge",
        href: "https://jwj.fyi/rust-up-knowledge/",
      },
    },
    // {
    //   title: "Rust Up Algorithms",
    //   techStack: [
    //     "Rust",
    //   ],
    //   description:
    //     "A personal book that will use Rust to implement data structures and algorithms",
    //   link: {
    //     label: "rust-up-algorithms",
    //     href: "https://jwj.fyi/rust-up-algorithms/",
    //   },
    // },
    // {
    //   title: "Minimalist CV",
    //   techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    //   description:
    //     "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
    //   link: {
    //     label: "Minimalist CV",
    //     href: "https://github.com/BartoszJarocki/cv",
    //   },
    // },
  ],
} as const;
