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
    <div className="rounded-lg h-auto flex flex-col p-6 md:p-8 bg-gray-100 dark:bg-gray-900">
      <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 w-max">
        <div className="w-12 h-12 flex items-center justify-center">
          {iconRender(icon)}
        </div>
      </div>
      <div className="space-y-5 mt-6">
        <h2 className="text-xl relative  font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div
          className="text-gray-700 dark:text-gray-300 text-justify line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

const Services3 = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-xl">
            <span className="rounded-lg bg-themep/15 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-themep dark:text-gray-100">
              Services
            </span>
            <h2 className="text-3xl font-semibold text-black dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">
              {heading}
            </h2>
          </div>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:items-stretch">
          {cards.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
