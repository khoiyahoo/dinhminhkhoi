import { useState, type FC, useEffect } from "react";
import Typography from "../Typography";
import { motion } from "framer-motion";
import ServiceCard from "@src/components/ServiceCard";
import { type Skill } from "@src/interfaces/Skills";
import { SkillsService } from "@src/services/skills";

const SkillsSection: FC = () => {
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
            What I have done so far
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl text-gray-500"
          >
            📔 Skills
          </Typography>
        </motion.div>
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
export default SkillsSection;
