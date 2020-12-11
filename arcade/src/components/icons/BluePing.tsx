import React from "react";
import Ping, { PingProps } from "./Ping";

const BluePing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-blue-400" solidClass="bg-blue-500"/>
  );
};

export default BluePing;