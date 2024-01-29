import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import SkillsSection from "@src/components/SkillsSection";
import HeroAboutContainer from "@src/components/HeroAboutContainer";
import Experience from "@src/components/ExperienceSection";

const About: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroAboutContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <SkillsSection />
      </div>
      <Experience />
    </>
  );
};
export default About;
