import { type FC } from "react";
import Typography from "../Typography";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";
import {
  BACK_END,
  FRONT_END,
  LANGUAGES,
  TOOL_SERVICE,
} from "@src/constants/dummy";

const OverviewSection: FC = () => {
  const LIST_SERVICE = [
    {
      title: "Languages",
      tags: LANGUAGES,
    },
    {
      title: "Frontend",
      tags: FRONT_END,
    },
    {
      title: "Backend",
      tags: BACK_END,
    },

    {
      title: "Tools & Services",
      tags: TOOL_SERVICE,
    },
  ];
  return (
    <section className="bg-bg-100 rounded-t-3xl lg:rounded-t-[8.5rem] py-12">
      <div className="container">
        <motion.div>
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-gray-500"
          >
            Introduction
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl text-gray-500"
          >
            OverView
          </Typography>
        </motion.div>
        <Typography
          size="normal"
          type="bold"
          variant="p"
          className="mt-4 text-gray-500 text-justify"
        >
          🌱 I&apos;m a web developer skilled in Sass, Bootstrap, and Tailwind
          for creating responsive UI. With expertise in TypeScript, React, React
          Native, Figma Design and Redux Saga, I build scalable web apps that
          deliver exceptional user experiences. I prioritize clean coding and
          stay up-to-date with trends to exceed expectations. Let&apos;s work
          together on your next project.
        </Typography>
        <div className="mt-8 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
          {LIST_SERVICE.map((item, index) => (
            <ServiceCard
              title={item.title}
              itemCards={item.tags}
              idx={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OverviewSection;
