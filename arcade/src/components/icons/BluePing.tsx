import React from "react";
import Ping, { PingProps } from "./Ping";

const BluePing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-blue-500" solidClass="bg-blue-600"/>
  );
};

export default BluePing;