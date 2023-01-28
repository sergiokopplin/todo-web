import { styled } from "@/styles/stitches";

export const StyledText = styled("p", {
  fontSize: "$fontSizeM",
  fontFamily: "$fontsBase",

  variants: {
    size: {
      s: {
        fontSize: "$fontSizeS",
      },
      m: {
        fontSize: "$fontSizeM",
      },
    },
    color: {
      default: {
        color: "$colorTextBase",
      },
      active: {
        color: "$colorTextPrimary",
      },
      inactive: {
        color: "$colorTextSecondary",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
      false: {
        textTransform: "initial",
      },
    },
    lineThrough: {
      true: {
        textDecoration: "line-through",
      },
      false: {
        textDecoration: "initial",
      },
    },
  },

  defaultVariants: {
    color: "$colorTextBase",
    uppercase: false,
    lineThrough: false,
    size: "m",
  },
});
