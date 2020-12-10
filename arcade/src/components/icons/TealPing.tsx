import React from "react";
import Ping, { PingProps } from "./Ping";

const TealPing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-teal-500" solidClass="bg-teal-600"/>
  );
};

export default TealPing;