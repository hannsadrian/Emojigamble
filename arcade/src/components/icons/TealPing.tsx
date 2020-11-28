import React from "react";
import Ping from "./Ping";

interface TealPingProps {}

const TealPing: React.FC<TealPingProps> = () => {
  return (
    <Ping pingClass="bg-teal-500" solidClass="bg-teal-600"/>
  );
};

export default TealPing;