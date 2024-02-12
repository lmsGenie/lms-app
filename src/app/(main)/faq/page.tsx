import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

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
      <div className="flex flex-wrap items-center justify-between space-x-6">
        <div>Beginning</div>
        <div className="flex-1">
          <Accordion
            type="single"
            collapsible
            className="px-4 outline outline-1 outline-gray-100"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>End</div>
      </div>
    </section>
  </main>
);

export default page;
