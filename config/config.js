
import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Naga Venkata Dedeepya Padmanabhuni",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Experience",
      link: "#experience",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Dedeepya",
  //description: "Driving Innovation Through Full-Stack Excellence and User-Centric Design",
  image: profile.src,
  icons: [
    {
      icon: faLinkedin,
      link: "https://in.linkedin.com/in/dedeepya-padmanabhuni",
    },
    {
      icon: faGithub,
      link: "https://github.com/Dedeepyapnv",
    },
  ]



}

export const about = {
  title: "Why Me?",
  subtitle: "Innovative Development Pioneer",
  description: [
    "In a world constantly evolving with technology, I, Dedeepya Padmanabhuni, stand at the forefront as a beacon of innovation and expertise. My journey in the realm of computer science, rooted in the prestigious Texas A&M University, has been a blend of academic rigor and practical application. With a master's degree specializing in Artificial Intelligence, I have honed my skills in a diverse array of technologies and methodologies.My expertise is not just limited to AI; I have delved deeply into full-stack development,and database management. I'm a passionate computer science professional with a proven track record in developing user-centric applications.As evidenced by projects like optimizing cloud resource allocation at IBM and designing a robust REST API for secure data access, I excel in crafting secure and scalable software solutions. ",
    " My Master's focus and projects like \"Slash\" - an e-commerce web application, demonstrates my ability to develop user-centric solutions.As a Full Stack Developer for various projects, I have demonstrated my capacity to handle end-to-end development, ensuring that every layer of a project is executed to perfection.Led a multidisciplinary research team in designing, implementing, and evaluating a highly accurate deep learning model for brain tumor detection, showcasing my ability to guide, inspire, and lead teams towards achieving collective goals.",
    "With a fusion of technical skills in AI, ML, full-stack development, and my collaborative spirit, I am poised to contribute significantly to any team, driving innovation and excellence in the ever-evolving landscape of technology."
  ],

}

export const experience = {
  title: "Work Experience",
  cards: [
    {
      title: "IBM",
      description: "Contributed to IBM's Power Virtual Server development, optimizing cloud resource allocation by identifying over-provisioned instances through automated scripting, resulted in achieving 18% cost savings. Designed and implemented a secure REST API system, integrating PostgreSQL for efficient data management and achieving a 25% increase in data accessibility while ensuring confidentiality compliance and improving query performance by 30%.",
      icons: null,
    },
    {
      title: "Virtusa",
      description: "Led migration of a legacy monolithic application to microservices using Spring Cloud and Docker,overseeing deployment strategies for improved scalability, fault tolerance, and maintainability, while implemented secure OAuth 2.0 and JWT token-based authentication, and resolved application bugs and styling issues.",
      icons: null,
    },
    {
      title: "AICTE",
      description: "Re-architected AWS full-stack app achieving 99.99% uptime, 20% cost reduction with EC2, RDS (MongoDB), Elastic Beanstalk. Enhanced UI with React, boosting engagement by 35%, reducing load times 40% using hooks, context API, Redux.",
      icons: null,
    }

  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Slash",
      description: "An e-commerce web application designed to aggregate and provide the best deals from multiple websites, offering users a streamlined platform to discover and purchase products at competitive prices across various online retailers",
      icons: [

        {
          icon: faGithub,
          link: "https://github.com/Dedeepyapnv",
        },
      ]
    },

    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/Dedeepyapnv/DedeepyaPortfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "You can reach out by email at pnvdedeepya@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:pnvdedeepya@gmail.com",
      isPrimary: true,
    },

  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Dedeepya Padmanabhuni ",

  image: profile.src,
}


