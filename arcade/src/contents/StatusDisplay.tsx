import React from "react";
import Brand from "../components/Brand";

interface StatusDisplayProps {
  icon?: any;
  message: any;
}

const StatusDisplay: React.FC<StatusDisplayProps> = (props) => {
  return (
    <div className="min-h-screen flex">
      <div className="mx-auto my-auto flex-row justify-center text-center">
        <div className="mb-5">
          <Brand centered={true} />
        </div>
        <div className="mb-5">{props.icon}</div>
        <div>{props.message}</div>
      </div>
    </div>
  );
};

export default StatusDisplay;
