import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq({ data }) {
  const { heading, text, items } = data;
  return (
    <div id="faq" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-gray-700 dark:text-gray-300"
      ></div>
      <div className="space-y-6 max-w-[800px] mx-auto">
        <Accordion type="single" collapsible>
          {items.map((faq, idx) => {
            return (
              <AccordionItem value={idx} key={idx}>
                <AccordionTrigger>
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
