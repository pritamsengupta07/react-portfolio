import project1 from "../assets/projects/blockchain.jpg";
import project2 from "../assets/projects/chatbot.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/foodOrder.png";

export const HERO_CONTENT = `I am Pritam Sengupta, currently pursuing a B.Tech in Machine Learning and Data Science. Inclined towards full-stack development, I have built various projects using technologies like MERN, Django, React.js, Express.js, Node.js and more. Along with my technical skills, which encompass languages like Python and its framework, C, Java (basic),JavaScript and more , I am also familiar with databases like MongoDB and SQL, as well as tools such as Power BI and Alteryx. I am extremely passionate about technology and eager to join a team that values collaboration and unique problem-solving through the use of technology.`;

export const ABOUT_TEXT = `I am a dedicated and passionate technology enthusiast. With experience ranging from working on various projects to winning the Indian Government-initiated hackathon, Smart India Hackathon, I have worked with a variety of technologies, including React, Node.js, MySQL, MongoDB, and more. My journey in technology began with a deep curiosity about how technology could create unique solutions and provide opportunities for advancement, and it has evolved into a career choice where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.Outside of coding, I enjoy various hobbies, including exploring street food, getting a good night's sleep, and spending time with loved ones. This portfolio is another creative approach to showcasing myself, which I intend to enhance further. I look forward to being a part of your tech team, and I am confident you won’t be disappointed.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Blockchain Based Evault for legal documents",
    image: project1,
    description:
      "This project aims to create a secure eVault utilizing blockchain technology for judges, clients, lawyers, and stakeholders. Developed for the Smart India Hackathon 2023, it employs React and Html and Css for the user interface, Solidity for smart contracts on the Ethereum blockchain via MetaMask, Pinata IPFS for storage, and Django with MongoDB for the backend.",
    technologies: ["HTML", "CSS", "React", "Django", "MongoDB","Solidity"],
  },
  {
    title: "AI Chatbot using OpenAi ",
    image: project2,
    description:
      "An AI chatbot developed using Django, HTML, and CSS, integrates OpenAI API for dynamic, intelligent conversational interactions..",
    technologies: ["HTML", "CSS", "Django", "MongoDB","API"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React", "Bootstrap"],
  },
  {
    title: "Food ordering Platform",
    image: project4,
    description:
      "A food ordering website built using the MERN stack integrates Razorpay API for seamless payment processing, providing users with a simple platform for ordering food and completing transactions securely.",
    technologies: ["React", "CSS", "Nodejs", "Express", "MongoDB","API"],
  },
];
export const Achievements = [
  {
    title:'Winner,Smart India Hackathon 2023',
    description:"Developed Blockchain based Evault for legal documents"
  },
  {
    title: "IDE Bootcamp Phase III, Banaras Hindu University",
    description:"Awarded Best team for innovation and idea"
  },
];

export const CONTACT = {
  address: "Gwalior, Madhya Pradesh ",
  phoneNo: "8822326474 ",
  email: "pritamsengupta18@gmail.com",
  linkedln:"https://www.linkedin.com/in/pritam-sengupta",
};
