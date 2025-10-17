import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Sandeepa Maddumage',
  title: "Hello!😊, I'm Sandeepa",
  description:
    'I am a motivated and dedicated individual who loves turning complex problems into efficient, user-friendly solutions. I thrive in fast-paced environments, enjoy collaborating with teams to drive innovation, and continuously explore new technologies to stay ahead in the ever-evolving tech landscape. Let’s connect and build something amazing!',
  resumeLink: 'https://cv-sandeepa-vidurath.tiiny.site/',
};

export const openSource = {
  githubUserName: 'SanVidurath',
};

export const contact = {};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/sandeepamaddumage/',
  github: 'https://github.com/SanVidurath',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'EAT🍕 ➡ SLEEP😴 ➡ CODE💻 ➡ REPEAT🔄',
  data: [
    {
      title: 'Web Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Fullstack / Web Development animation
      skills: [
        emoji(
          '⚡ Building beautiful responsive web applications using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)'
        ),
        emoji(
          '⚡ Developing enterprise-grade web apps with the MEAN stack (MongoDB, ExpressJS, Angular, NodeJS)'
        ),
        emoji('⚡ Building RESTful APIs with ExpressJS and NodeJS'),
        emoji(
          '⚡ Implementing secure authentication and authorization using JWT'
        ),
        emoji(
          '⚡ Designing reusable UI components with ReactJS, Angular, Bootstrap, and Material UI'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        { skillName: 'JavaScript', fontAwesomeClassname: 'logos:javascript' },
        {
          skillName: 'TypeScript',
          fontAwesomeClassname: 'logos:typescript-icon',
        },
        { skillName: 'Bootstrap', fontAwesomeClassname: 'logos:bootstrap' },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassname: 'vscode-icons:file-type-angular',
        },
        { skillName: 'Material UI', fontAwesomeClassname: 'logos:material-ui' },
        { skillName: 'NPM', fontAwesomeClassname: 'logos:npm-icon' },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'ExpressJS',
          fontAwesomeClassname: 'skill-icons:expressjs-light',
        },
      ],
    },
    {
      title: 'Enterprise Application Development',
      lottieAnimationFile: '/lottie/skills/desktopapp.json', // Enterprise & Backend animation
      skills: [
        emoji(
          '⚡ Building enterprise-scale applications using Java, Spring Boot, Spring REST, and JPA/Hibernate'
        ),
        emoji('⚡ Implementing microservices and monolithic architectures'),
        emoji('⚡ Securing applications with Spring Security & JWT'),
        emoji('⚡ Building desktop applications using JavaFX and Java Swing'),
      ],
      softwareSkills: [
        { skillName: 'Java', fontAwesomeClassname: 'devicon:java' },
        { skillName: 'Spring Boot', fontAwesomeClassname: 'logos:spring-icon' },
        {
          skillName: 'Spring Security',
          fontAwesomeClassname: 'mdi:shield-lock',
        },
        {
          skillName: 'Hibernate',
          fontAwesomeClassname: 'simple-icons:hibernate',
        },
        { skillName: 'JavaFX', fontAwesomeClassname: 'mdi:monitor' },
        {
          skillName: 'Java Swing',
          fontAwesomeClassname: 'mdi:window-maximize',
        },
        { skillName: 'Maven', fontAwesomeClassname: 'logos:maven' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      lottieAnimationFile: '/lottie/skills/cloud.json', // Cloud / DevOps animation
      skills: [
        emoji(
          '⚡ Deploying and managing applications on AWS and Microsoft Azure'
        ),
        emoji('⚡ Containerizing applications with Docker'),
        emoji('⚡ Orchestrating containerized workloads with Kubernetes'),
        emoji('⚡ Using Git & GitHub for version control and CI/CD pipelines'),
      ],
      softwareSkills: [
        { skillName: 'AWS', fontAwesomeClassname: 'logos:aws' },
        {
          skillName: 'Microsoft Azure',
          fontAwesomeClassname: 'logos:microsoft-azure',
        },
        { skillName: 'Docker', fontAwesomeClassname: 'logos:docker-icon' },
        { skillName: 'Kubernetes', fontAwesomeClassname: 'logos:kubernetes' },
        { skillName: 'Git', fontAwesomeClassname: 'logos:git-icon' },
        { skillName: 'GitHub', fontAwesomeClassname: 'akar-icons:github-fill' },
      ],
    },
    {
      title: 'Database Design & Management',
      lottieAnimationFile: '/lottie/skills/databasedesign.json', // Database-related animation
      skills: [
        emoji('⚡ Designing relational databases with ER diagrams and SQL'),
        emoji('⚡ Working with relational databases (MySQL, PostgreSQL)'),
        emoji('⚡ Designing and querying NoSQL databases (MongoDB)'),
        emoji('⚡ Implementing database migrations and schema evolution'),
        emoji('⚡ Optimizing database queries and indexing for performance'),
        emoji('⚡ Ensuring data integrity and normalization in database design'),
      ],
      softwareSkills: [
        { skillName: 'MySQL', fontAwesomeClassname: 'logos:mysql' },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'devicon:mongodb-wordmark',
        },
        {
          skillName: 'DB Migrations',
          fontAwesomeClassname: 'mdi:database-refresh',
        },
      ],
    },
    {
      title: 'AI & Automation',
      lottieAnimationFile: '/lottie/skills/ai_bot.json', // Miscellaneous skills animation
      skills: [
        emoji('⚡ Developing APIs with Python and FastAPI'),
        emoji('⚡ Automating Excel and Word file operations using Python'),
        emoji('⚡ Implementing AI-powered features using TensorFlow.js'),
        emoji('⚡ Following Agile methodology for project management'),
        emoji('⚡ Building business solutions with Microsoft Power Apps'),
      ],
      softwareSkills: [
        { skillName: 'Python', fontAwesomeClassname: 'logos:python' },
        { skillName: 'FastAPI', fontAwesomeClassname: 'logos:fastapi-icon' },
        { skillName: 'TensorFlowJS', fontAwesomeClassname: 'logos:tensorflow' },
        {
          skillName: 'Excel Automation',
          fontAwesomeClassname: 'vscode-icons:file-type-excel',
        },
        {
          skillName: 'Word Automation',
          fontAwesomeClassname: 'vscode-icons:file-type-word',
        },
        { skillName: 'Agile', fontAwesomeClassname: 'mdi:progress-check' },
        {
          skillName: 'Power Apps',
          fontAwesomeClassname: 'logos:microsoft',
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: 'General Sir John Kotelawala Defence University (KDU), Sri Lanka',
    subHeader: 'B.Sc. in Engineering (Hons) in Electronic and Telecommunication',
    duration: '2018 - 2022',
    grade: 'Second upper (FGPA 3.377)',
    desc: 'Projects:',
    descBullets: [
      'Cloud-Based Traffic Violations Detection System (2021)',
      'A GPU Based Deep Neural Network for a Car Park (2020) ',
      'Wireless Mobile Phone Charger (2020)',
      'Automatic Intensity Controlled LED Night Lamp with Motion Detection (2019) ',
      ' YAGI antenna design (2018)'
    ],
  },
  {
    schoolName: 'Institute of Computer Engineering Technology (iCET), Sri Lanka',
    subHeader: 'iCD(iCET Certified Developer) Full Stack Developer program',
    duration: '2024 - 2025',
    grade: '(FGPA 4.08)',
  },
  {
    schoolName: 'Lyceum International School Panadura, Sri Lanka',
    subHeader: 'Primary & Secondary Education',
    duration: '2003 - 2016',
    descBullets: [
      'G.C.E. A/L(2017) - Physical Science Stream (1A 2C passes)',
      'G.C.E. O/L(2013) - 9A passes',
      'College Head Prefect for the year 2014/2015',
    ],
  },
];

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: '1 Billion Technology (Pvt) Ltd, Sri Lanka',
    companylogo: '/img/icons/common/1BT.png',
    date: '2025 June – Present',
    descBullets: [
      'Developed and maintained scalable RESTful APIs using Python and FastAPI.',
      'Implemented database schema migrations using Alembic.',
      'Containerized applications using Docker and automated database migrations during image build.',
      'Theoretical knowledge on AWS services including Route 53, CloudFront, S3, Cognito, Serverless, SES, API Gateway, VPC, VPC link/endpoints, Internet Gateway, NAT, ECS, ALB, ECR, RDS, ElastiCache, Secrets manager, CloudWatch, Snowflake.',
      'Worked within a large-scale React.js project, gaining experience in real-world application development.',
      'Implemented automation of .docx and .xlsx files using Python.',
      'Worked with Microsoft Power Apps and Microsoft Azure.',
      'Followed Agile methodologies for project management and collaboration.',
      'Implemented Infrastructure as Code (IaC) solutions using Azure Bicep for repeatable and scalable Azure resource creation.',
      'Helped in implementing an Audit Trail microservice (Node.js/Serverless(Lambda)) with duel data persistence to RDS and S3.'
    ],
  },
  {
    role: 'Electronic Engineer',
    company: 'Naturub Exports International (Pvt) Ltd, Sri Lanka',
    companylogo: '/img/icons/common/naturub.png',
    date: '2022 February – 2023 February',
    descBullets: [
      'Jacquard Card Tester and Jacquard Data Logger Installation Project.',
      'Electronic Fault Finding and Repairing.',
      'Troubleshooting Machine Breakdown and Repairing.',
      'PABX system wiring,fault finding and providing connections.',
      'Elevator wiring.',
      'Hands on knowledge on VFDs, boiler, relays,contactors, circuit breakers, UPS, Solar Inverters and PA system.',
      'Knowledge on ISO documentation, PRM and Energy Management audit.'
    ],
  },
  {
    role: 'Electronic Engineer Intern',
    company: 'Vega Innovations (Pvt) Ltd, Sri Lanka',
    companylogo: '/img/icons/common/vega.png',
    date: '2021 July – 2022 January',
    descBullets: [
      'Debugging Auxiliary Power Supply for Solar Inverter.',
      'Designing of regulator circuit.',
      'Tracing of circuit paths.',
      'Simulation PID control and MPPT control using MATLAB simulink.',
    ],
  },
  {
    role: 'Visiting Lecturer',
    company: 'Sri Lanka Technological Campus (SLTC), Sri Lanka',
    companylogo: '/img/icons/common/sltc.png',
    date: '2025 August – Present',
    descBullets: [
      'Designing and delivering engaging lectures, tutorials, and workshops.',
      'Guiding and mentoring students in academic and career development.',
      'Developing course materials, assessments, and learning resources.',
      'Applying modern teaching methodologies and technology-enhanced learning tools.',
    ],
  },
];

