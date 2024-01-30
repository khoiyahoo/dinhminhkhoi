import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroContactContainer from "@src/components/HeroContactContainer";
import ContactSection from "@src/components/ContactSection";

const Contact: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContactContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <ContactSection />
      </div>
    </>
  );
};
export default Contact;
