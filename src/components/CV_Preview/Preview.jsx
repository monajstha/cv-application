import React from "react";

export default function Preview({ data }) {
  const { personalInfo, educationalInfo, professionalInfo } = data;
  return (
    <div>
      {" "}
      <h1>{personalInfo?.full_name}</h1>
    </div>
  );
}
