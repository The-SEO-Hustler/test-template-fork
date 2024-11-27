"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import s from "./style.module.css";
import Pagination from "./pagination";
import Controller from "./controller";

function TestimonialsSection2({ data = {} }) {
  const { heading, testimonials = [], text } = data;
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 py-20">
      <h2 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
        {heading}
      </h2>
      {text && (
        <div className={s.content} dangerouslySetInnerHTML={{ __html: text }} />
      )}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            730: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, id) => {
            return (
              <SwiperSlide key={id}>
                <Testimonial data={testimonial} />
              </SwiperSlide>
            );
          })}

          <div className="mt-8 flex gap-2 items-center">
            <Pagination />
            <Controller />
          </div>
        </Swiper>
      </div>
      <div className="flex-[0_0_auto] w-full mt-12 mb-10">
        {/* <Link href="#" className='flex gap-4 items-center'>
          <span>
            Next Chapter
          </span>
          <CornerRightDown strokeWidth={1.25} />
        </Link> */}
      </div>
    </div>
  );
}
const Testimonial = ({ data }) => {
  return (
    <div className="rounded-[10px] flex flex-col md:flex-row w-full border border-primary p-5 sm:py-10 sm:px-8 gap-10 sm:gap-12">
      <div>
        <div
          className={`min-w-[116px] min-h-[116px] max-h-[116px] max-w-[116px] relative w-full aspect-square ${s.imageAnimation}`}
        >
          <div className={`absolute top-0 left-0 w-full h-full ${s.waves}`}>
            <span
              className={`${s.waveTop} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-t border-primary`}
            ></span>
            <span
              className={`${s.waveTop} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-t border-primary`}
            ></span>
            <span
              className={`${s.waveTop} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-t border-primary`}
            ></span>
            <span
              className={`${s.waveTop} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-t border-primary`}
            ></span>
          </div>
          {data.image && (
            <Image
              src={data.image}
              alt=""
              className="object-cover border-2 border-primary rounded-full w-full"
              fill
            />
          )}
          <div className={`absolute top-0 left-0 w-full h-full ${s.waves}`}>
            <span
              className={`${s.waveBottom} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-b border-primary`}
            ></span>
            <span
              className={`${s.waveBottom} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-b border-primary`}
            ></span>
            <span
              className={`${s.waveBottom} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-b border-primary`}
            ></span>
            <span
              className={`${s.waveBottom} block w-full h-full opacity-50 absolute top-0 left-0 rounded-full border-b  border-primary`}
            ></span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="md:text-5xl text-3xl font-extrabold mb-4 tracking-tight">
          {data.authorName}
        </h3>
        <div className="flex gap-2 items-center mb-10 flex-wrap">
          <div className="font-semibold">{data.authorPosition}</div>
        </div>
        <div
          className={s.content}
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      </div>
    </div>
  );
};
export default TestimonialsSection2;
