"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { IconButton } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
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
      <Icon asChild>{isCopied ? <CheckIcon /> : <CopyIcon />}</Icon>
    </IconButton>
  );
};
