import { type ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const DefaultLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
