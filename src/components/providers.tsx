"use client";

import { Devtools } from "~/components/devtools";
import { ConfirmDialogProvider } from "~/components/ui/confirm-dialog";
import { Toaster } from "~/components/ui/toaster";
import { TooltipProvider } from "~/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <ConfirmDialogProvider>
          <main>
            {children}
            <Toaster />
          </main>
        </ConfirmDialogProvider>
        <Devtools />
      </TooltipProvider>
    </ThemeProvider>
  );
};
