import { useState, type FC, useEffect } from "react";
import Typography from "../Typography";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";
import { SkillsService } from "@src/services/skills";
import { type Skill } from "@src/interfaces/Skills";

const OverviewSection: FC = () => {
  const [data, setData] = useState<Skill[]>([]);
  const fetchDataSkills = () => {
    SkillsService.getSkills()
      .then((res) => setData(res.data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    fetchDataSkills();
  }, []);

  return (
    <section className="bg-bg-100 rounded-t-3xl xl:rounded-t-[8.5rem] pt-12">
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
            🗞️ OverView
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
          Native, Figma Design and Redux, I build scalable web apps that deliver
          exceptional user experiences. I prioritize clean coding and stay
          up-to-date with trends to exceed expectations. Let&apos;s work
          together on your next project.
        </Typography>
        <div className="mt-8 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <ServiceCard
              title={item.name}
              itemCards={item.techs}
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
