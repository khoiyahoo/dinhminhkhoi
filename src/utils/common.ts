import type classNames from "classnames";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: classNames.ArgumentArray) => {
  return twMerge(classnames(inputs));
};
