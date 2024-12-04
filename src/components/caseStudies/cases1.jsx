import Image from "next/image";

const Cases1 = ({ data }) => {
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
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="relative aspect-[5/3.8] rounded-lg overflow-hidden"
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt="project cover"
                    width={1300}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                  {card.title && (
                    <h3 className="font-semibold text-white text-2xl">
                      {card.title}
                    </h3>
                  )}
                  <div
                    className="text-gray-300"
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
export default Cases1;
