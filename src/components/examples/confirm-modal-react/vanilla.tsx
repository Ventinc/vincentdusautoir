import { Button } from '#/components/ui/button';
import { toast } from '#/hooks/use-toast';

export const ConfirmVanilla = () => {
  const onClick = () => {
    if (confirm('Do you want to delete this content ?')) {
      toast({ title: 'Confirm True', description: 'Delete content' });
    } else {
      toast({ title: 'Confirm False', description: 'Do nothing' });
    }
  };

  return (
    <Button type="button" onClick={onClick}>
      Confirm Vanilla
    </Button>
  );
};
