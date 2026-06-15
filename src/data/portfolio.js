import {
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MonitorSmartphone,
  Network,
  Server,
  Trophy,
} from 'lucide-react'
import certCybersecurityAi from '../assets/images/Cert&Achiv/0131.jpg'
import certAiPrompting from '../assets/images/Cert&Achiv/0210.jpg'
import certCloudNetwork from '../assets/images/Cert&Achiv/20.1.jpg'
import certCybersecurityFramework from '../assets/images/Cert&Achiv/6.1.jpg'
import certDataAnalytics from '../assets/images/Cert&Achiv/6.2.jpg'
import certAdvancedEngineers from '../assets/images/Cert&Achiv/9.1.jpg'
import certProgrammingRunnerUp from '../assets/images/Cert&Achiv/Achiv.jpg'
import certInternship from '../assets/images/Cert&Achiv/Internship Cert.jpg'
import certTesda from '../assets/images/Cert&Achiv/Tesda Certificate.jpg'
import coverDigitalArchive from '../assets/images/project-card-cover/EDA.png'
import coverIgp from '../assets/images/project-card-cover/IGP.jpg'
import coverLakwatsa from '../assets/images/project-card-cover/Lak.jpg'
import coverPortfolio from '../assets/images/project-card-cover/PW.jpg'
import coverWorldOfDungeon from '../assets/images/project-card-cover/WODS.jpg'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Network },
  { label: 'Gmail', href: 'mailto:johnleonard.libanan@gmail.com', icon: Mail },
]

export const techStack = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React.js', 'Vite.js', 'Gatsby.js', 'Tailwind CSS', 'Bootstrap', 'WordPress', 'Swiper.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'Laravel', 'PHP'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    title: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Deployment',
    icon: Layers3,
    items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Railway', 'Render'],
  },
  {
    title: 'Workflow',
    icon: BriefcaseBusiness,
    items: ['Figma', 'Canva', 'VS Code', 'Cursor', 'Discord', 'Slack', 'Microsoft Teams'],
  },
]

export const certificates = [
  {
    title: 'Programming - Java 1st Runner-Up',
    issuer: 'ICpEP Regional Programming Competition',
    date: '2025',
    image: certProgrammingRunnerUp,
  },
  {
    title: 'Certificate of Internship Completion',
    issuer: 'Seek Marketing Partners',
    date: 'March 2026',
    image: certInternship,
  },
  {
    title: 'SMART Technopreneurship 101',
    issuer: 'TESDA Online Program',
    date: 'February 19, 2025',
    image: certTesda,
  },
  {
    title: 'AI Fundamentals and Prompting 101',
    issuer: 'AI Ready ASEAN',
    date: 'February 10, 2026',
    image: certAiPrompting,
  },
  {
    title: 'Cybersecurity in the Age of AI',
    issuer: 'ICpEP R3 and ICpEP KSA',
    date: 'January 31, 2026',
    image: certCybersecurityAi,
  },
  {
    title: 'Empowering Global Community with Cloud-Network Innovation',
    issuer: 'ICpEP R3 and ICpEP KSA',
    date: 'December 20, 2025',
    image: certCloudNetwork,
  },
  {
    title: 'Practical Application of Cybersecurity Framework',
    issuer: 'ICpEP Qatar Chapter',
    date: 'December 6, 2025',
    image: certCybersecurityFramework,
  },
  {
    title: 'Data Analytics for Strategic Decision-Making',
    issuer: 'ICpEP R3 and ICpEP KSA',
    date: 'December 6, 2025',
    image: certDataAnalytics,
  },
  {
    title: 'Introduction to Advanced Level Engineers Register',
    issuer: 'ICpEP Qatar TechTalk Session',
    date: 'December 9, 2025',
    image: certAdvancedEngineers,
  },
]

