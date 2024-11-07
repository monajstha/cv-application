import React, { forwardRef, useRef, useState } from "react";
import "./textInput.css";

export default function MyInput({ label, ...otherProps }) {
  return (
    <div className="container">
      <label className="label">{label}</label>
      <input className="textInput" {...otherProps} />
    </div>
  );
}

// export default TextInput;
