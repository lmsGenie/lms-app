"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-[80vh] items-center justify-center">
      <div className="space-y-2 md:space-y-4">
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-xl font-semibold text-gray-100 dark:text-gray-50 md:text-2xl lg:text-5xl">
            Unexpected Error
          </h1>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 md:text-xl lg:text-4xl">
            Oops! Something Went Wrong
          </h2>
        </div>
        <p className="md:text-md text-sm text-gray-700 dark:text-gray-50 lg:text-lg">
          It looks that some issue occurred while accessing this page. Please
          retry or contact support
          <Link href="mailto:dev.lmsgenie@gmail.com" className="font-semibold">
            dev.lmsgenie@gmail.com
          </Link>
        </p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Retry
        </Button>
      </div>
    </main>
  );
}

export default Error;
