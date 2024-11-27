import React from "react";
import { pageData } from "@/lib/data";
import TestimonialsSection1 from "./testimonials1";
import TestimonialsSection2 from "./testimonials2";

const TestimonialsSectionSelector = () => {
  const TestimonialsSectionComponents = {
    1: TestimonialsSection1,
    2: TestimonialsSection2,
  };

  const SelectedTestimonialsSection =
    TestimonialsSectionComponents[
      pageData.testimonialsSection.templateNumber
    ] || TestimonialsSection1;

  return <SelectedTestimonialsSection data={pageData.testimonialsSection} />;
};

export default TestimonialsSectionSelector;
