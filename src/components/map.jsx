import React from "react";
import Container from "@/components/Container";
const iconRender = (icon) => {
  return icon ? (
    <div dangerouslySetInnerHTML={{ __html: icon }} />
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-pin"
    >
      <path d="M12 17v5" />
      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </svg>
  );
};

function Map({ data }) {
  const { heading, icon, text, map } = data;
  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="flex-1 flex justify-center items-center">
        <Container>
          <div className="mb-4 py-6">
            <div className="flex gap-2 items-center mb-4 text-themep">
              {iconRender(icon)}
              <h2 className="text-3xl font-bold text-left mb-2 text-themep">
                {heading}
              </h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </Container>
      </div>

      <div className=" flex-[2] locationbox box-2 w-full">
        <div dangerouslySetInnerHTML={{ __html: map }} />
      </div>
    </section>
  );
}

export default Map;
