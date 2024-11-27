"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "../form";

const CtaSection1 = ({ data }) => {
  const { heading, text, button } = data;
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="bg-gradient-to-br from-themep/5 to-gray-50 dark:from-gray-900 dark:bg-gray-800 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
          <div className="md:w-2/5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-black dark:text-white font-display font-bold leading-tight">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col md:flex-1 space-y-8">
            <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className="flex justify-center md:justify-start">
              {button && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="h-12 px-5 rounded-md flex items-center bg-themep text-themef">
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
export default CtaSection1;
