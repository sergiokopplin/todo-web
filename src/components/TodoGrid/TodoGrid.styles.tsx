import { styled } from "@/styles/stitches";

export const StyledListWrapper = styled("ol", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gap: "0px 0px",

  "& > li:not(:last-child)": {
    borderRight: "1px solid rgba(0, 0, 0, .08)",
  },
});
