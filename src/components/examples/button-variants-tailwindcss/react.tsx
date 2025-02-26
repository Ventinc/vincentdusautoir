import { SendIcon, TrashIcon } from 'lucide-react';
import { Button } from './buttons';

export function ButtonsReact() {
  return (
    <div className="flex gap-2">
      <Button size="md" rounded="md" variant="brand">
        Button
      </Button>
      <Button
        size="md"
        rounded="md"
        variant="destructive"
        leftIcon={<TrashIcon />}
      >
        IconLeft
      </Button>
      <Button size="md" rounded="md" variant="default" rightIcon={<SendIcon />}>
        IconRight
      </Button>
      <Button size="md" rounded="md" variant="default" isLoading>
        Loading
      </Button>
    </div>
  );
}
