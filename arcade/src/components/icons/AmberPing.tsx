import React from "react";
import Ping, { PingProps } from "./Ping";

const AmberPing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-amber-500" solidClass="bg-amber-600"/>
  );
};

export default AmberPing;