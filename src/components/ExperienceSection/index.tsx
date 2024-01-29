import Typography from "@src/components/Typography";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "@src/components/ExperienceCard";
import { useState, useEffect } from "react";
import { type Experience as ExperienceType } from "@src/interfaces/Experience";
import { ExperienceService } from "@src/services/experiences";

const Experience = () => {
  const [data, setData] = useState<ExperienceType[]>([]);
  const fetchDataExperience = () => {
    ExperienceService.getExperience()
      .then((res) => setData(res.data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    fetchDataExperience();
  }, []);
  return (
    <section className="bg-bg-100 pb-12">
      <div className="container">
        <div className="pt-12">
          <Typography size="normal" type="bold" variant="h2">
            👨🏻‍💻 Work Experience
          </Typography>
        </div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#222831">
            {data.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />;
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
