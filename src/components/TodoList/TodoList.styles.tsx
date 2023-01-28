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
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  padding: "1px 0",
});
