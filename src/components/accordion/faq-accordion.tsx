import { IFaqs } from "@/types/accordion/index.ts";

import Icon from "../icon/Icon.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";

function FaqAccordion({ faqs }: { faqs: IFaqs[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {faqs.map((faq) => (
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
  );
}

export default FaqAccordion;
