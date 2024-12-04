"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

import React from "react";

export function ButtonHero8({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-transparent bg-themep text-themef">
          {button}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={16}
            height={16}
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-md"
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export function ButtonHero6({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-6 h-11 flex items-center rounded-lg bg-themep dark:bg-white text-themef dark:text-gray-900 text-sm transition ease-linear hover:bg-themep">
          {button}
        </button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-md"
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export function ButtonHero5({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex text-themef justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-themep hover:after:opacity-100 hover:after:scale-[2.5] bg-themep border-transparent hover:border-themep"
        >
          <span className="hidden sm:flex relative z-[5]">{button}</span>
          <span className="flex sm:hidden relative z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-md"
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export function ButtonHero4({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center h-12 px-6 rounded-full bg-themep text-themef border border-themep">
          {button}
        </div>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-md"
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export function ButtonHero3({ button }) {
  <Dialog>
    <DialogTrigger asChild>
      <button className="px-6 items-center h-12 rounded-3xl bg-themep text-themef duration-300 ease-linear flex justify-center w-full sm:w-auto">
        {button}
      </button>
    </DialogTrigger>
    <DialogContent
      onOpenAutoFocus={(event) => event.preventDefault()}
      className="sm:max-w-md"
    >
      <Form />
    </DialogContent>
  </Dialog>;
}

export function ButtonHero1({ button }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-themep text-themef hover:bg-opacity-80">
          {button}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="sm:max-w-md"
      >
        <Form />
      </DialogContent>
    </Dialog>
  );
}
