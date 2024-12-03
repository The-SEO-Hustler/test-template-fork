"use client";
import { pageData } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";
import { Menu } from "lucide-react";

const Navbar4 = ({ sample = false }) => {
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
        className={`fixed bg-gray-800/40 inset-0 z-30  ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }
        ${sample && "!z-0"}
        `}
      />
      <header
        className={`${
          sample && "!z-0 !static"
        } fixed left-0  dark:bg-gray-950 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-800 z-40`}
      >
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            >
              {pageData.website.logo ? (
                <Image
                  src={pageData.website.logo}
                  width={100}
                  height={40}
                  alt=""
                />
              ) : (
                <span className="inline-flex text-lg font-bold text-themep dark:text-white">
                  {pageData.website.name}
                </span>
              )}
            </Link>
          </div>
          <div
            className={`
                    absolute top-full lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 lg:transition-none ease-linear
                    ${
                      openNavbar
                        ? "translate-y-0 rotate-0 opacity-100 visible"
                        : " translate-y-10 -rotate-12 opacity-0 invisible lg:visible lg:-rotate-0"
                    }
                `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-800 dark:text-gray-200 lg:w-full lg:justify-center">
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
              <div className="flex items-center ">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative text-themep dark:text-gray-200 px-1.5">
                      <span>Contact</span>
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
          </div>
          <div className="flex items-center lg:hidden gap-x-4">
            <div className="flex items-center gap-x-4 lg:hidden">
              <div className="flex">
                <button
                  onClick={() => {
                    toggleNavbar();
                  }}
                  aria-label="Toggle navbar"
                  className="outline-none border-l border-l-emerald-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar4;
