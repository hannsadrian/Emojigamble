import React from "react";

interface PingProps {
  center?: boolean;
  solidClass?: string;
  pingClass?: string;
}

const Ping: React.FC<PingProps> = (props) => {
  return (
    <div
      className={
        (props.center ? "mx-auto my-auto " : "") + "rounded-full h-4 w-4 " + props.solidClass
      }
    >
      <div
        className={"h-4 w-4 animate-ping rounded-full " + props.pingClass}
      ></div>
    </div>
  );
};

export default Ping;
export type {PingProps};
