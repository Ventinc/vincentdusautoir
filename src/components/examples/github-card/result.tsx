import { cn } from '#/utils/tailwind';
import { useState, type ReactNode } from 'react';

export const GithubCard: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
  const [cardRotate, setCardRotate] = useState(0);
  const [blobVisible, setBlobVisible] = useState(false);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ev = e.nativeEvent;
    const newPos = {
      x: ev.clientX - rect.left,
      y: ev.clientY - rect.top,
    };

    const percentage = (newPos.x - rect.width / 2) / (rect.width / 2);

    setCardRotate(-percentage * 10);
    setBlobPos(newPos);
  };
  const onMouseLeave = () => {
    setCardRotate(0);
    setBlobVisible(false);
  };
  const onMouseEnter = () => {
    setBlobVisible(true);
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id="card"
      className="relative z-auto block h-40 min-w-[200px] max-w-[300px] origin-center overflow-hidden rounded-xl bg-zinc-100 p-1 transition-all duration-200 ease-linear dark:bg-zinc-700"
      style={{
        transform: `perspective(200px) rotateY(${cardRotate}deg)`,
      }}
    >
      <div
        id="blob"
        className={cn(
          `absolute left-0 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-green-500 blur-lg transition-all duration-75 ease-linear`,
          {
            'opacity-100': blobVisible,
            'opacity-0': !blobVisible,
          }
        )}
        style={{ top: blobPos.y, left: blobPos.x }}
      />
      <div
        id="inner"
        className="relative h-full w-full rounded-lg bg-white/75 p-8 dark:bg-zinc-900/75"
      >
        {children}
      </div>
    </div>
  );
};
