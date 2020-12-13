import React from "react";

interface TextBannerProps {
  title: string;
  message?: any;
}

const TextBanner: React.FC<TextBannerProps> = (props) => {
  return (
    <div>
      <p className="text-gray-600 dark:text-gray-500">
        <span className="font-mono font-semibold text-gray-700 dark:text-gray-400">
          {props.title}
        </span>
        {props.message ? (
          <>
            <br />
            {props.message}
          </>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default TextBanner;
