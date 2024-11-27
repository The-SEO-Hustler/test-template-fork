"use client";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";
export default function HeroSection({ data }) {
  const { heading, text, button, tag } = data;
  return (
    <>
      <section className="py-8 mt-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-10">
          <div className="lg:w-1/2 lg:py-10 xl:py-12 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto ">
            <h1 className="font-semibold leading-tight text-black dark:text-white text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <div
              className="mt-8 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-transparent bg-themep text-themef">
                    {button}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </DialogTrigger>
                <DialogContent
                  onOpenAutoFocus={(event) => event.preventDefault()}
                  className="sm:max-w-md"
                >
                  <Form />
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center gap-1 mt-10 justify-center lg:justify-start gap-x-3">
              <div className="flex items-center -space-x-2">
                <Image
                  src="/customized-seo.webp"
                  width={2250}
                  height={1400}
                  alt="listener avatar"
                  className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950"
                />
                <Image
                  src="/customized-seo.webp"
                  width={2250}
                  height={1400}
                  alt="listener avatar"
                  className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950"
                />
                <Image
                  src="/customized-seo.webp"
                  width={2250}
                  height={1400}
                  alt="listener avatar"
                  className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-gray-600 text-sm dark:text-gray-300">
                  {tag}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-10 py-1.5 bg-white text-center border border-gray-100 shadow-lg shadow-gray-200/40">
              <p className="text-gray-600">{tag}</p>
            </div>
            <Image
              src="/hero.webp"
              width={2250}
              height={1400}
              alt=""
              className="lg:w-full lg:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
