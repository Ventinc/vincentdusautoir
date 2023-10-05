import { Button } from "@/components/ui/Button";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { toast } from "@/hooks/useToast";

export const ConfirmHook = () => {
  const confirm = useConfirm();
  const onClick = async () => {
    if (
      await confirm({
        title: "Are you sure you want to confirm this action ?",
        description:
          "This action will delete the entire web (not true you can confirm)",
      })
    ) {
      toast({ title: "Confirm True", description: "ENTIRE WEB DELETED" });
    } else {
      toast({ title: "Confirm False", description: "Nothing happened" });
    }
  };

  return <Button onClick={onClick}>Confirm Hook</Button>;
};
