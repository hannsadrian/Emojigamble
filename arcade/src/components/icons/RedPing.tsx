import React from "react";
import Ping, { PingProps } from "./Ping";


const RedPing: React.FC<PingProps> = (props) => {
  return (
    <Ping {...props} pingClass="bg-red-500" solidClass="bg-red-600"/>
  );
};

export default RedPing;