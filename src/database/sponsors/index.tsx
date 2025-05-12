export interface Sponsor {
  name: string;
  image: string;
  description: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  isPastSponsor?: boolean;
}

const sponsors: Sponsor[] = [
  {
    name: "Carlos Romero",
    image: "https://avatars.githubusercontent.com/u/119690391?v=4",
    description: "Computer Science Student of La Salle",
    github: "https://github.com/carlosromerorodriguez",
    linkedin: "https://www.linkedin.com/in/carlos-romero-rdgz/",
  },
  {
    name: "Sanjay Viswanathan",
    image: "https://github.com/sanjay-kv.png",
    description: "Data Engineer",
    github: "https://github.com/sanjay-kv",
    linkedin: "https://www.linkedin.com/in/sanjay-k-v/",
    twitter: "https://x.com/sanjay_kv_",
  },
  {
    name: "Rahul Dravid",
    image: "https://github.com/sanjay-kv.png",
    description: "Data Engineer",
    github: "https://github.com/sanjay-kv",
    linkedin: "https://www.linkedin.com/in/sanjay-k-v/",
    twitter: "https://x.com/sanjay_kv_",
  },
  {
    name: "Sanjay Singhania",
    image: "https://github.com/sanjay-kv.png",
    description: "Data Engineer",
    github: "https://github.com/sanjay-kv",
    linkedin: "https://www.linkedin.com/in/sanjay-k-v/",
    twitter: "https://x.com/sanjay_kv_",
  },
  {
    name: "Old Sponsor A",
    image: "https://github.com/sanjay-kv.png",
    description: "Past supporter of the Hive",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com",
    isPastSponsor: true,
  },
  {
    name: "Old Sponsor B",
    image: "https://github.com/sanjay-kv.png",
    description: "Legacy sponsor",
    github: "https://github.com/example2",
    linkedin: "https://linkedin.com",
    isPastSponsor: true,
  },
];

export default sponsors;
