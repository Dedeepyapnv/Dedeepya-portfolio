
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
  //description: "A Computer Science Engineer creating mobile apps and static websites.",
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
  title: "Who I am",
  description: [
    "Hello! I'm Naga Venkata Dedeepya Padmanabhuni, a passionate and driven software engineer specializing in full-stack development ",
    "with a keen interest in Machine Learning (ML) and Artificial Intelligence (AI). With a solid foundation in",
    " Computer Science from Texas A\&M University-Kingsville and hands-on experience spanning various tech stacks,",
    "I thrive on tackling complex challenges and creating innovative solutions that make a real-world impact."
  ],
}

export const experience = {
  title: "Work Experience",
  cards: [
    {
      title: "IBM",
      description: "Led cross-functional teams in optimizing cloud resource allocation, integrating GraphQL with PostgreSQL for enhanced data querying, and enforcing a robust REST API system at IBM, resulting in improved resource utilization efficiency by 30%, data accessibility by 25%, and reduced code complexity by 30%.",
      icons: null,
    },
    {
      title: "AICTE",
      description: "Re-architected AWS full-stack app achieving 99.99% uptime, 20% cost reduction with EC2, RDS (MongoDB), Elastic Beanstalk. Enhanced UI with React, boosting engagement by 35%, reducing load times 40% using hooks, context API, Redux.",
      icons: null,
    },
    {
      title: "Virtusa",
      description: "Implemented microservices with Spring Boot, Spring Data JPA, and Spring Config Server. Deployed on Google Kubernetes Engine (GKE), achieving 70% faster deployments and optimized resource usage. Integrated Google Cloud AI Platform and TensorFlow for AI-driven automation and actionable insights.",
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
          link: "https://github.com/Dedeepyapnv",
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


