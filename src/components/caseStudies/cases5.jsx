const Cases5 = ({ data }) => {
  const { heading, text, cards } = data;
  return (
    <section className="py-20" id="cases">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
            {heading}
          </h2>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6"
              >
                <div className="flex flex-col justify-end space-y-5 text-gray-300">
                  {card.title && (
                    <h3 className="font-semibold text-2xl text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                  )}
                  <div
                    className="text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cases5;
