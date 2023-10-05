import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/useToast";

export const ConfirmVanilla = () => {
  const onClick = () => {
    if (confirm("Do you want to delete this content ?")) {
      toast({ title: "Confirm True", description: "Delete content" });
    } else {
      toast({ title: "Confirm False", description: "Do nothing" });
    }
  };

  return <Button onClick={onClick}>Confirm Vanilla</Button>;
};
