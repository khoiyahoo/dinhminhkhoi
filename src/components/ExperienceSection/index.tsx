import Typography from "@src/components/Typography";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "@src/components/ExperienceCard";
import { EXPERIENCES } from "@src/constants/dummy";

const Experience = () => {
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
            {EXPERIENCES.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />;
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
