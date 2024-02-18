"use client";

import { useEffect, useState } from "react";
import { FAQS } from "@/sampledata.ts";

import { IFaqs } from "@/types/accordion/index.ts";
import FaqAccordion from "@/components/accordion/faq-accordion.tsx";
import FaqHeading from "@/components/accordion/faq-heading.tsx";

function AccordionPage() {
  const currentUrl = window.location.origin + window.location.pathname;

  const [active, setActive] = useState(FAQS[0].id);
  const [faqs, setFaqs] = useState<IFaqs[]>(FAQS[0].faqs);

  function faqFromUrl(id: string) {
    const foundFaq = FAQS.find((faq) => faq.id === id);
    if (foundFaq) setFaqs(foundFaq.faqs);
  }

  useEffect(() => {
    const fullUrl = window.location.href;

    if (fullUrl.includes("#")) {
      const currentHeading = fullUrl.split("#")[1];

      setActive(currentHeading);
      faqFromUrl(currentHeading);
    }
  }, [currentUrl]);

  const handleClick = (id: string) => {
    const newPath = `${currentUrl}#${id}`;

    window.history.replaceState(null, "", newPath);

    faqFromUrl(id);

    setActive(id);
  };

  return (
    <main>
      <section className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:py-10">
        <h2 className="text-xl font-bold">FAQs</h2>
        <p className="text-xs">
          <span className="text-gray-500">Home</span> / FAQs
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16 lg:px-8">
        <div className="mb-6">
          <h1 className="text-xl font-bold md:text-3xl">
            Frequently asked questions
          </h1>
          {/* Add a select menu */}
          {/* <select name="" id=""></select> */}
        </div>
        <div className="flex flex-wrap items-start justify-between space-x-6">
          <div className="flex-1">
            <FaqHeading active={active} handleClick={handleClick} />
          </div>
          <div className="flex-[2]">
            <FaqAccordion faqs={faqs} />
          </div>
          <div className="flex-1">End</div>
        </div>
      </section>
    </main>
  );
}

export default AccordionPage;
