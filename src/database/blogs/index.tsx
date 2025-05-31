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
    title: "Getting started with Mern",
    image: "/img/blogs/mern.jpg",
    description:
      " Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
    slug: "getting-started-with-mern",
  },
  {
    id: 3,
    title: "Getting started with Vite",
    image: "/img/blogs/react-and-vite.jpg",
    description:
      "Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment",
    slug: "getting-started-with-vite",
  },
    {
    id: 4,
    title: "What is Google DeepMind AI?",
    image: "/img/blogs/02-deepmind.png",
    description:
      "DeepMind is an auxiliary of Google that centers around man-made brainpower. It utilizes a part of AI called AI",
    slug: "google-deepmind",
  },
      {
    id: 5,
    title: "What are backlinks for SEO",
    image: "/img/blogs/01-seo-image.png",
    description:
      "An SEO backlink is created when one website links to another, and they’re extremely important for SEO. ",
    slug: "google-backlinks",
  },



];

export default blogs;
