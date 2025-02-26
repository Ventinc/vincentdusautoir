import { Button } from '#/components/ui/button';
import {
  ConfirmDialogProvider,
  useConfirm,
} from '#/components/ui/confirm-dialog';
import { toast } from '#/hooks/use-toast';

function ConfirmHookButton() {
  const confirm = useConfirm();
  console.log(confirm);
  const onClick = async () => {
    if (
      await confirm({
        title: 'Are you sure you want to confirm this action ?',
        description:
          'This action will delete the entire web (not true you can confirm)',
      })
    ) {
      console.log('HERE2');
      toast({ title: 'Confirm True', description: 'ENTIRE WEB DELETED' });
    } else {
      toast({ title: 'Confirm False', description: 'Nothing happened' });
    }
  };

  return <Button onClick={onClick}>Confirm Hook</Button>;
}

export function ConfirmHook() {
  return (
    <ConfirmDialogProvider>
      <ConfirmHookButton />
    </ConfirmDialogProvider>
  );
}
