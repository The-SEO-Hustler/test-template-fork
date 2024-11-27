import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  schema?: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
