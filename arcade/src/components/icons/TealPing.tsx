import React from "react";
import Ping, { PingProps } from "./Ping";

const TealPing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-teal-400" solidClass="bg-teal-500"/>
  );
};

export default TealPing;