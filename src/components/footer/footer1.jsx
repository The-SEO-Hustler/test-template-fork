import Link from "next/link";
import Image from "next/image";
import { pageData } from "@/lib/data";
const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-themep dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        id: 1,
        text: "Services",
        link: "/#services",
      },
      {
        id: 2,
        text: "Case Studies",
        link: "/#cases",
      },
      {
        id: 3,
        text: "FAQs",
        link: "/#faq",
      },
    ],
  },
];

const FooterBlock1 = () => {
  return (
    <footer className="pt-16 md:pt-20 bg-gray-100 dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full text-gray-700 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-800">
          <div className="flex">
            <Link href="/">
              {pageData.website.logo ? (
                <Image
                  src={pageData.website.logo}
                  width={100}
                  height={40}
                  alt=""
                />
              ) : (
                <span className="inline-flex text-lg font-bold text-indigo-950 dark:text-themef">
                  {pageData.website.name}
                </span>
              )}
            </Link>
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-gray-700 dark:text-gray-300">
          {footerBlocks.map((footerBlock) => (
            <FooterBlockItem key={footerBlock.id} {...footerBlock} />
          ))}
          <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1"></div>
        </nav>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p>
              {" "}
              © {new Date().getFullYear()} {pageData.website.name}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock1;
