import React from "react";
import Container from "./Container";
import Form from "./form";
function FormSection({ data }) {
  const { title, heading, text } = data;
  return (
    <section
      id="contact"
      className="bg-themep/70 text-white py-20 text-center max-w-full overflow-hidden"
    >
      <Container>
        {title && <h2 className="text-3xl font-bold mb-6 md:mb-10">{title}</h2>}

        <div className="flex md:flex-row flex-col md:gap-10 gap-y-4 items-center">
          <div className="flex-1 text-left">
            <div className="max-w-[450px] leading-relaxed">
              {heading && <h3 className="text-2xl mb-4">{heading}</h3>}
              <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FormSection;
