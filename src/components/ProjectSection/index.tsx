import { useEffect, useState, type FC } from "react";
import Typography from "../Typography";
import { motion } from "framer-motion";
import ProjectCard from "@src/components/ProjectCard";
import { type Projects } from "@src/interfaces/Projects";
import { ProjectsService } from "@src/services/projects";
const ProjectSection: FC = () => {
  const [data, setData] = useState<Projects[]>([]);
  const fetchDataProjects = () => {
    ProjectsService.getProjects()
      .then((res) => setData(res.data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    fetchDataProjects();
  }, []);
  return (
    <section className="bg-bg-100 rounded-t-3xl xl:rounded-t-[8.5rem] py-12">
      <div className="container">
        <motion.div>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl text-gray-500"
          >
            📂 Projects
          </Typography>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-fr">
          {data.map((item, index) => (
            <ProjectCard
              key={index}
              openSource={item.openSource}
              href={item.link}
              icon={item.icon}
              title={item.name}
              description={item.description}
              tags={item.techs}
              responsibility={item.responsibility}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
