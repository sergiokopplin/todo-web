import { styled } from "@/styles/stitches";
import { Pencil1Icon, Cross2Icon } from "@radix-ui/react-icons";

export const StyledWrapper = styled("div", {
  padding: "4px 0 2px",
  position: "relative",
  height: 24,
  top: -2,

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
    edit: {
      true: {
        backgroundColor: "$todoActive",
      },
    },
  },

  compoundVariants: [
    {
      hovered: true,
      theme: "inactive",
      edit: false,
      css: {
        backgroundColor: "$todoInactive",
      },
    },
    {
      hovered: true,
      theme: "active",
      edit: false,
      css: {
        backgroundColor: "$todoHover",
      },
    },
    {
      hovered: true,
      theme: "initial",
      edit: false,
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

export const StyledInputWrapper = styled("div", {
  position: "relative",
  top: -1,
});
