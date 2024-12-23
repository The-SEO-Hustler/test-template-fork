import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import DateFormatter from "@/components/date-formatter";
const BlogCard = ({ coverImage, date, author, title, slug }) => {
  return (
    <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 px-px rounded-xl">
      <div className="rounded-[11px] bg-gray-200 dark:bg-gray-800 relative">
        <Image
          src={coverImage}
          alt="article cover"
          width={1400}
          height={800}
          className="rounded-[7px] w-full aspect-video object-cover"
        />
        <div className="absolute -bottom-8 z-10 flex inset-x-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2">
          <div className="flex items-center gap-x-4">
            <Image
              src={author.picture}
              alt
              width={800}
              height={800}
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-gray-800 dark:text-gray-50 font-semibold">
                {author.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 px-5 pb-5 space-y-4">
        <span className="text-themep dark:text-blue-400 text-sm">
          <DateFormatter dateString={date} />
        </span>
        <h1 className="text-gray-900 dark:text-white text-xl font-semibold">
          {title}
        </h1>

        <Link
          href={`/posts/${slug}`}
          className="flex items-center gap-x-2 text-themep dark:text-blue-400"
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
const posts = [
  {
    id: 1,
    cover: "/images/working-on-housing-project.jpg",
    author: {
      avatar: "/images/sidebiew.webp",
      name: "John Doe",
      role: "Web Developer",
    },
    title: "How to Sructure your reactJs Application like a Legend",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
  },
  {
    id: 2,
    cover: "/images/working-on-housing-project.jpg",
    author: {
      avatar: "/images/sidebiew.webp",
      name: "John Doe",
      role: "Web Developer",
    },
    title: "How to deploy your JS fullstack app using Vercel and Railway",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
  },
  {
    id: 3,
    cover: "/images/working-on-housing-project.jpg",
    author: {
      avatar: "/images/sidebiew.webp",
      name: "John Doe",
      role: "Web Developer",
    },
    title: "How to deploy your JS fullstack app using Vercel and Railway",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
  },
];
const BlogSection = ({ all = false, data }) => {
  const allPosts = getAllPosts();
  const { heading, text, tag } = data;

  const postsToShow = all ? allPosts : allPosts.slice(0, 6);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-themep dark:before:bg-sky-600 text-themep dark:text-sky-500">
            {tag}
          </span>
          <h2 className="text-3xl font-semibold text-themep/95 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
            {heading}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: text }} className="my-2" />
          {!all && (
            <div className="flex justify-center mt-2">
              <Link
                href="#"
                className="px-5 py-2.5 rounded-xl bg-themep dark:bg-gray-900 border border-themep dark:border-gray-800 text-themef dark:text-gray-300 flex items-center gap-x-3"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
