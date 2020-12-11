import React from "react";
import Ping, { PingProps } from "./Ping";

const GreenPing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-green-500" solidClass="bg-green-500"/>
  );
};

export default GreenPing;
