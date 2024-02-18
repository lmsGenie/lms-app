"use client";

import { FAQS } from "@/sampledata.ts";

import { cn } from "@/lib/utils.ts";

function FaqHeading({
  active,
  handleClick,
}: {
  active: string;
  handleClick: (id: string) => void;
}) {
  return (
    <div className="outline outline-1 outline-gray-100">
      {FAQS.map((faq) => (
        <button
          className={cn(
            active === faq.id ? "bg-primary text-white" : "",
            "block w-full border-b px-4 py-3 text-start text-sm last:border-b-0"
          )}
          key={faq.id}
          type="button"
          onClick={() => handleClick(faq.id)}
        >
          {faq.heading}
        </button>
      ))}
    </div>
  );
}

export default FaqHeading;
