import { type FC } from "react";
import Typography from "@src/components/Typography";
import Link from "next/link";

interface PropsType {
  icon: string;
  title: string;
  date: string;
  points: string[];
  link: string;
}
const TravelCard: FC<PropsType> = ({ icon, title, date, points, link }) => {
  return (
    <Link
      href={link}
      className="w-full group hover:-translate-y-1 duration-200 ease-in-out"
    >
      <div className="w-full h-full p-4 bg-conversion-transparent rounded-[20px] shadow-card flex flex-col gap-2">
        <div className="flex justify-between">
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-text-100 text-center px-3 py-1 rounded-md bg-conversion-01"
          >
            {icon} {title}
          </Typography>
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-text-500 text-center"
          >
            {date}
          </Typography>
        </div>
        <ul className="list-disc ml-5 space-y-2 flex-1">
          {points.map((point, index) => {
            return (
              <li
                key={`experience-point-${index}`}
                className="text-text-500 text-[14px] pl-1 tracking-wider"
              >
                <Typography
                  size="extraSmall"
                  type="bold"
                  variant="p"
                  className="text-text-500"
                >
                  {point}
                </Typography>
              </li>
            );
          })}
        </ul>
        <Link
          href={link}
          className="w-full group-hover:underline group-hover:underline-offset-4 group-hover:decoration-text-500 group-hover:italic ease-in-out"
        >
          See more photos {title}
        </Link>
      </div>
    </Link>
  );
};

export default TravelCard;
