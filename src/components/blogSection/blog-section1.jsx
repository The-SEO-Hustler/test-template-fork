import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import DateFormatter from "@/components/date-formatter";

const BlogCard = ({ coverImage, date, author, title, slug }) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="bg-white  shadow-lg shadow-gray-200/50  border border-gray-200/50 "
    >
      <Image
        src={coverImage}
        alt="illustration"
        width={1300}
        height={1400}
        className="w-full aspect-[5/3] object-cover bg-gray-100 "
      />
      <div className="relative p-4 pt-10">
        <div className="absolute right-4 -top-8 bg-themep px-4 py-0.5 flex flex-col">
          <p className="font-bold text-2xl text-themef">
            <DateFormatter dateString={date} />
          </p>
        </div>
        <div className="flex items-center text-gray-500 ">
          <span>{author.name}</span>
        </div>
        <h1 className="text-xl my-6 font-semibold text-gray-900 ">{title}</h1>
        <div className="text-themep transition hover:text-opacity-90 flex items-center gap-x-3 group">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 transition-all ease-linear group-hover:ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const BlogSection1 = async ({ all = false, data }) => {
  const allPosts = getAllPosts();
  const { heading, text, tag } = data;

  const postsToShow = all ? allPosts : allPosts.slice(0, 3);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {heading}
          </h1>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
        {!all && (
          <div className="flex justify-center">
            <Link
              href="/posts"
              className="px-5 py-2.5 border border-gray-100 text-themep flex items-center gap-x-3"
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
    </section>
  );
};
export default BlogSection1;
