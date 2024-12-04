import React from "react";
import { getAllPosts } from "@/lib/api";
import BlogSelector from "@/components/blogSection/blog-selector";
import { notFound } from "next/navigation";

function Page() {
  const allPosts = getAllPosts();
  console.log("all posts", allPosts.length);
  if (allPosts.length === 0) return notFound();
  return <BlogSelector />;
}

export default Page;
