import { styled } from "@/styles/stitches";
import { Pencil1Icon, Cross2Icon } from "@radix-ui/react-icons";

export const StyledWrapper = styled("div", {
  padding: "3px 0",
  position: "relative",

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

export const StyledPencilIcon = styled(Pencil1Icon, {
  color: "$colorPrimary",

  "&:hover": {
    color: "$colorTextBase",
    cursor: "pointer",
  },
});

export const StyledCrossIcon = styled(Cross2Icon, {
  color: "$colorPrimary",

  "&:hover": {
    color: "$colorTextBase",
    cursor: "pointer",
  },
});

export const StyledIconWrapper = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  padding: "$2 $2 0",
  height: "100%",
});
