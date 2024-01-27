import { type FC } from "react";
import Typography from "../Typography";
import { motion } from "framer-motion";
import { PROJECTS } from "@src/constants/dummy";
import ProjectCard from "@src/components/ProjectCard";
import Link from "next/link";
import { ROUTE } from "@src/constants/common";
const HighlightProjectSection: FC = () => {
  return (
    <section className="bg-bg-100 py-12">
      <div className="container">
        <motion.div>
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-gray-500"
          >
            Projects
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl text-gray-500"
          >
            📂 Highlight Projects
          </Typography>
        </motion.div>
        <Typography
          size="normal"
          type="bold"
          variant="p"
          className="mt-4 text-gray-500 text-justify"
        >
          These are the projects I have participated in at the company and some
          self-built projects, of which the Travelix project is my graduation
          project at school and is evaluated.
        </Typography>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-fr">
          {PROJECTS.map((item, index) => (
            <ProjectCard
              key={index}
              openSource={item.openSource}
              href={item.source_code_link}
              icon={item.icon}
              title={item.name}
              description={item.description}
              tags={item.tags}
              responsibility={item.responsibility}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href={ROUTE.PROJECTS}
            className="mx-auto px-3 py-[1rem] rounded-md ease-in-out duration-200 hover:bg-gray-100"
          >
            <Typography
              size="normal"
              type="bold"
              variant="p"
              className="text-text-400"
            >
              See more
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HighlightProjectSection;