export const timeline = [
  {
    title: 'Intern Junior Web Developer',
    org: 'Seek Marketing Partners',
    period: 'April - March 2026',
    location: 'Remote, Philippines',
    address: '10 St. Marys Place, Bury, England, BL9 0DZ',
    details: [
      'Managed and maintained client websites under company supervision.',
      'Developed standard service websites using WordPress.',
      'Adapted to their tech stack for premium website development services using Gatsby.js, Tailwind CSS, Node.js, Express, and PostgreSQL.',
      'Executed assigned tasks based on client requirements within team workflow.',
      'Collaborated with team lead and worked with production/admin systems.',
      'Created frontend website clones for training and skill development, including Dorot Garden and similar platforms.',
      'Handled multiple tasks simultaneously and consistently met deadlines.',
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: 'Software Lead Developer',
    org: 'Rice Plant Health Monitoring System (Thesis)',
    period: 'March - May 2026',
    location: 'Remote, Philippines',
    details: [
      'Led the full development of the system as software lead.',
      'Designed system architecture, workflow, and core logic.',
      'Built full-stack application using Vite.js, Tailwind CSS, Node.js, and PostgreSQL.',
      'Implemented system features and ensured complete system integration.',
    ],
    icon: GraduationCap,
  },
  {
    title: 'Backend Developer',
    org: 'Infirmary Connect (Thesis)',
    period: 'April - May 2026',
    location: 'Remote, Philippines',
    details: [
      'Developed backend system architecture and database design.',
      'Built APIs and server-side logic using Node.js and PostgreSQL.',
      'Improved system workflow and contributed to system design decisions.',
      'Supported deployment and backend optimization.',
    ],
    icon: Server,
  },
  {
    title: 'Freelance Full-Stack Developer',
    org: 'Client, academic, and personal systems',
    period: '2023 - 2026',
    location: 'Remote, Philippines',
    details: [
      'Developed 5+ Inventory Management Systems for businesses including clothing, vape, coffee, and gadgets.',
      'Built Digital Archive System using PHP, Bootstrap, and MySQL.',
      'Developed Hotel Management System (Lakwatsa) using PHP, Bootstrap, and MySQL.',
      'Built and deployed full-stack applications using Vite.js, Tailwind CSS, Node.js, and Vercel.',
    ],
    icon: Code2,
  },
  {
    title: 'Academic & Personal Projects',
    org: 'Selected project work',
    details: [
      'ESSU-IGP E-Commerce Website - PHP, Bootstrap, MySQL.',
      'World of Dungeon - Unity, Python.',
      'Typing Warriors - Python (Pygame).',
      'Personal Portfolio Website - Vite.js, Node.js, Tailwind CSS.',
    ],
    icon: Layers3,
  },
  {
    title: 'Achievements & Certificates',
    org: 'Programming and certificates',
    certificates,
    icon: Trophy,
  },
]

export const projects = [
  {
    title: 'Rice Plant Health Monitoring System + Drone',
    category: 'Web Application',
    type: 'Thesis Project',
    summary: 'Drone-assisted crop monitoring system for observing rice plant health and supporting smarter field decisions.',
    tech: ['Vite.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    image: coverPortfolio,
    color: 'emerald',
  },
  {
    title: 'ESSU-IGP',
    category: 'Web Application',
    type: 'E-commerce',
    summary: 'Digital commerce platform for campus products, ordering flows, and product management.',
    label: 'ESSU-IGP (E-commerce)',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: coverIgp,
    color: 'blue',
  },
  {
    title: 'Digital Archive',
    category: 'Web Application',
    type: 'Theses & Work Storage',
    summary: 'Searchable repository for thesis files, academic records, and structured document access.',
    label: 'Digital Archive (Theses & Work Storage)',
    tech: ['React', 'Express.js', 'SQL'],
    image: coverDigitalArchive,
    color: 'violet',
  },
  {
    title: 'Inventory Management System',
    category: 'Web Application',
    type: 'Operations System',
    summary: 'Inventory tools for clothing, coffee shop, and gadget stock tracking with admin-friendly workflows.',
    tech: ['Vite', 'Node.js', 'MySQL'],
    image: coverIgp,
    color: 'amber',
  },
  {
    title: 'Infirmary Connect System + Kiosk',
    category: 'Web Application',
    type: 'Clinic Scheduling',
    summary: 'Appointment scheduling platform with kiosk integration for easier clinic visits and queue handling.',
    tech: ['React', 'Express.js', 'PostgreSQL'],
    image: coverDigitalArchive,
    color: 'cyan',
  },
  {
    title: 'LAKWATSA',
    category: 'Web Application',
    type: 'Hotel Booking',
    summary: 'Hotel booking interface focused on discovery, reservation flow, and clear travel information.',
    label: 'LAKWATSA (Hotel Booking)',
    tech: ['Gatsby.js', 'Tailwind CSS', 'Netlify'],
    image: coverLakwatsa,
    color: 'rose',
  },
  {
    title: 'World of Dungeon',
    category: 'Game',
    type: 'Game Project',
    summary: 'Dungeon-themed academic game exploring interaction loops, game states, and player feedback.',
    tech: ['Unity', 'Python'],
    image: coverWorldOfDungeon,
    color: 'slate',
  },
  {
    title: 'Typing Warriors',
    category: 'Game',
    type: 'Typing Game',
    summary: 'Typing game designed around speed, accuracy, responsive feedback, and learning-through-play.',
    tech: ['Python', 'Pygame'],
    image: coverPortfolio,
    color: 'indigo',
  },
]
