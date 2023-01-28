import { styled } from "@/styles/stitches";

export const StyledWrapper = styled("div", {
  padding: "3px 0",

  variants: {
    hovered: {
      true: {
        backgroundColor: "$todoHover",
      },
      false: {
        backgroundColor: "$todoActive",
      },
    },
  },

  defaultVariants: {
    hovered: false,
  },
});
