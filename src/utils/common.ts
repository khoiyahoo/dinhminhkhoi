import type classNames from "classnames";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: classNames.ArgumentArray) => {
  return twMerge(classnames(inputs));
};

export const getPathName = (pathname: string) => {
  if (pathname.endsWith("/") && !pathname.startsWith("/")) {
    return pathname;
  }
  return `${pathname}/`;
};

export const getCanonicalUrl = (pathname: string) => {
  return (
    `${process.env.baseUrl}/${pathname}/` ||
    `https://dinhminhkhoi.vercel.app/${pathname}/`
  );
};
