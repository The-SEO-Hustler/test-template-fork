import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white h-full dark:bg-gray-950 border border-gray-100 dark:border-gray-900 duration-300 ease-linear hover:border-gray-200 dark:hover:border-gray-800 p-0.5 flex flex-col group">
      {image && (
        <Image
          alt="banner image"
          className="w-full aspect-video object-cover relative"
          src={image}
          width={1263}
          height={1291}
        />
      )}
      <div className="px-4 lg:px-6 py-5 lg:py-8">
        {title && (
          <h3 className="text-gray-900 dark:text-white font-semibold text-2xl lg:text-3xl">
            {title}
          </h3>
        )}
        <div
          className="text-gray-700 dark:text-gray-300 text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

const BlogSection = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="flex md:justify-between">
          <div className="text-center space-y-6 max-w-2xl mx-auto md:mx-0 md:text-left">
            <div className="text-center md:text-left md:max-w-lg space-y-5">
              <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
                {heading}
              </h2>
              <div
                className="text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 rounded-t-lg">
          {cards.map((card, idx) => (
            <BlogCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
