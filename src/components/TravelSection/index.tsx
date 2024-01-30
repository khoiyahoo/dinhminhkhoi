import { useEffect, useState, type FC } from "react";
import Typography from "@src/components/Typography";
import TravelCard from "@src/components/TravelCard";
import { type Travel } from "@src/interfaces/Travel";
import { TravelService } from "@src/services/travel";

const TravelSection: FC = () => {
  const [data, setData] = useState<Travel[]>([]);
  const fetchDataTravel = () => {
    TravelService.getTravel()
      .then((res) => setData(res.data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    fetchDataTravel();
  }, []);
  return (
    <section className="bg-bg-100 rounded-t-3xl xl:rounded-t-[8.5rem] py-12">
      <div className="container">
        <div>
          <Typography
            size="normal"
            type="bold"
            variant="h4"
            className="text-2xl text-gray-500"
          >
            🚌 Travel
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="mt-4 text-gray-500 text-justify"
          >
            🔥 I am a person who loves to travel, like to explore beautiful
            places, like to watch the sunset. Luckily, I meet friends who share
            the same passion for travel. The trips were the youth of the
            brothers in rooms 1 and 2521
          </Typography>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 auto-cols-fr">
          {data.map((item) => (
            <TravelCard
              title={item.title}
              icon={item.icon}
              date={item.date}
              link={item.link}
              points={item.points}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TravelSection;
