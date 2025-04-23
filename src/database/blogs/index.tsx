interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting started with Microservices",
    image: "/assets/images/image01-736d71e3db56657987594b3b11459b5d.png",
    description:
      "Microservices are an architectural style that structures an application as a collection of small, loosely coupled services.",
    slug: "getting-started-with-microservices",
  },
  {
    id: 2,
    title: "Cryptography and Its Use in Cyber Security",
    image: "/img/blogs/introduction-to-cryptography-and-cyber-security.jpg",
    description:
      "In the realm of cyber security, cryptography stands as a critical tool for protecting information.",
    slug: "introduction-to-cryptography-and-cyber-security",
  },
  {
    id: 3,
    title: "Getting started with Mern",
    image: "/img/blogs/mern.jpg",
    description:
      " Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
    slug: "getting-started-with-mern",
  },
  {
    id: 4,
    title: "Getting started with Vite",
    image: "/img/blogs/react-and-vite.jpg",
    description:
      "Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment",
    slug: "getting-started-with-vite",
  },
  {
    id: 5,
    title: "Dockerizing a Rust application with Multi-Stage Builds",
    image: "/img/blogs/rust-docker.png",
    description:
      "Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
    slug: "dockerizing-a-rust-application-with-multi-stage-builds",
  },
];

export default blogs;
