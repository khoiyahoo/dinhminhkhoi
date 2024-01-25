import { type StaticImageData } from "next/image";
import { type FC } from "react";
import Image from "next/image";
import Typography from "@src/components/Typography";

interface Props {
  title: string;
  logo: StaticImageData;
}

const ItemServiceCard: FC<Props> = ({ title, logo }) => {
  return (
    <div className="badge border rounded-md py-1 px-2 flex justify-center items-center m-1 ">
      <Image src={logo} alt="ảnh" className="w-[20px] h-[20px] mr-2" />
      <Typography
        size="extraSmall"
        type="bold"
        variant="p"
        className="text-gray-500"
      >
        {title}
      </Typography>
    </div>
  );
};

export default ItemServiceCard;
