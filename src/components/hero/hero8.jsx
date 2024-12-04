import Image from "next/image";
import { ButtonHero8 } from "./buttons";
export default function HeroSection({ data }) {
  const { heading, text, button, tag } = data;
  return (
    <>
      <section className="py-8 mt-4 md:mt-24">
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
              <ButtonHero8 button={button} />
            </div>
            <div className="flex items-center gap-1 mt-10 justify-center lg:justify-start gap-x-3">
              <div className="flex items-center -space-x-2">
                <Image
                  src="/hero/person1.jpeg"
                  width={40}
                  priority
                  height={40}
                  alt="listener avatar"
                  className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950"
                />
                <Image
                  src="/hero/person2.jpeg"
                  width={40}
                  priority
                  height={40}
                  alt="listener avatar"
                  className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950"
                />
                <Image
                  src="/hero/person3.jpeg"
                  width={40}
                  priority
                  height={40}
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
              width={800}
              height={500}
              alt=""
              priority
              className="lg:w-full lg:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
