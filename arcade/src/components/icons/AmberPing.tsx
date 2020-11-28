import React from "react";
import Ping from "./Ping";

interface AmberPingProps {}

const AmberPing: React.FC<AmberPingProps> = () => {
  return (
    <Ping pingClass="bg-amber-500" solidClass="bg-amber-600"/>
  );
};

export default AmberPing;