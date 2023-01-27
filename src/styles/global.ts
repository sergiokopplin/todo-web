import type * as Stitches from "@stitches/react";
import { config } from "./stitches";

type CSS = Stitches.CSS<typeof config>;

export const globalStyles: CSS = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  ul: {
    listStyle: "none",
  },
};
