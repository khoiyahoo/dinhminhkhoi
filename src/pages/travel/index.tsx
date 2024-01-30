import { type FC } from "react";
import HeroSection from "@src/components/HeroSection";
import HeroTravelContainer from "@src/components/HeroTravelContainer";
import TravelSection from "@src/components/TravelSection";

const Travel: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroTravelContainer />
      </HeroSection>
      <div className="bg-gray-500">
        <TravelSection />
      </div>
    </>
  );
};
export default Travel;
