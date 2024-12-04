import Image from "next/image";
import { ButtonHero3 } from "./buttons";

export default function HeroSection3({ data }) {
  const { heading, text, button } = data;
  return (
    <>
      <section className="py-4 mt-8 sm:mt16 lg:mt-0">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className=" font-semibold leading-tight text-black dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <div
              className=" flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none flex-col md:flex-row"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <ButtonHero3 button={button} />
            </div>
          </div>
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src="/hero.webp"
                alt=""
                priority
                width={600}
                height={500}
                className="w-full h-full object-cover z-30"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src="/hero2.webp  "
                alt=""
                priority
                height={600}
                width={500}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
