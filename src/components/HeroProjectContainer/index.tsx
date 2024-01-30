import { type FC } from "react";
import Typography from "@src/components/Typography";
import project from "@src/assets/images/project.json";
import Lottie from "lottie-react";
const HeroProjectContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col pb-12 sm:flex-row">
      <div className="w-full">
        <div className="flex items-start">
          <Lottie animationData={project} loop={true} className="w-14 h-14" />
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="text-text-100"
          >
            Projects
          </Typography>
        </div>
        <Typography
          size="small"
          type="bold"
          variant="p"
          className="mt-2 glitch text-text-100 text-lg"
        >
          I like to explore and explore, I have built a number of web and mobile
          projects. Below are some projects I did and participated in when I was
          in school and working
        </Typography>
      </div>
    </div>
  );
};
export default HeroProjectContainer;
