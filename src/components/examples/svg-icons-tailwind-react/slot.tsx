import { Icon } from '#/components/ui/icon';
import { SmileIcon } from 'lucide-react';

// SmileIcon can be from your library or your assets

export const SlotIconExample = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon asChild>
        <SmileIcon />
      </Icon>
      <p className="text-xl">
        Same size as text.
        <Icon asChild>
          <SmileIcon />
        </Icon>
      </p>
      <p className="text-xl">
        Don&apos;t forget asChild.
        <Icon>
          <SmileIcon />
        </Icon>
      </p>
    </div>
  );
};
