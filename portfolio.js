import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Gayashan Tharaka',
  title: "Hello World, I'm Gayashan!",
  description:
    "I am a passionate software developer creating high quality software applications with simple, user friendly interfaces and advanced functionality...",
  resumeLink:
    'https://gayashantharaka.tiiny.site',
};

export const openSource = {
  githubUserName: 'Gayashan97',
};

export const contact = {};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/gayashan-tharaka-5786631b1',
  github: 'https://github.com/Gayashan97',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'EAT🍕 ➡ SLEEP😴 ➡ CODE💻 ➡ REPEAT🔄',
  data: [
    {
      title: 'Web Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building full stack responsive websites using the MERN stack(MongoDB ExpressJS ReactJS NodeJS)'
        ),
        emoji('⚡ Building RESTful APIs using ExpressJS and Mongoose'),
        emoji('⚡ Building applications with web scrapped data from Python libraries'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassname: 'logos:bootstrap',
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Material UI',
          fontAwesomeClassname: 'logos:material-ui',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'ExpressJS',
          fontAwesomeClassname: 'skill-icons:expressjs-light',
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
      ],
    },
    {
      title: 'Mobile Application Development',
      lottieAnimationFile: '/lottie/skills/mobileapp.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building cross platform mobile applications using Flutter'),
        emoji(
          '⚡ Building mobile android applications using Java'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Flutter',
          fontAwesomeClassname: 'logos:flutter',
        },
        {
          skillName: 'Java',
          fontAwesomeClassname: 'devicon:java',
        },
        {
          skillName: 'SQLite',
          fontAwesomeClassname: 'logos:sqlite',
        },
      ],
    },
    {
      title: 'Desktop Application Development',
      lottieAnimationFile: '/lottie/skills/desktopapp.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building desktop applications with Java and JavaFX to run locally'
        ),
        emoji(
          '⚡ Building desktop applications with C/C++'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Java',
          fontAwesomeClassname: 'devicon:java',
        },
        {
          skillName: 'JavaFX',
          fontAwesomeClassname: 'nonicons:java-16',
        },
        {
          skillName: 'C',
          fontAwesomeClassname: 'fa6-solid:c',
        },
      ],
    },
    {
      title: 'Database Design',
      lottieAnimationFile: '/lottie/skills/databasedesign.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Drawing Entity Relationship(ER) diagrams for case study scenarios'),
        emoji('⚡ Mapping ER diagrams to design SQL databases'),
        emoji('⚡ Designing Non SQL databases using MongoDB or Google Firebase'),
        emoji('⚡ Building customized reports using Microsoft Power BI Report Server and SQL Server')
      ],
      softwareSkills: [
        {
          skillName: 'MySQL',
          fontAwesomeClassname: 'logos:mysql',
        },
        {
          skillName: 'SQL Server',
          fontAwesomeClassname: 'devicon-plain:microsoftsqlserver-wordmark',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'devicon:mongodb-wordmark',
        },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'logos:firebase',
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: 'University of Westminster',
    subHeader: 'BEng (Hons) Software Engineering',
    duration: '2018 - 2023',
    grade: 'Second Upper',
    desc: 'Implementation of two research and development projects:',
    descBullets: [
      'Second Hand Car Price Prediction System',
      'Demurrage Calculator and Prediction System',
    ],
  },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'IFS R&D International (Pvt) Ltd',
    companylogo: '/img/icons/common/ifs.png',
    date: '2024 January – Present',
    descBullets: [
      "Manage and prioritize cases & tasks using ServiceNow application to ensure timely resolution of customer issues and adherence to SLAs.",
      "Provide technical assistance to customers and internal teams regarding the IFS applications including troubleshooting and issue resolution via code level investigations using PL/SQL, .NET and Oracle Database.",
      "Maintain a deep understanding of the IFS applications including their architecture, features and implementation details, to effectively address customer inquiries and challenges.",
      "Create and update knowledge base articles to help customers and internal teams better understand and utilize the IFS applications.",
      "Collaborate with R&D teams to escalate complex issues, prioritize feature requests and advocate for customer needs."
    ],
  },
  {
    role: 'Information Technology Trainee',
    company: 'South Asia Gateway Terminals (Pvt) Ltd',
    companylogo: '/img/icons/common/sagt.jpg',
    date: '2018 September – 2023 December',
    descBullets: [
      "Develop dashboards and internal web applications for ad hoc requirements of the company using Java, Spring Boot, Apache Tomcat, Microsoft SQL Server, HTML, CSS, JS and Bootstrap.",
      "Build reports with Microsoft Power BI by executing SQL queries and stored procedures on Microsoft SQL Server.",
      "Configurate, test, administrate and provide application support to the most used terminal handling operating system globally, Navis N4, and its related internal customer portal systems.",
      "Deployment of a Point of Sales system integrated with Biometric authentication using a fingerprint scanner and an RFID card system.",
      "Design flow charts and write software requirement specification documentation for various business requirements."
    ],
  },
];

