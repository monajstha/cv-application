import React, { useRef, useState } from "react";
import {
  educationalData,
  exampleData,
  professionalData,
} from "../../helpers/constants";
import CvForm from "../CV_Form/CvForm";
import Preview from "../CV_Preview/Preview";
import "./wrapper.css";
import { useReactToPrint, UseReactToPrintFn } from "react-to-print";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default function Wrapper() {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  const initialState = {
    personalInfo: {
      full_name: "",
      email: "",
      phone_number: "",
      address: "",
    },
    educationalInfo: [
      {
        id: new Date(),
        school_name: "",
        school_location: "",
        education_title: "",
        education_start_date: "",
        education_completion_date: "",
      },
    ],
    professionalInfo: [
      {
        id: new Date(),
        company_name: "",
        company_location: "",
        job_position: "",
        job_start_date: "",
        job_end_date: "",
        job_responsibilities: "",
      },
    ],
  };

  const [data, setData] = useState({ ...exampleData });

  const handleClear = () => {
    setData({ ...initialState });
  };

  const buttons = [
    {
      id: 1,
      title: "Clear All",
      onClick: handleClear,
    },
    {
      id: 2,
      title: "Download Resume",
      onClick: handlePrint,
    },
  ];

  const handleSubmit = (e) => {
    // stops the form from submitting
    e.preventDefault();
  };

  const handleInput = (parent, key, value, index) => {
    setData((prevState) => {
      let updatedArray = null;
      if (Array.isArray(prevState[parent])) {
        updatedArray = prevState[parent].map((item, i) =>
          i === index ? { ...item, [key]: value } : item
        );
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

  const handleAddInputSection = (parent, newInputs) => {
    setData((prevState) => {
      const updatedArr = [...prevState[parent], newInputs];
      return {
        ...prevState,
        [parent]: updatedArr,
      };
    });
  };

  const handleRemoveInputSection = (parent, removeId) => {
    const update = data?.[parent]?.filter((item) => item?.id !== removeId);
    setData((prevState) => ({
      ...prevState,
      [parent]: update,
    }));
  };

  return (
    <div className="container">
      <ButtonGroup buttons={buttons} />
      <div className="formContainer">
        <CvForm
          data={data}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleAddInputSection={handleAddInputSection}
          handleRemoveInputSection={handleRemoveInputSection}
        />
      </div>
      <div ref={contentRef} className="previewContainer">
        <Preview data={data} />
      </div>
    </div>
  );
}
