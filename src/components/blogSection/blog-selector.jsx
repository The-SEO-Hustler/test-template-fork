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

  const SelectedBlog =
    BlogComponents[pageData.blogSection.templateNumber] || Blog1;

  return <SelectedBlog data={pageData.blogSection} />;
};

export default BlogSelector;
