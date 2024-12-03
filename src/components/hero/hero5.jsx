import Image from "next/image";
import { ButtonHero5 } from "./buttons";

export default function HeroSection5({ data }) {
  const { heading, text, button } = data;
  return (
    <>
      <section className="relative pt-16 lg:pt-36">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-themep blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-themep blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-themep to-themep/40 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-gray-900 dark:text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-themep from-20% via-themep/70 via-30% to-themep/95">
                {heading}
              </span>
            </h1>
            <div
              className="mt-8 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <ButtonHero5 button={button} />
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/hero.webp"
              priority
              alt=""
              width={650}
              height={559}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}
