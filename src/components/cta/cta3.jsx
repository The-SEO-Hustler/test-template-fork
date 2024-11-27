"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

const CtaSection3 = ({ data }) => {
  const { heading, text, button } = data;
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 text-center flex flex-col items-center space-y-8">
        <h2 className="font-semibold text-4xl text-gray-900 dark:text-white">
          {heading}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="text-gray-700 dark:text-gray-300 max-w-md mx-auto"
        ></div>
        <div className="flex gap-4 items-center">
          {button && (
            <Dialog>
              <DialogTrigger>
                <button className="bg-themep text-themef px-6 py-3 rounded-lg">
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
    </section>
  );
};

export default CtaSection3;
