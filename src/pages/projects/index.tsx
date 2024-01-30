import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroProjectContainer from "@src/components/HeroProjectContainer";
import ProjectSection from "@src/components/ProjectSection";

const Projects: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroProjectContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <ProjectSection />
      </div>
    </>
  );
};
export default Projects;
