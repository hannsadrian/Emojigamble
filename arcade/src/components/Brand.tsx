import React from "react";
import BrandAlt from "./BrandAlt";

interface BrandProps {
  centered?: boolean;
}

const Brand: React.FC<BrandProps> = (props) => {
  const alt = localStorage.getItem("alt");

  return (
    <>
      {!alt ? (
        <div
          className={
            (!props.centered ? "text-left " : "text-center ") +
            "flex select-none"
          }
        >
          <div className={(props.centered ? "mx-auto " : "") + "flex"}>
            {!props.centered ? (
              <span className="my-auto mr-2 text-4xl">🕹</span>
            ) : (
              <></>
            )}
            <div className="my-auto">
              {!props.centered ? (
                <p className="uppercase text-sm text-gray-500 dark:text-gray-400 tracking-wide -mb-1">
                  funzel environment
                </p>
              ) : (
                <></>
              )}
              <p className={"text-xl font-bold" + (props.centered ? " mr-2" : "")}>
                {props.centered ? "🕹" : ""} Emoji
                <span className="text-orange-500">gamble</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <BrandAlt />
      )}
    </>
  );
};

export default Brand;
