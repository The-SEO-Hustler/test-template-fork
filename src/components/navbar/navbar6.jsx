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
    isActive: false,
    text: "Services",
    link: "/#services",
  },
  {
    id: 2,
    isActive: false,
    text: "faq",
    link: "/#faq",
  },
  {
    id: 3,
    isActive: false,
    text: "Blog",
    link: "/posts",
  },
];

const Navbar6 = ({ sample = false }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNavbar();
        }}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        } ${sample && "!z-0"}`}
      />
      <header
        className={`${
          sample && "!z-0"
        } sticky left-0 top-0 w-full flex items-center h-20 bg-white border-b border-b-gray-200 dark:bg-gray-950 dark:border-b-gray-800 z-40`}
      >
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="w-full flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-r border-r-gray-200 dark:border-r-gray-800 pr-3 relative py-3 children:flex"
            >
              <span
                aria-hidden="true"
                className={`
                            h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                            ${
                              openNavbar
                                ? " rotate-45 translate-y-[0.33rem]"
                                : ""
                            }
                        `}
              />
              <span
                aria-hidden="true"
                className={`
                            mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-200 transition duration-300
                            ${
                              openNavbar
                                ? " -rotate-45 -translate-y-[0.33rem]"
                                : ""
                            }
                        `}
              />
            </button>
          </div>
          <div
            className={`
                    top-full absolute left-0 bg-white dark:bg-gray-950 dark:lg:bg-transparent
                     lg:flex w-full ease-linear duration-300
                    lg:relative lg:bg-transparent border-b border-b-gray-200 dark:border-b-gray-800 lg:border-b-0
                    ${
                      openNavbar
                        ? ""
                        : "invisible opacity-0 lg:visible lg:opacity-100"
                    }
                `}
          >
            <ul className=" px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-5 text-themep dark:text-gray-300 py-4 lg:py-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`
                                        relative py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                                       
                                    `}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-1">
            <Link
              href="/"
              className="flex items-center gap-x-0.5 text-gray-800 dark:text-gray-200"
            >
              {pageData.website.logo ? (
                <Image
                  src={pageData.website.logo}
                  width={100}
                  height={40}
                  alt=""
                />
              ) : (
                <span className="inline-flex text-lg font-bold text-indigo-950 dark:text-white whitespace-nowrap">
                  {pageData.website.name}
                </span>
              )}
            </Link>
          </div>
          <div className="flex justify-end items-center gap-x-1.5 sm:gap-x-2 w-full text-gray-700 dark:text-gray-300">
            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <div className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-themep dark:before:bg-gray-900 text-themef dark:text-white hover:before:scale-105">
                    <span className="relative">Contact</span>
                  </div>
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
        </nav>
      </header>
    </>
  );
};
export default Navbar6;
