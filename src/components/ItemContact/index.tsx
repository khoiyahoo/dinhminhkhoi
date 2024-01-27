import { type StaticImageData } from "next/image";
import { type FC } from "react";
import Image from "next/image";
import { cn } from "@src/utils/common";
import Link from "next/link";

interface Props {
  logo: StaticImageData;
  href: string;
  className?: string;
}

const ItemServiceCard: FC<Props> = ({ logo, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        "w-12 h-12 rounded-2xl bg-gray-200 p-2 flex items-center justify-center",
        className,
      )}
    >
      <Image src={logo} alt="ảnh" width={24} height={24} />
    </Link>
  );
};

export default ItemServiceCard;
