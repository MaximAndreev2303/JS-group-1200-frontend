import type { Post } from "../types/Post";

export const posts: Post[] = [
  {
    id: 1,
    title: "HTML",
    content: "HTML основы",
    author: "max",
    category: "frontend",
  },
  {
    id: 2,
    title: "CSS",
    content: "стили для сайта",
    author: "alex",
    category: "frontend",
  },
  {
    id: 3,
    title: "JavaScript",
    content: "массивы и функции",
    author: "dima",
    category: "JS",
  },
  {
    id: 4,
    title: "React",
    content: "компоненты и props",
    author: "max",
    category: "React",
  },
  {
    id: 5,
    title: "Node.js",
    content: "backend разработка",
    author: "alex",
    category: "backend",
  },
];