"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

const CtaSection2 = ({ data }) => {
  const { heading, text, button } = data;
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
          <div className="absolute right-0 top-0 h-full w-full flex justify-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-themep rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-themep/5 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div>
          <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-themep rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-themep/50 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div>
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
            <h2 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
              <span className="text-themep">{heading}</span>
            </h2>
            <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
              {button && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="outline-none h-12 px-5 rounded-xl bg-themep text-themef flex items-center">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection2;
