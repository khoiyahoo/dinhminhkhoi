import { type FC } from "react";
import { cn, getPathName } from "@src/utils/common";
import { ROUTE } from "@src/constants/common";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  open: boolean;
}

const MenuHeaderMobile: FC<Props> = ({ open }) => {
  const router = useRouter();
  const ROUTES = [
    {
      title: "Home",
      route: ROUTE.HOME,
    },
    {
      title: "About",
      route: ROUTE.ABOUT,
    },
    {
      title: "Projects",
      route: ROUTE.PROJECTS,
    },
    {
      title: "Travel",
      route: ROUTE.TRAVEL,
    },
    {
      title: "Contact",
      route: ROUTE.CONTACT,
    },
  ] as const;
  const STYLE_MAPPING = {
    MENU: "absolute top-[3.5rem] bg-gray-400 transition-all duration-500 overflow-hidden ease-out shadow-sm shadow-text-500 sm:hidden w-full border-t border-orange-100",
    FLEX: "flex justify-center py-3 border-b border-text-300 w-full px-4",
    TEXT_BUTTON: "whitespace-nowrap text-center",
  } as const;

  return (
    <div className={cn(STYLE_MAPPING.MENU, open ? "right-0" : "right-[-100%]")}>
      <div className="flex flex-col items-center flex-1 py-3">
        <ul className="flex items-center justify-center flex-col gap-4">
          {ROUTES.map((item, index) => (
            <Link key={index} href={item.route}>
              <li
                className={cn(
                  "px-3 py-1.5 rounded-md",
                  getPathName(router.pathname).includes(getPathName(item.route))
                    ? "bg-gray-500"
                    : "hover:bg-gray-300",
                )}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuHeaderMobile;
