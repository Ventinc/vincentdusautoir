import { useEffect, useState } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return;
    }

    // Try to save to clipboard then save it in the state if worked
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.warn("Copy failed", error);
        setIsCopied(false);
      });
  };

  useEffect(() => {
    let copyTimeout: number | null = null;

    if (isCopied) {
      copyTimeout = window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      if (copyTimeout) {
        clearTimeout(copyTimeout);
      }
    };
  }, [isCopied]);

  return { isCopied, copy };
};
