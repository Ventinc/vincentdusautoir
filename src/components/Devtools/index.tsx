import { TailwindIndicator } from "./TailwindIndicator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Devtools = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <>
      <div className="pointer-events-none fixed bottom-1 left-1 z-50">
        <TailwindIndicator />
      </div>
      <ReactQueryDevtools position="bottom-right" />
    </>
  );
};
