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
    title: "10 Steps to Land a Job in UI/UX Design",
    image: "/img/blogs/04-ux-job-design.png",
    description:
      " Are you passionate about design and dreaming of a career in it? Or maybe you are already in the design space and looking to pivot into UI/UX? ",
    slug: "ux-ui-design-job",
  },
  {
    id: 3,
    title: "UX Designers Future with AI",
    image: "/img/blogs/03-ui-ux.png",
    description:
      "The impact of technology on UX design is undeniable. Automation and artificial intelligence are making it easier to identify user needs and create tailored experiences.",
    slug: "ux-designers-ai",
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
