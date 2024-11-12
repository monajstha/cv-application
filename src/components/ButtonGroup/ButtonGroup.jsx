import React from "react";
import "../../styles/buttonGroup.css";

export default function ButtonGroup({ buttons }) {
  return (
    <div className="buttonsWrapper">
      {buttons?.map((item) => (
        <button
          key={item?.id}
          id={item?.id}
          className={`button_${item.id}`}
          onClick={item?.onClick}
        >
          {item?.title}
        </button>
      ))}
    </div>
  );
}
