import Image from "next/image";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-5 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/80 ">
      <div className="w-full lg:w-2/5 lg:h-full">
        {image && (
          <Image
            src={image}
            alt="post cover"
            width={1300}
            height={1200}
            className="rounded aspect-video lg:aspect-auto lg:h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col space-y-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
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

const PortifolioSection = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="flex flex-col gap-y-8 items-center md:items-start md:flex-row md:justify-between">
          <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              {heading}
            </h2>
            <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <BlogCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortifolioSection;
