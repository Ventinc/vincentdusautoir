import { cn } from '#/utils/tailwind';
import { Slot } from 'radix-ui';
import { Children } from 'react';

export type IconProps = React.ComponentProps<'svg'> & {
  asChild?: boolean;
};

export function Icon({ asChild, className, ...props }: IconProps) {
  const Comp = (asChild ? Slot.Slot : 'svg') as 'svg';

  return (
    <Comp
      className={cn(
        'inline-block h-[1em] w-[1em] shrink-0 align-middle leading-[1em]',
        className
      )}
      {...props}
    />
  );
}

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = '0 0 24 24',
    d: pathDefinition,
    displayName,
    defaultProps = {},
  } = options;
  const path = Children.toArray(options.path);

  function Comp(props: IconProps) {
    return (
      <Icon viewBox={viewBox} {...defaultProps} {...props}>
        {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
      </Icon>
    );
  }

  Comp.displayName = displayName;

  return Comp;
}
