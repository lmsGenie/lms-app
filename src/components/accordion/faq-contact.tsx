import React from "react";

import { Button } from "../ui/button.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";

function FaqContact() {
  return (
    <div className="bg-slate-100 p-3">
      <h3>Don&apos;t find your answer!</h3>
      <p className="pt-1 text-xs text-gray-400">
        Don&apos;t worry, write your question here and our support team will
        help you.
      </p>
      <form className="mt-3 space-y-2">
        <Input
          type="text"
          placeholder="Subject"
          className="w-full px-2 py-1 text-sm placeholder:text-sm"
        />
        <Textarea
          className="w-full px-2 py-1 text-sm placeholder:text-sm"
          placeholder="Message" // FIXME: Needs fixing as this is not working for some reason
        />
        <Button type="submit" variant="default" className="">
          Submit Question
        </Button>
      </form>
    </div>
  );
}

export default FaqContact;
