"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import pageNotFoundImage from "@/assets/404.png";

import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  const router = useRouter();

  return (
    <main className="grid grid-cols-1 grid-rows-[250px_auto] md:grid-cols-2 md:grid-rows-1">
      <div className="w-[75%] space-y-2 self-end justify-self-center md:space-y-4 md:self-center md:justify-self-end">
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-xl font-semibold text-gray-100 dark:text-gray-50 md:text-2xl lg:text-5xl">
            Error 404
          </h1>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 md:text-xl lg:text-4xl">
            Oops! page not found
          </h2>
        </div>
        <p className="md:text-md text-sm text-gray-700 dark:text-gray-50 lg:text-lg">
          Something went wrong. Its look that your requested could not be found.
          It's look like the link is broken or the page is removed.
        </p>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
      <div className="ml-10 self-start  justify-self-center md:w-[90%] md:place-self-end">
        <Image src={pageNotFoundImage} alt="page not found" />
      </div>
    </main>
  );
};

export default PageNotFound;
