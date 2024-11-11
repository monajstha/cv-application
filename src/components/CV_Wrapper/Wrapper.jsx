import React, { useState } from "react";
import { educationalData, professionalData } from "../../helpers/constants";
import CvForm from "../CV_Form/CvForm";
import Preview from "../CV_Preview/Preview";
import "./wrapper.css";

export default function Wrapper() {
  const [data, setData] = useState({
    personalInfo: {
      full_name: "Manoj Shrestha",
      email: "manojstha700@gmail.com",
      phone_number: "+977 9806684908",
      address: "Pokhara, Gandaki Province, Nepal",
    },
    educationalInfo: [
      {
        id: new Date(),
        ...educationalData,
      },
      {
        id: new Date(),
        ...educationalData,
      },
    ],
    professionalInfo: [
      {
        id: new Date(),
        ...professionalData,
      },
      {
        id: new Date(),
        ...professionalData,
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
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
    const update = data?.[parent]?.map((item) => item);
    update.push(newInputs);
    setData((prevState) => ({
      ...prevState,
      [parent]: update,
    }));
  };

  const handleRemoveInputSection = (parent, removeId) => {
    console.log("Inside remove Input Section");
    const update = data?.[parent]?.filter((item) => item?.id !== removeId);
    setData((prevState) => ({
      ...prevState,
      [parent]: update,
    }));
  };

  return (
    <div className="container">
      <div className="formContainer">
        <CvForm
          data={data}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          handleAddInputSection={handleAddInputSection}
          handleRemoveInputSection={handleRemoveInputSection}
        />
      </div>
      <div className="previewContainer">
        <Preview data={data} />
      </div>
    </div>
  );
}
