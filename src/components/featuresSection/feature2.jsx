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
    <div
      id="services"
      className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 xl:p-7 hover:cursor-default rounded-lg bg-gray-100 dark:bg-gray-900  group transition duration-300 z-20 hover:z-30 shadow-md shadow-transparent hover:shadow-gray-100/40 dark:hover:shadow-transparent border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:-translate-y-2 overflow-hidden relative"
    >
      <div className="absolute w-40 h-10 rounded-full border-8 border-sky-600/20 dark:border-sky-500/30 blur-md -z-10 -top-1 right-5 rotate-45" />
      <div className="flex min-w-max items-start">
        <div className="p-1.5 rounded-full  shadow-sm relative bg-gradient-to-br from-gray-100 to-neutral-300 dark:from-gray-900 dark:to-gray-700">
          <div className=" bg-gray-100 dark:bg-gray-900 rounded-full p-3 flex">
            {iconRender(icon)}
          </div>
        </div>
      </div>
      <div className="space-y-5 flex flex-col md:flex-1 relative">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
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

const Services2 = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-xl">
            <span className="text-themep dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-themep dark:before:bg-blue-500 before:rounded-full">
              Services
            </span>
            <h1 className="font-bold text-gray-800 dark:text-white text-3xl">
              {heading}
            </h1>
          </div>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
          {cards.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
