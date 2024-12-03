import React from "react";
import { pageData } from "@/lib/data";
import Blog1 from "./blog-section1";
import Blog2 from "./blog-section2";
import Blog3 from "./blog-section3";

const BlogSelector = () => {
  const BlogComponents = {
    1: Blog1,
    2: Blog2,
    3: Blog3,
  };

  let blogData = pageData.sections.find(
    (section) => section.type === "blogSection"
  );
  if (!blogData) {
    blogData = {
      templateNumber: 1,
      templateNumber: 1,
      heading: "Blog",
      text: null,
      tag: "articles",
    };
  }

  const SelectedBlog = BlogComponents[blogData.templateNumber] || Blog1;

  return <SelectedBlog data={blogData} />;
};

export default BlogSelector;
