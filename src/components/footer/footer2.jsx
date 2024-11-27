import Link from "next/link";
import { pageData } from "@/lib/data";
import Image from "next/image";
const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const footerItems = [
  {
    id: 1,
    text: "Services",
    link: "/#services",
  },
  {
    id: 2,
    text: "faq",
    link: "/#faq",
  },
  {
    id: 3,
    text: "BLOG",
    link: "/blog",
  },
];

const FooterBlock = () => {
  return (
    <footer className="text-gray-700 dark:text-gray-300 px-5 py-2 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-3 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-14 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl">
        <div className="md:flex-1">
          <Link href="/">
            {pageData.website.logo ? (
              <Image
                src={pageData.website.logo}
                width={100}
                height={40}
                alt=""
              />
            ) : (
              <span className="inline-flex text-lg font-bold text-indigo-950 dark:text-white">
                {pageData.website.name}
              </span>
            )}
          </Link>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerItems.map((item) => (
              <FooterItem key={item.id} {...item} />
            ))}
          </ul>
        </nav>
        <div className="md:flex-1 flex justify-center md:justify-end gap-3"></div>
      </div>
    </footer>
  );
};

export default FooterBlock;
