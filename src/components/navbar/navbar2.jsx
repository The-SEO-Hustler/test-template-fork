"use client";
import { pageData } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

const Navbar2 = ({ sample = false }) => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }
        ${sample && "!z-0"}
        `}
      />

      <header
        className={`sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl ${
          sample && "!z-0"
        }`}
      >
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="text-xl font-semibold flex items-center gap-x-2"
            >
              {pageData.website.logo ? (
                <Image
                  src={pageData.website.logo}
                  width={100}
                  height={40}
                  alt=""
                />
              ) : (
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  {pageData.website.name}
                </span>
              )}
            </Link>
          </div>
          <div
            className={`
          absolute top-full  left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
          ${
            navIsOpened
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"
          }
        `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              <li>
                <Link
                  href="/#services"
                  className="relative py-2.5 duration-300 ease-linear hover:text-themep after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-themep"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#cases"
                  className="relative py-2.5 duration-300 ease-linear hover:text-themep after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-themep"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="relative py-2.5 duration-300 ease-linear hover:text-themep after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-themep"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="relative py-2.5 duration-300 ease-linear hover:text-themep after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-themep"
                >
                  Talk to Us
                </Link>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="px-6 items-center h-12 rounded-3xl text-themep border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
                    Book a Call
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
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span
                className={`
              flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              />
              <span
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar2;
