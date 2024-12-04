import Image from "next/image";
import Link from "next/link";

export default function HeroSection2({ data }) {
  const { heading, text, button, tag } = data;
  return (
    <>
      <main className="w-full">
        <section className="relative pt-10 xl:pt-14">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
                {heading}
              </h1>
              <div
                className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>

              <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link
                  href="#contact"
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-themef hover:before:bg-themep before:bg-themep hover:before:scale-105"
                >
                  <span className="relative">{button}</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
              <Image
                src="/hero.webp"
                alt=""
                priority
                width={650}
                height={500}
                className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full"
              />
              <div className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 -bottom-10 w-60 p-4 rounded-lg bg-white dark:bg-gray-950 border dark:border-gray-800">
                <div className="flex children:ring-4 children:ring-white dark:children:ring-gray-950 children:w-9 children:h-9 children:object-cover children:-ml-1 children:rounded-full">
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    alt="employee image"
                    width={32}
                    height={32}
                    className="object-cover rounded-full ring-4 overflow-hidden"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    alt="employee image"
                    width={32}
                    height={32}
                    className="object-cover rounded-full ring-4 overflow-hidden"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    alt="employee image"
                    width={32}
                    height={32}
                    className="object-cover rounded-full ring-4 overflow-hidden"
                  />
                  <Image
                    src="/assets/blog/authors/joe.jpeg"
                    alt="employee image"
                    width={32}
                    height={32}
                    className="object-cover rounded-full ring-4 overflow-hidden"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-indigo-950 dark:text-white">
                    {tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
