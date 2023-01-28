import { styled } from "@/styles/stitches";

export const StyledHeading = styled("h2", {
  textTransform: "uppercase",
  fontFamily: "$fontsHeading",
  fontSize: "$fontSizeL",

  variants: {
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
  },

  defaultVariants: {
    color: "$colorTextBase",
  },
});
