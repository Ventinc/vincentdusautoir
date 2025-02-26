import { Icon } from '#/components/ui/icon';

export const DefaultIconExample = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" x2="16" y1="15" y2="15" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </Icon>
      <p className="text-xl">
        Same size as text.
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-1"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="8" x2="16" y1="15" y2="15" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </Icon>
      </p>
    </div>
  );
};
