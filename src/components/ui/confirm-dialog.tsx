import {
  createContext,
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type ComponentPropsWithoutRef,
  useContext,
} from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '#/components/ui/alert-dialog';

const ConfirmDialog = ({
  title,
  description,
  onConfirm,
  onCancel,
  isOpen,
}: {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type ConfirmParams = Omit<
  ComponentPropsWithoutRef<typeof ConfirmDialog>,
  'onCancel' | 'onConfirm' | 'isOpen'
>;
type ConfirmFn = (p: ConfirmParams) => Promise<boolean>;

const ConfirmDialogContext = createContext<ConfirmFn>(() => {
  return new Promise((res) => res(true));
});

export const ConfirmDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<ConfirmParams>({
    title: 'Confirm Default Title',
  });
  const resolveRef = useRef<(v: boolean) => void | undefined>(undefined);

  const confirm = useCallback((p: ConfirmParams) => {
    return new Promise<boolean>((res) => {
      setProps(p);
      setOpen(true);
      resolveRef.current = res;
    });
  }, []);

  return (
    <ConfirmDialogContext.Provider value={confirm}>
      <ConfirmDialog
        {...props}
        isOpen={open}
        onConfirm={() => {
          resolveRef.current?.(true);
          setOpen(false);
        }}
        onCancel={() => {
          resolveRef.current?.(false);
          setOpen(false);
        }}
      />
      {children}
    </ConfirmDialogContext.Provider>
  );
};

export const useConfirm = () => useContext(ConfirmDialogContext);