export const projects = [
  {
    name: 'Autopoint (R&D)',
    desc: 'Second Hand Car Price Prediction System implemented using a customized Linear Regression Algorithm',
    github: 'https://github.com/Gayashan97/Autovision',
    link: 'https://autopoint.onrender.com',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720311175408',
    tech: ["ReactJS","Bootstrap","NodeJS","ExpressJS","Python","MongoDB"]
  },
  {
    name: 'FusionX (R&D)',
    desc: 'Web Application and Mobile Application used to calculate and predict demurrage charges',
    github: 'https://github.com/Gayashan97/FusionX',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304274656',
    tech: ["AWS","ReactJS","NodeJS","Flutter","Python","MySQL"]
  },
  {
    name: 'ADCELL',
    desc: 'Science Web Site',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
    link: 'https://adcell.onrender.com',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304150968',
    tech: ["HTML","CSS","JS"]
  },
  {
    name: 'TinDog',
    desc: 'Dog matching web site',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
    link: 'https://tindog-s3ds.onrender.com',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304132646',
    tech: ["HTML","CSS","Bootstrap"]
  },
  {
    name: 'Emotion',
    desc: 'Mobile Messenger Chat Application',
    github: 'https://github.com/Gayashan97/Emotion',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720310033912',
    tech: ["Flutter","Firebase"]
  },
  {
    name: 'Weather24x7',
    desc: 'Mobile Weather Application showing weather details retrieved from OpenWeather API',
    github: 'https://github.com/Gayashan97/Weather24x7',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304272571',
    tech: ["Flutter"]
  },
  {
    name: 'BMI Calculator',
    desc: 'Mobile Application to calculate BMI',
    github: 'https://github.com/Gayashan97/BMI-Calculator',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304289443',
    tech: ["Flutter"]
  },
  {
    name: 'Movie Hub',
    desc: 'Mobile Movie Management Application with IMDB rating intergration',
    github: 'https://github.com/Gayashan97/Movie-Maniac',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304229618',
    tech: ["Java","SQLite"]
  },
  {
    name: 'Civil Engineering Project',
    desc: 'Desktop Application used to calculate the compressive strength of concrete',
    github: 'https://github.com/Gayashan97/Civil-Engineering-Project',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304190427',
    tech: ["Java","JavaFX"]
  },
  {
    name: 'The Gym',
    desc: 'Terminal Console Gym Management Application ',
    github: 'https://github.com/Gayashan97/The-Gym',
    snaps: 'https://www.flickr.com/photos/197056910@N02/albums/72177720304128815',
    tech: ["Java","MongoDB"]
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Gayashan Tharaka',
  description:
    'Software Developer',
  author: 'Gayashan Tharaka',
  image: '/avatars/gayashan.jpg',
  url: 'https://gayashantharaka.onrender.com',
  keywords: [
    'Gayashan',
    'Gayashan Tharaka',
    'gayashan97',
    'Portfolio',
    'Gayashan Portfolio ',
    'Gayashan Tharaka Portfolio',
  ],
};

export const sections = [
  {
    name: "skills",
    icon: "fa fa-star",
    tag: "Skills"
  },
  {
    name: "projects",
    icon: "fa fa-laptop",
    tag: "Projects"
  },
  {
    name: "education",
    icon: "fa fa-book",
    tag: "Education"
  },
  {
    name: "experience",
    icon: "fa fa-briefcase",
    tag: "Experience"
  },
  {
    name: "contact",
    icon: "fa fa-envelope",
    tag: "Contact"
  },
  {
    name: "about",
    icon: "fa fa-user",
    tag: " About"
  },
];
