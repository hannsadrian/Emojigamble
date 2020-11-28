import { title } from "process";
import React from "react";
import GreenPing from "./icons/GreenPing";

interface MenuButtonProps {
  title: string;
  bold?: boolean;
  ping: any;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <div
      className={
        "m-1 px-2 py-4 shadow-sm hover:shadow-md bg-white dark:bg-gray-900 cursor-pointer transition duration-200 flex rounded-lg " +
        props.className
      }
    >
      {props.ping}
      <div className="ml-1">
        <p className={props.bold ? "font-bold" : ""}>{props.title}</p>
      </div>
    </div>
  );
};

export default MenuButton;
