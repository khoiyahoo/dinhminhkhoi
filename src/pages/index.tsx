import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import OverviewSection from "@src/components/OverviewSection";
import HighlightProjectSection from "@src/components/HighlightProjectSection";
import HeroHomeContainer from "@src/components/HeroHomeContainer";

const Home: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <OverviewSection />
      </div>
      <HighlightProjectSection />
    </>
  );
};

export default Home;
