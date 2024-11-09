import React, { useState } from "react";
import CvForm from "../CV_Form/CvForm";
import Preview from "../CV_Preview/Preview";
import "./wrapper.css";

export default function Wrapper() {
  const [data, setData] = useState({
    personalInfo: {
      full_name: "",
      email: "",
      phone_number: "",
    },
    educationalInfo: [
      {
        school_name: "",
        education_title: "",
        education_start_date: "",
        education_completion_date: "",
      },
    ],
    professionalInfo: [
      {
        company_name: "",
        job_position: "",
        job_start_date: "",
        job_end_date: "",
        job_responsibilities: "",
      },
    ],
  });

  console.log({ data });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
  };

  const handleInput = (parent, key, value, index) => {
    console.log("----- Inside handle Input -----");
    console.log({ parent }, { key }, { value }, { index });

    setData((prevState) => {
      console.log({ prevState });
      let updatedArray = null;
      if (Array.isArray(prevState[parent])) {
        updatedArray = prevState[parent].map((item, i) =>
          i === index ? { ...item, [key]: value } : item
        );
        updatedArray[index] = {
          ...updatedArray[index],
          [key]: value,
        };
      } else {
        updatedArray = {
          ...prevState[parent],
          [key]: value,
        };
      }

      return {
        ...prevState,
        [parent]: updatedArray,
      };
    });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <CvForm
          data={data}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="previewContainer">
        <Preview data={data} />
      </div>
    </div>
  );
}
