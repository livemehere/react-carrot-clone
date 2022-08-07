import React, { FC } from "react";

interface Props {
  direction?: "vertical";
}

const Divider: FC<Props> = ({ direction }) => {
  if (direction === "vertical") {
    return <div className={"w-[1px] bg-black/10 h-[90%] "}></div>;
  }
  return <div className={"h-[1px] bg-black/10 w-[95%] m-auto"}></div>;
};

export default Divider;
