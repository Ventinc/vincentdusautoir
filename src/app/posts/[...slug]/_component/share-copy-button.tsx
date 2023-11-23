"use client";

import { TbCheck, TbCopy } from "react-icons/tb";
import { IconButton } from "~/components/ui/button";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";

export const ShareCopyButton = ({ value }: { value: string }) => {
  const { copy, isCopied } = useCopyToClipboard();
  return (
    <IconButton
      onClick={() => copy(value)}
      rounded="full"
      variant={isCopied ? "success" : "default"}
      size="sm"
    >
      {isCopied ? <TbCheck /> : <TbCopy />}
    </IconButton>
  );
};
