import { type FC } from "react";
import Typography from "@src/components/Typography";
import hiHand from "@src/assets/images/hiHand.json";
import logo from "@src/assets/images/logo.png";
import { SOCIALS } from "@src/constants/dummy";
import ItemContact from "@src/components/ItemContact";
import Lottie from "lottie-react";
import Image from "next/image";

const HeroHomeContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col sm:flex-row pb-12 gap-4">
      <div className="w-full sm:w-1/2">
        <div className="flex items-center">
          <Lottie animationData={hiHand} loop={true} className="w-14 h-14" />
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="text-text-100 relative"
          >
            Hi, I&apos;m{" "}
            <div className="absolute left-1/2 top-[5%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="39"
                viewBox="0 0 105 39"
                fill="none"
              >
                <path
                  className="dash"
                  d="M8.99306 23.2725C18.4418 35.9728 71.0212 33.6263 75.0924 33.2353C79.1637 32.8444 110.292 30.716 99.6952 12.3534C89.0986 -6.00909 28.5114 18.0953 25.7485 5.50946C22.9855 -7.07639 -7.80726 9.07085 3.47482 24.6747C12.9734 37.8119 65.6029 42.644 104 32.7089"
                  stroke="url(#paint0_linear_8278_9636)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_8278_9636"
                    x1="81.2355"
                    y1="35.4529"
                    x2="70.1015"
                    y2="-9.94537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F2BA73"></stop>
                    <stop offset="0.223958" stop-color="#F2A550"></stop>
                    <stop offset="0.479167" stop-color="#EA8D37"></stop>
                    <stop offset="0.78125" stop-color="#F07835"></stop>
                    <stop offset="1" stop-color="#F05322"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="animate-text bg-conversion-01 bg-clip-text text-transparent ml-[1rem]">
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
      <div className="w-[14rem] h-80 mx-auto sm:mx-0">
        <Image src={logo} alt="anh logo" className="w-full h-full" />
      </div>
    </div>
  );
};
export default HeroHomeContainer;
