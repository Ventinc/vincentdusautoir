import { createIcon } from '#/components/ui/icon';

const BigSmileIcon = createIcon({
  displayName: 'BigSmileIcon',
  path: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </>
  ),
  defaultProps: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});

export const CreateIconIconExample = () => {
  return (
    <div className="flex flex-col items-center">
      <BigSmileIcon />
      <p className="text-xl">
        Same size as text.
        <BigSmileIcon />
      </p>
    </div>
  );
};
