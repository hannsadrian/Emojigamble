import React from "react";
import Ping from "./Ping";

interface BluePingProps {}

const BluePing: React.FC<BluePingProps> = () => {
  return (
    <Ping pingClass="bg-blue-500" solidClass="bg-blue-600"/>
  );
};

export default BluePing;