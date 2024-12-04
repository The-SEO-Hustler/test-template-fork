import React from "react";
import { pageData } from "@/lib/data";
import TestimonialsSection1 from "./testimonials1";
import TestimonialsSection2 from "./testimonials2";

const TestimonialsSectionSelector = ({ data }) => {
  const TestimonialsSectionComponents = {
    1: TestimonialsSection1,
    2: TestimonialsSection2,
  };

  const SelectedTestimonialsSection =
    TestimonialsSectionComponents[data.templateNumber] || TestimonialsSection1;

  return <SelectedTestimonialsSection data={data} />;
};

export default TestimonialsSectionSelector;
