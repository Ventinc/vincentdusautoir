import { Button } from "@/components/ui/Button";
import { TbSend, TbTrash } from "react-icons/tb";

export const ButtonsReact = () => {
  return (
    <div className="flex gap-2">
      <Button size="md" rounded="md" variant="brand">
        Button
      </Button>
      <Button
        size="md"
        rounded="md"
        variant="destructive"
        leftIcon={<TbTrash />}
      >
        IconLeft
      </Button>
      <Button size="md" rounded="md" variant="default" rightIcon={<TbSend />}>
        IconRight
      </Button>
      <Button size="md" rounded="md" variant="default" isLoading>
        Loading
      </Button>
    </div>
  );
};
