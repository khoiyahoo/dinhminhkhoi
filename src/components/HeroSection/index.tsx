import { type ReactNode, type FC } from "react";

interface Props {
  children: ReactNode;
}
const HeroSection: FC<Props> = ({ children }) => {
  return (
    <section className="bg-gray-500 pt-20">
      <div className="container">{children}</div>
    </section>
  );
};
export default HeroSection;
