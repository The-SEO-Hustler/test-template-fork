const iconRender = (icon) => {
  return icon ? (
    <div dangerouslySetInnerHTML={{ __html: icon }} />
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <span className="p-2 rounded-md bg-themep/10 text-themep dark:bg-gray-900 dark:text-blue-500 flex w-max">
        {iconRender(icon)}
      </span>
      <h2 className="text-gray-800 dark:text-gray-100 text-xl font-semibold">
        {title}
      </h2>
      <div
        className="text-gray-700 dark:text-gray-300 mx-auto max-w-md"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

const Services4 = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-32" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col  space-y-16">
          <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
            <span className="mx-auto w-max pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-themep dark:before:bg-sky-600 text-themep dark:text-blue-500">
              Services
            </span>
            <h2 className="text-3xl font-semibold text-black dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              {heading}
            </h2>
            <div
              className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 sm:gap-x-12">
            {cards.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services4;
