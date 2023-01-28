import { styled } from "@/styles/stitches";

export const StyledWrapper = styled("div", {
  padding: "3px 0",

  variants: {
    hovered: {
      false: {
        backgroundColor: "$todoActive",
      },
    },
    theme: {
      initial: {
        backgroundColor: "$todoActive",
      },
      active: {
        backgroundColor: "$todoActive",
      },
      inactive: {
        backgroundColor: "$todoActive",
      },
    },
  },

  compoundVariants: [
    {
      hovered: true,
      theme: "inactive",
      css: {
        backgroundColor: "$todoInactive",
      },
    },
    {
      hovered: true,
      theme: "active",
      css: {
        backgroundColor: "$todoHover",
      },
    },
    {
      hovered: true,
      theme: "initial",
      css: {
        backgroundColor: "$todoHover",
      },
    },
  ],

  defaultVariants: {
    theme: "initial",
    hovered: false,
  },
});
