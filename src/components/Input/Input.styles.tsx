import { styled } from "@/styles/stitches";

export const StyledInput = styled("input", {
  border: "none",
  background: "$todoActive",

  fontSize: "$fontSizeM",
  fontFamily: "$fontsBase",

  "&:focus": {
    outline: "none",
  },
});
