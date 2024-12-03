"use client";
import { pageData } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

const navItems = [
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
    text: "Blog",
    link: "/posts",
  },
];
const Navbar5 = ({ sample = false }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  return (
    <header
      className={`${
        sample && "!z-0 !static"
      } absolute left-0 top-0 w-full flex items-center h-24 z-40`}
    >
      <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
        <div className="flex items-center min-w-max relative">
          <Link href="/" className="font-semibold flex items-center gap-x-2">
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
        <div
          className={`
                fixed inset-x-0 h-[100dvh] lg:h-max top-0  lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                ${
                  openNavbar
                    ? ""
                    : " -translate-y-10 opacity-0 invisible lg:visible"
                }
            `}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  href={navItem.link}
                  className="relative py-2.5 duration-300 ease-linear hover:text-themep "
                >
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-themep text-themep hover:text-white hover:bg-themep dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-950 rounded-xl">
                  Get in Touch
                </button>
              </DialogTrigger>
              <DialogContent
                onOpenAutoFocus={(event) => event.preventDefault()}
                className="sm:max-w-md"
              >
                <Form />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => {
              toggleNavbar();
            }}
            className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3"
          >
            <span className="sr-only">Toggle navbar</span>
            <span
              className={`
                            flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                            ${
                              openNavbar
                                ? "rotate-45 translate-y-[0.33rem]"
                                : ""
                            }
                        `}
            />
            <span
              className={`
                            flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                            ${
                              openNavbar
                                ? "-rotate-45 -translate-y-[0.33rem]"
                                : ""
                            }
                        `}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar5;
