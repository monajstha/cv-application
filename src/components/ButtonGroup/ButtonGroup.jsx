import React from "react";
import "./buttonGroup.css";

export default function ButtonGroup({ buttons }) {
  return (
    <div className="buttonsWrapper">
      {buttons?.map((item) => (
        <>
          <button
            id={item.id}
            className={`button_${item.id}`}
            onClick={item?.onClick}
          >
            {item?.title}
          </button>
        </>
      ))}
    </div>
  );
}
