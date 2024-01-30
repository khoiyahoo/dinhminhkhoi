import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { type FC, useRef } from "react";
import ItemServiceCard from "src/components/ItemServiceCard";
import { fadeIn } from "@src/utils/motion";
import Typography from "@src/components/Typography";
import { type Tech } from "@src/interfaces/Skills";

interface Props {
  idx: number;
  title: string;
  itemCards: Tech[];
}
const ServiceCard: FC<Props> = ({ idx, title, itemCards }) => {
  const tiltRef = useRef(null); // Create a ref for Tilt component

  return (
    <Tilt ref={tiltRef} className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
        className="w-full bg-conversion-01 p-[1px] rounded-[20px] shadow-card"
      >
        <Typography
          size="normal"
          type="bold"
          variant="p"
          className="text-text-100 text-center"
        >
          {title}
        </Typography>
        <div className="bg-bg-100 rounded-[20px] py-3 px-4 flex flex-wrap">
          {itemCards?.map((item, index) => (
            <ItemServiceCard key={index} title={item.title} logo={item.logo} />
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
