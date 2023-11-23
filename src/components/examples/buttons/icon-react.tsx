import { IconButton } from "~/components/ui/button";
import { Tb3DRotate, TbSend, TbThumbUp, TbTrash } from "react-icons/tb";

export const ButtonsIconReact = () => {
  return (
    <div className="flex gap-2">
      <IconButton size="lg" rounded="md" variant="subtle-brand">
        <TbThumbUp />
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle-destructive">
        <TbTrash />
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle">
        <TbSend />
      </IconButton>
      <IconButton size="lg" rounded="md" variant="subtle" isLoading>
        <Tb3DRotate />
      </IconButton>
    </div>
  );
};
