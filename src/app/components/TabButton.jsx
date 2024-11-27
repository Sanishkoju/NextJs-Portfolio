import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = (props) => {
  const buttonClasses = props.active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {props.children}
      </p>
      
    </button>
  );
};

export default TabButton;