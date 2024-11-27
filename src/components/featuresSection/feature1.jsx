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

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:themep/90 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
        {iconRender(icon)}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div
          className="text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-themep/10 rounded-full" />
    </div>
  );
};

const Services1 = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-gray-900 dark:text-white font-semibold text-4xl">
            {heading}
          </h2>

          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
