"use client";
import { cn } from "~/utils/tailwind";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import { Button } from "./ui/button";

export type Props = React.ComponentPropsWithoutRef<typeof Tabs> & {
  align?: "start" | "center" | "end";
  title?: string;
};

export const ComponentExample: React.FC<Props> = ({
  align = "center",
  title,
  className,
  children,
  ...props
}) => {
  const [demo, code] = React.Children.toArray(children);

  return (
    <Tabs
      defaultValue="demo"
      className={cn("group relative my-4 rounded-md", className)}
      {...props}
    >
      {title ?? code ? (
        <TabsList className="mb-1 flex h-8 w-fit items-center gap-2 rounded-lg bg-zinc-200 px-1 font-mono text-xs dark:bg-zinc-800">
          {title ? <p className="p-1 font-bold">{title}</p> : null}
          {code ? (
            <>
              <TabsTrigger value="demo" asChild>
                <Button
                  size="xs"
                  variant="unstyled"
                  className="data-[state=active]:bg-brand-400/40"
                >
                  Demo
                </Button>
              </TabsTrigger>
              <TabsTrigger value="code" asChild>
                <Button
                  size="xs"
                  variant="unstyled"
                  className="data-[state=active]:bg-blue-400/40"
                >
                  Code
                </Button>
              </TabsTrigger>
            </>
          ) : null}
        </TabsList>
      ) : null}
      <TabsContent value="demo">
        <div
          className={cn(
            "my-0 flex min-h-[350px] overflow-x-auto rounded-lg border-2 border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900",
            {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            },
            className,
          )}
        >
          <div className="mx-auto">{demo}</div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="[&_pre]:my-0">{code}</div>
      </TabsContent>
    </Tabs>
  );
};
