import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ data }) {
  const { heading, text, button, tag } = data;
  return (
    <>
      <section className="relative w-full">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-themep opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-themep/40 opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40"></div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-44 left-0 hidden dark:flex"
          >
            <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
            <div className="lg:py-6">
              <div className="text-center lg:text-left">
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                  {tag}
                </span>
                <h1 className="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  {heading}
                </h1>
              </div>
              <div
                className="text-gray-600 dark:text-gray-300 mt-8 text-center lg:text-left mx-auto max-w-xl"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
              <div className="flex items-center gap-4 mt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <Link
                  href="#contact"
                  className="px-7 relative text-themep h-12 flex w-full sm:w-max justify-center items-center before:bg-themep/5 dark:before:bg-themep/10 before:absolute before:inset-0 before:rounded-full before:transition-transform before:ease-linear hover:before:scale-105 active:before:scale-95"
                >
                  <span className="relative text-themep flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {button}
                  </span>
                </Link>
              </div>
              <div className="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0 mt-8 w-max mx-auto lg:mx-0">
                <div className="flex items-center -space-x-2">
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    height={900}
                    width={1240}
                    alt="avatar"
                    className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    height={900}
                    width={1240}
                    alt="avatar"
                    className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    height={900}
                    width={1240}
                    alt="avatar"
                    className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    height={900}
                    width={1240}
                    alt="avatar"
                    className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 object-cover"
                  />
                  <span className="w-10 h-10 rounded-full ring-4 ring-white dark:ring-gray-950 bg-gray-200 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 flex items-center justify-center">
                    300+
                  </span>
                </div>
                <span className="pl-2 text-gray-600 dark:text-gray-200">
                  {" "}
                  WordWide listners{" "}
                </span>
              </div>
            </div>
            <div className="lg:h-full hidden md:flex">
              <div className="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-themep/50 to-themep/5 dark:from-[#570cac] dark:to-emerald-500 blur-2xl"></div>
                <div className="absolute w-3/5 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl bg-whitee dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/hero.webp"
                    alt=""
                    width={900}
                    height={900}
                    loading="lazy"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -translate-y-1/2 top-1/2 h-[calc(80%-2rem)] w-[calc(40%-20px)] p-1 rounded-3xl bg-white dark:bg-gray-950  shadow-lg shadow-gray-100 dark:shadow-transparent  border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/hero2.webp"
                    alt=""
                    width={900}
                    height={900}
                    loading="lazy"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
