import Image from "next/image";

const TestimonialSection = ({ data }) => {
  const { heading, text, testimonials } = data;
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl">
          <h2 className="font-bold text-gray-800 dark:text-white text-3xl mb-4">
            {heading}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => {
            return (
              <div
                key={idx}
                className="p-5 md:p-6 space-y-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-100/70 dark:shadow-gray-800/80"
              >
                <div
                  className="font-medium text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></div>
                <div className="flex items-start gap-4">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      width={1900}
                      height={1200}
                      alt="Author avatar"
                      className="w-12 h-12 rounded-full flex object-cover"
                    />
                  )}
                  <div className="space-y-1 flex-1">
                    <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
                      {testimonial.authorName}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.authorPosition}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
