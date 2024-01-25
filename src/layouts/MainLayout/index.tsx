import { type FC, type ReactNode } from "react";

import Header from "@src/components/Header";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-306px)] font-mitr">{children}</div>
    </>
  );
};
export default MainLayout;
