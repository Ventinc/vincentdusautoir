import { Rotate3DIcon, SendIcon, ThumbsUpIcon, TrashIcon } from 'lucide-react';
import { IconButton } from './buttons';
import { Icon } from './base';

export function ButtonsIconReact() {
  return (
    <div className="flex gap-2">
      <IconButton size="lg" rounded="md" variant="subtle-brand">
        <Icon asChild>
          <ThumbsUpIcon />
        </Icon>
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle-destructive">
        <Icon asChild>
          <TrashIcon />
        </Icon>
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle">
        <Icon asChild>
          <SendIcon />
        </Icon>
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle" isLoading>
        <Icon asChild>
          <Rotate3DIcon />
        </Icon>
      </IconButton>
    </div>
  );
}
