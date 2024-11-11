import React from "react";
import "./textInput.css";

export default function TextInput({
  id,
  label,
  value,
  onChange,
  ...otherProps
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        className="textInput"
        {...otherProps}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
