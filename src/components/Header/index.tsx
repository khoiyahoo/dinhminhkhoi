import { ROUTE } from "@src/constants/common";
import { useState, type FC, useEffect } from "react";
import Link from "next/link";
import coding from "@src/assets/images/coding.json";
import Lottie from "lottie-react";
import MenuHeader from "@src/components/MenuHeader";
import Typography from "@src/components/Typography";
import { useRouter } from "next/router";
import HeaderPercentage from "@src/components/HeaderPercentage";
import { cn, getPathName } from "@src/utils/common";

const Header: FC = () => {
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
    BURGER_TOP:
      "w-[1.25rem] h-[0.15rem] bg-text-100 rounded-full block transition-all duration-600 ease-out",
    ACTIVE_BURGER_TOP:
      "w-[1.25rem] h-[0.15rem] bg-text-100 rounded-full block transition-all duration-600 ease-out translate-x-[0.75rem]",
    BURGER_BOTTOM:
      "w-[1.5rem] h-[0.15rem] bg-text-100 rounded-full block transition-all duration-600 ease-out",
    ACTIVE_BURGER_BOTTOM:
      "w-[1.5rem] h-[0.15rem] bg-text-100 rounded-full block transition-all duration-600 ease-out translate-x-[0.45rem]",
  } as const;

  const router = useRouter();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleActiveMenuBar = () => {
    setActive(!active);
    setOpen(!open);
  };

  //close menu when change route
  useEffect(() => {
    setActive(false);
    setOpen(false);
  }, [router.asPath]);

  return (
    <header className="fixed z-[9999] bg-gray-400 w-full font-mitr text-text-100">
      <div className="container">
        <div className="flex min-h-14 items-center justify-between sm:justify-start gap-8">
          <Link href="/" className="flex items-center">
            <Lottie animationData={coding} loop={true} className="w-10 h-10" />
            <Typography size="normal" type="bold" variant="p">
              Khoi | Web Developer
            </Typography>
          </Link>
          <ul className="hidden items-center sm:flex gap-2">
            {ROUTES.map((item, index) => (
              <Link key={index} href={item.route}>
                <li
                  className={cn(
                    "px-3 py-1.5 rounded-md",
                    getPathName(router.pathname).includes(
                      getPathName(item.route),
                    )
                      ? "bg-gray-500"
                      : "hover:bg-gray-300",
                  )}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div
            className="flex sm:hidden h-12 justify-center items-center cursor-pointer gap-2"
            onClick={handleActiveMenuBar}
          >
            <div className="gap-2 flex flex-col justify-center p-0 w-[2rem] h-full overflow-hidden">
              <span
                className={
                  active
                    ? STYLE_MAPPING.BURGER_TOP
                    : STYLE_MAPPING.ACTIVE_BURGER_TOP
                }
              ></span>
              <span className="w-full h-[0.2rem] bg-text-100 rounded-full block"></span>
              <span
                className={
                  active
                    ? STYLE_MAPPING.BURGER_BOTTOM
                    : STYLE_MAPPING.ACTIVE_BURGER_BOTTOM
                }
              ></span>
            </div>
          </div>
        </div>
      </div>
      <HeaderPercentage />
      <MenuHeader open={open} />
    </header>
  );
};
export default Header;
