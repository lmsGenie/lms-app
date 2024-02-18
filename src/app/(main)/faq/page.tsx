import React from "react";
import { FAQS } from "@/sampledata.ts";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import Icon from "@/components/icon/Icon.tsx";

const page = () => (
  <main>
    <section className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:py-10">
      <h2 className="text-xl font-bold">FAQs</h2>
      <p className="text-xs">
        <span className="text-gray-500">Home</span> / FAQs
      </p>
    </section>

    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16 lg:px-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold md:text-3xl">
          Frequently asked questions
        </h1>
        {/* Add a select menu */}
        {/* <select name="" id=""></select> */}
      </div>
      <div className="flex flex-wrap items-start justify-between space-x-6">
        <div>Beginning</div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="space-y-6">
            {FAQS.map((faq) => (
              <AccordionItem
                value={faq.id}
                key={faq.id}
                className="outline outline-1 outline-gray-100 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-4 text-sm data-[state=open]:bg-black data-[state=open]:text-white">
                  {faq.question} <Icon id="ArrowDown" />
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>End</div>
      </div>
    </section>
  </main>
);

export default page;
