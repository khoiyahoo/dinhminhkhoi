import { type FC } from "react";
import Typography from "@src/components/Typography";
import hiHand from "@src/assets/images/hiHand.json";
import coding from "@src/assets/images/coding.json";
import { SOCIALS } from "@src/constants/dummy";
import ItemContact from "@src/components/ItemContact";
import Lottie from "lottie-react";

const HeroHomeContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col sm:flex-row">
      <div className="w-full sm:w-1/2">
        <div className="flex items-center">
          <Lottie animationData={hiHand} loop={true} className="w-14 h-14" />
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="text-text-100"
          >
            Hi, I&apos;m{" "}
            <span className="animate-text bg-conversion-01 bg-clip-text text-transparent">
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
          🌱 👨🏻‍💻 I am a guy with a creative mind and like design. I would like to
          learn and discover something new every day. Currently work as a Web
          developer.Besides, I like to eat 🍽️ and travel everywhere 🚌
        </Typography>
        <div className="mx-auto sm:mx-0 max-w-60 h-1 mt-4 bg-conversion-01 rounded-md"></div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start mt-6 md:mt-4">
          {SOCIALS.map((item, index) => (
            <ItemContact
              key={index}
              logo={item.image}
              href={item.link}
              className="hover:-translate-y-1 ease-out duration-200"
            />
          ))}
        </div>
      </div>
      <Lottie
        animationData={coding}
        loop={true}
        className="w-80 h-80 mx-auto sm:mx-0"
      />
    </div>
  );
};
export default HeroHomeContainer;