export const projects = [
  {
    name: 'AcademiX',
    desc: 'An Online Examination Platform for Educational Institutions - Group Project',
    github: '',
    snaps:
      '',
    tech: ['Angular', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Spring Validation', 'Maven', 'MySQL', 'TailwindCSS'],
  },
  {
    name: 'MOSBurgers',
    desc: 'A full-stack POS (Point of Sale) system tailored for restaurants, enabling smooth order processing and management',
    github: 'https://github.com/SanVidurath/MOSBurgers',
    snaps:
      'https://flic.kr/s/aHBqjCuEJt',
    tech: ['Angular', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Spring Validation', 'Maven', 'MySQL'],
  },
  {
    name: 'ClothifyStore',
    desc: 'This is a Point of Sale (POS) application designed specifically for fashion shops',
    github: 'https://github.com/SanVidurath/ClothifyStoreLA',
    snaps:
      'https://flic.kr/s/aHBqjCuMV5',
    tech: ['Java', 'JavaFX', 'Maven', 'MySQL', 'Hibernate'],
  },
  {
    name: 'RPSGame',
    desc: 'This is an AI-powered Rock, Paper, Scissors game',
    github: 'https://github.com/SanVidurath/RPS-Game',
    link: 'https://sanvidurath.github.io/RPS-Game/',
    tech: ['Angular', 'Bootstrap', 'TensorFlowJS'],
  },
  {
    name: 'FashionShop',
    desc: 'This is an UI for a clothes shop featuring men and women clothes',
    github: 'https://github.com/SanVidurath/clothes-store',
    link: 'https://clothes-store-client.vercel.app/',
    tech: ['ReactTS', 'JS', 'HTML', 'CSS', 'MongoDB' ],
  },
  {
    name: 'BlogWebsite',
    desc: 'This is a blog website with authors, posts, comments and reviews',
    github: 'https://github.com/SanVidurath/blog-website',
    link: 'https://sanvidurath.github.io/blog-website/',
    tech: ['ReactTS'],
  },
  {
    name: 'WeatherApp',
    desc: 'This is a weather app that provides real-time weather of any location in the world',
    github: 'https://github.com/SanVidurath/weather-app',
    link: 'https://sanvidurath.github.io/weather-app/',
    tech: ['ReactTS', 'JS', 'HTML', 'CSS'],
  },
  {
    name: 'Snapshot',
    desc: 'This project displays a gallery of random images based on the search query of user',
    github: 'https://github.com/SanVidurath/snapshot',
    link: 'https://sanvidurath.github.io/snapshot/',
    tech: ['ReactTS', 'JS', 'HTML'],
  },
  {
    name: 'EmojiApp',
    desc: 'Search for your favorite emojis here',
    github: 'https://github.com/SanVidurath/Emoji-App',
    link: 'https://sanvidurath.github.io/Emoji-App/',
    tech: ['ReactTS', 'JS', 'HTML', 'CSS'],
  },
  {
    name: 'MealsApp',
    desc: 'This is a freecodecamp tutorial project done by John Smilga',
    github: 'https://github.com/SanVidurath/meals-app',
    link: 'https://sanvidurath.github.io/meals-app/',
    tech: ['ReactJS', 'HTML', 'CSS'],
  },
  {
    name: 'MovieApp',
    desc: 'This project was a tutorial of Tech with Tim',
    github: 'https://github.com/SanVidurath/MovieApp',
    link: 'https://sanvidurath.github.io/MovieApp/',
    tech: ['ReactJS', 'HTML', 'CSS'],
  },
  {
    name: 'Tindog',
    desc: 'This is a project from the course The Complete 2023 Web Development Bootcamp by Dr.Angela Yu',
    github: 'https://github.com/SanVidurath/doggo_tindog',
    link: 'https://rawcdn.githack.com/SanVidurath/doggo_tindog/93efc5a29b328fa94dad0280f7279ecfb1b62daf/index.html',
    tech: ['HTML', 'CSS', 'Bootstrap'],
  },
  
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Sandeepa Maddumage',
  description: 'Software Engineer',
  author: 'Sandeepa Maddumage',
  image: '/avatars/sandeepa.jpeg',
  url: 'https://sandeepa-portfolio-fm35br9r5-sandeepas-projects.vercel.app/',
  keywords: [
    'Sandeepa',
    'Sandeepa Maddumage',
    'SanVidurath',
    'Portfolio',
    'Sandeepa Portfolio ',
    'Sandeepa Maddumage Portfolio',
  ],
};

export const sections = [
  {
    name: 'skills',
    icon: 'fa fa-star',
    tag: 'Skills',
  },
  {
    name: 'projects',
    icon: 'fa fa-laptop',
    tag: 'Projects',
  },
  {
    name: 'education',
    icon: 'fa fa-book',
    tag: 'Education',
  },
  {
    name: 'experience',
    icon: 'fa fa-briefcase',
    tag: 'Experience',
  },
  {
    name: 'contact',
    icon: 'fa fa-envelope',
    tag: 'Contact',
  },
  {
    name: 'about',
    icon: 'fa fa-user',
    tag: ' About',
  },
];
