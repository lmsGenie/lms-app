import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState<boolean | null>(null);

  const copyToClipboard = (text: string) => {
    //   to check empty text
    if (!text) {
      setCopied(false);
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          resolve();
        })
        .catch(() => {
          setCopied(false);
          reject();
        });
    });
  };

  return { copied, copyToClipboard };
};

export default useClipboard;
