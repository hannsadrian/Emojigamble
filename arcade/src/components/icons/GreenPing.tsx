import React from "react";
import Ping from "./Ping";

interface GreenPingProps {}

const GreenPing: React.FC<GreenPingProps> = () => {
  return (
    <Ping pingClass="bg-green-500" solidClass="bg-green-600"/>
  );
};

export default GreenPing;
