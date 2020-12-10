import React from "react";
import BrandAlt from "./BrandAlt";

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => {
  const alt = localStorage.getItem("alt");

  return (
    <>
      {!alt ? (
        <div className="flex select-none text-left">
          <span className="text-4xl my-auto mr-2">🕹</span>
          <div>
            <p className="uppercase text-sm text-gray-500 dark:text-gray-300 tracking-wide -mb-1">
              funzel environment
            </p>
            <p className="text-xl font-bold">
              Emoji<span className="text-orange-500">gamble</span>
            </p>
          </div>
        </div>
      ) : (
        <BrandAlt />
      )}
    </>
  );
};

export default Brand;
