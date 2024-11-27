"use client";

import React, { useState } from "react";
import s from "./style.module.css";
import Navbar1 from "@/components/navbar/navbar1";
import Navbar2 from "@/components/navbar/navbar2";
import Navbar3 from "@/components/navbar/navbar3";
import Navbar4 from "@/components/navbar/navbar4";
import Navbar5 from "@/components/navbar/navbar5";
import Navbar6 from "@/components/navbar/navbar6";
import Navbar7 from "@/components/navbar/navbar7";
import Hero1 from "@/components/hero/hero1";
import Hero2 from "@/components/hero/hero2";
import { pageData } from "@/lib/data";
import HeroSection3 from "@/components/hero/hero3";
import HeroSection4 from "@/components/hero/hero4";
import HeroSection5 from "@/components/hero/hero5";
import HeroSection6 from "@/components/hero/hero6";
import HeroSection7 from "@/components/hero/hero7";
import HeroSection8 from "@/components/hero/hero8";

// import BlogSection1 from "@/components/blogSection/blog-section1";
// import BlogSection2 from "@/components/blogSection/blog-section2";
// import BlogSection3 from "@/components/blogSection/blog-section3";

import FeatureSection1 from "@/components/featuresSection/feature1";
import FeatureSection2 from "@/components/featuresSection/feature2";
import FeatureSection3 from "@/components/featuresSection/feature3";
import FeatureSection4 from "@/components/featuresSection/feature4";
import Faq1 from "@/components/faq/faq1";
import Faq2 from "@/components/faq/faq2";
import Cases1 from "@/components/caseStudies/cases1";
import Cases2 from "@/components/caseStudies/cases2";
import Cases3 from "@/components/caseStudies/cases3";
import Cases4 from "@/components/caseStudies/cases4";
import TestimonialsSection1 from "@/components/testimonials/testimonials1";
import TestimonialsSection2 from "@/components/testimonials/testimonials2";
import CtaSection1 from "@/components/cta/cta1";
import CtaSection2 from "@/components/cta/cta2";
import CtaSection3 from "@/components/cta/cta3";

import FooterBlock1 from "@/components/footer/footer1";
import FooterBlock2 from "@/components/footer/footer2";

import PortifolioSection1 from "@/components/portifolio/portifolio1";
import PortifolioSection2 from "@/components/portifolio/portifolio2";
import PortifolioSection4 from "@/components/portifolio/portifolio4";
import PortifolioSection3 from "@/components/portifolio/portifolio3";

export const metadata = {
  robots: { index: false },
};
function Components() {
  const [password, setPassword] = useState("");
  const [isPasswordProtected, setIsPasswordProtected] = useState(true);

  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "0000") setIsPasswordProtected(false);
    else
      setMessage((prev) =>
        prev === "wrong password"
          ? "wrong password, try again"
          : "wrong password"
      );
  };

  return isPasswordProtected ? (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <p className={s.text}>This Page is password protected</p>
        <input
          className={s.input}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button type="submit" className={s.button}>
          Submit
        </button>
        <p className={s.message}>{message}</p>
      </form>
    </div>
  ) : (
    <div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 1</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar1 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 2</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar2 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 3</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar3 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 4</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar4 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 5</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar5 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 6</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar6 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Navbar template: 7</p>
        <div className=" border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Navbar7 sample={true} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Hero1 data={pageData.hero} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Hero2 data={pageData.hero} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection3 data={pageData.hero} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 4</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection4 data={pageData.hero} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 5</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection5 data={pageData.hero} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 6</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection6 data={pageData.hero} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 7</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection7 data={pageData.hero} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Hero template: 8</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <HeroSection8 data={pageData.hero} />
        </div>
      </div>

      {/* <div className="my-6 relative max-w-[1300px] mx-auto">
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
      </div> */}

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Features template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FeatureSection1 data={pageData.features} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Features template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FeatureSection2 data={pageData.features} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Features template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FeatureSection3 data={pageData.features} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Features template: 4</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FeatureSection4 data={pageData.features} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Faq template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Faq1 data={pageData.faq} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Faq template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Faq2 data={pageData.faq} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cases template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Cases1 data={pageData.cases} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cases template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Cases2 data={pageData.cases} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cases template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Cases3 data={pageData.cases} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cases template: 4</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <Cases4 data={pageData.cases} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Testimonials template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <TestimonialsSection1 data={pageData.testimonialsSection} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Testimonials template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <TestimonialsSection2 data={pageData.testimonialsSection} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cta template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <CtaSection1 data={pageData.cta} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cta template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <CtaSection2 data={pageData.cta} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Cta template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <CtaSection3 data={pageData.cta} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Portifolio template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <PortifolioSection1 data={pageData.portifolio} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Portifolio template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <PortifolioSection2 data={pageData.portifolio} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Portifolio template: 3</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <PortifolioSection3 data={pageData.portifolio} />
        </div>
      </div>
      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Portifolio template: 4</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <PortifolioSection4 data={pageData.portifolio} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Footer template: 1</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FooterBlock1 data={pageData.footer} />
        </div>
      </div>

      <div className="my-6 relative max-w-[1300px] mx-auto">
        <p className="mb-2">Footer template: 2</p>
        <div className="relative border-[10px] min-h-28 flex justify-center items-center border-gray-500 rounded-lg">
          <FooterBlock2 data={pageData.footer} />
        </div>
      </div>
    </div>
  );
}

export default Components;
