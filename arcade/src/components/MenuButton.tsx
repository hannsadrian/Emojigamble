import React from "react";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  title: string;
  bold?: boolean;
  ping: any;
  className?: string;
  link?: string;
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.link ? props.link : "/"}>
        <div
          className={
            "m-1 px-2 py-4 shadow-sm hover:shadow-md bg-white dark:bg-gray-900 cursor-pointer transition duration-200 flex rounded-lg " +
            props.className
          }
        >
          <div className="my-auto sm:mb-auto ml-3 mr-2">{props.ping}</div>
          <div className="ml-1">
            <p className={props.bold ? "font-bold" : ""}>{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuButton;
