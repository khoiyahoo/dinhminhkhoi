import { type FC, type ReactNode } from "react";

import Header from "@src/components/Header";
import Footer from "@src/components/Footer";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-400 font-mitr">{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
