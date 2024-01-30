import { type FC } from "react";
import Typography from "@src/components/Typography";
import travel from "@src/assets/images/travel.json";
import tree from "@src/assets/images/tree.json";

import Lottie from "lottie-react";
const HeroTravelContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col pb-12 sm:flex-row">
      <div className="w-full">
        <div className="flex items-center">
          <Lottie animationData={travel} loop={true} className="w-24 h-24" />
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="text-text-100"
          >
            Travel
          </Typography>
        </div>
        <div className="flex items-center">
          <Lottie animationData={tree} loop={true} className="w-14 h-14" />
          <Typography
            size="small"
            type="bold"
            variant="p"
            className="mt-2 glitch text-text-100 text-lg"
          >
            I love to travel. Below are some places that I have gone and
            explored I like go to travel.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default HeroTravelContainer;
