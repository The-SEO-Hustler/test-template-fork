"use client";
import { useState } from "react";

export default function Faq2({ data }) {
  const { heading, text, items } = data;
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div id="faq" className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>

      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-gray-700 dark:text-gray-300"
      ></div>
      <div className="space-y-6 max-w-[800px] mx-auto">
        {items.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow-md"
            onClick={() => toggleOpen(idx)}
          >
            <div className="font-semibold text-lg cursor-pointer">
              <h3 className="ml-2 inline">{faq.question}</h3>
            </div>
            {openIndexes.includes(idx) && (
              <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-2">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
