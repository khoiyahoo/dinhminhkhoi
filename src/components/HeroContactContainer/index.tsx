import { type FC } from "react";
import Typography from "@src/components/Typography";
import contact from "@src/assets/images/contact.json";
import mail from "@src/assets/images/mail.json";
import { SOCIALS } from "@src/constants/dummy";
import ItemContact from "@src/components/ItemContact";
import Lottie from "lottie-react";

const HeroContactContainer: FC = () => {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-8">
      <div>
        <div className="flex items-center">
          <Lottie animationData={contact} loop={true} className="w-24 h-24" />
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="text-text-100"
          >
            Get in touch
          </Typography>
        </div>
        <Typography
          size="small"
          type="bold"
          variant="p"
          className="mt-2 glitch text-text-100 text-lg"
        >
          📑 I&apos;m currently working, but I&apos;m still a Freelancer, taking
          on projects. Don&apos;t hesitate to contact me to build your own
          website
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
        animationData={mail}
        loop={true}
        className="w-80 h-80 mx-auto sm:mx-0"
      />
    </div>
  );
};
export default HeroContactContainer;
