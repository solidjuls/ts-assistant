import { useState } from "react";
import { styled } from "/stitches.config";

const Button = styled("button", {
  background: "#D3D3D3",
  cursor: "pointer",
  fontSize: "18pt",
  padding: "8px",
  width: "100%",
  borderRadius: "8px"
});

const Content = styled("div", {
  background: "#f5f5f5",
  overflow: "hidden",
  //transition: "all 0.5s ease-in-out",
  //fontSize: "18pt",
  width: "100%",
  maxHeight: "0",
  padding: "0",
  variants: {
    open: {
      true: {
        maxHeight: "100%",
        //padding: "0 16px",
      },
    },
  },
});

const Accordeon = ({ header, children, initialOpen }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>{header}</Button>
      <Content open={open}>{children}</Content>
    </>
  );
};

export { Accordeon };
