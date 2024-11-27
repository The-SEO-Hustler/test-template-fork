import React from "react";
import { pageData } from "@/lib/data";

import BlogSection1 from "@/components/blogSection/blog-section1";
import BlogSection2 from "@/components/blogSection/blog-section2";
import BlogSection3 from "@/components/blogSection/blog-section3";

import Components from "./_compoents";
export const metadata = {
  robots: { index: false },
};
function Page() {
  return (
    <div>
      <Components />
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Blog template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <BlogSection1 data={pageData.blogSection} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Blog template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <BlogSection2 data={pageData.blogSection} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Blog template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <BlogSection3 data={pageData.blogSection} />
        </div>
      </div>
    </div>
  );
}

export default Page;
