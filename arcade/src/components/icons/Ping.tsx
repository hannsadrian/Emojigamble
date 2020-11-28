import React from "react";

interface PingProps {
  solidClass: string;
  pingClass: string;
}

const Ping: React.FC<PingProps> = (props) => {
  return (
    <div
      className={
        "my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4 " + props.solidClass
      }
    >
      <div
        className={"h-4 w-4 animate-ping rounded-full " + props.pingClass}
      ></div>
    </div>
  );
};

export default Ping;
