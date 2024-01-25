import Lottie from "lottie-react";
import { type FC } from "react";
import hiHand from "@src/assets/images/hiHand.json";
import coding from "@src/assets/images/coding.json";
import Typography from "@src/components/Typography";
const HeroSection: FC = () => {
  return (
    <section className="bg-gray-500 pt-20">
      <div className="container">
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <div className="flex items-center">
              <Lottie
                animationData={hiHand}
                loop={true}
                className="w-14 h-14"
              />
              <Typography
                size="normal"
                type="bold"
                variant="h2"
                className="text-text-100"
              >
                Hi, I&apos;m{" "}
                <span className="animate-text bg-gradient-to-r from-teal-500 via-[#915eff] to-orange-500 bg-clip-text text-transparent">
                  Khoi
                </span>
              </Typography>
            </div>
            <Typography
              size="small"
              type="bold"
              variant="p"
              className="mt-2 glitch text-text-100 text-lg"
            >
              🌱 👨🏻‍💻 I am a guy with a creative mind and like design. I would
              like to learn and discover something new every day. Currently work
              as a Web developer.
            </Typography>
          </div>
          <Lottie animationData={coding} loop={true} className="w-80 h-80" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
