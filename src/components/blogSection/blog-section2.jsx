import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import DateFormatter from "@/components/date-formatter";

const BlogCard = ({ coverImage, date, author, title, slug }) => {
  return (
    <div className="rounded-md flex flex-col bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/60 dark:shadow-none border border-gray-200/70 dark:border-gray-800/80 p-4">
      <div className="relative">
        <Image
          src={coverImage}
          alt="illustration"
          width={1300}
          height={800}
          className="w-full rounded aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900"
        />
        <div className="absolute inset-x-2 bottom-2 px-3 py-1.5 rounded-sm bg-gray-800/80 backdrop-filter backdrop-blur-sm">
          <p className="font-semibold text-gray-100">By {author.name}</p>
          <div className="text-sm text-gray-300">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
      <Link
        href={`/posts/${slug}`}
        className="mt-5 text-xl font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </Link>
      <div className="flex flex-1 items-end">
        <Link
          href={`/posts/${slug}`}
          className="flex items-center gap-x-2 text-themep dark:text-blue-500"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BlogSection = ({ all = false, data }) => {
  const allPosts = getAllPosts();
  const { heading, text, tag } = data;

  const postsToShow = all ? allPosts : allPosts.slice(0, 6);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            {heading}
          </h2>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          {!all && (
            <div className="flex justify-center">
              <Link
                href="#"
                className="px-5 py-2.5 rounded-md border border-gray-100 dark:border-gray-900 text-themep dark:text-gray-300 flex items-center gap-x-3"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
