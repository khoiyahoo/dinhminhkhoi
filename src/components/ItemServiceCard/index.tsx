import { type FC } from "react";
import Image from "next/image";
import Typography from "@src/components/Typography";
import { cn } from "@src/utils/common";

interface Props {
  title?: string;
  logo: string;
  className?: string;
  classNameImg?: string;
}

const ItemServiceCard: FC<Props> = ({
  title,
  logo,
  className = "",
  classNameImg = "",
}) => {
  return (
    <div
      className={cn(
        "badge border rounded-md py-1 px-2 flex justify-center items-center m-1 shadow-lg",
        className,
      )}
    >
      <Image
        src={logo}
        alt="ảnh"
        width={20}
        height={20}
        className={cn("mr-2", classNameImg)}
      />
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
