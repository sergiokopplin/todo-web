import { Text } from "@/components";

import { styled } from "@/styles/stitches";

export const StyledWrapper = styled("div", {
  padding: "0 15px 20px",
});

export const StyledHeader = styled("div", {
  textAlign: "center",
  marginBottom: 30,
});

export const StyledText = styled(Text, {
  margin: "5px 0 0",
});

export const StyledItem = styled("li", {
  padding: "1px 0 2px",
});

export const StyledList = styled("ol", {
  height: "400px",
  backgroundImage:
    "repeating-linear-gradient(\
      transparent,\
      transparent 24px,\
      rgba(0, 0, 0, 0.08) 24px,\
      rgba(0, 0, 0, 0.08) 25px,\
      transparent 25px,\
      transparent 27px\
    )",
});
