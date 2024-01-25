import { type FC } from "react";
import wave from "@src/assets/images/wave.png";
import Image from "next/image";
import Typography from "../Typography";
const Footer: FC = () => {
  return (
    <div>
      <Image src={wave} alt="anh wave" />
      <div className="bg-gray-400 w-full h-28">
        <div className="container">
          <div className="flex py-3 gap-7 flex-wrap justify-center pt-10">
            <Typography
              size="small"
              type="bold"
              variant="p"
              className="text-text-100"
            >
              Khoi © 2023
            </Typography>
            <ul className="flex gap-7">
              <li className="flex gap-1">
                ✈️{" "}
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-100"
                >
                  Travel
                </Typography>
              </li>
              <li className="flex gap-1">
                ⚽
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-100"
                >
                  Soccer
                </Typography>
              </li>
              <li className="flex gap-1">
                🌇
                <Typography
                  size="small"
                  type="bold"
                  variant="p"
                  className="text-text-100"
                >
                  Sunset
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
