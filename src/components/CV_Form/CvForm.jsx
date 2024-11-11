import React, { useState } from "react";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import "./CvForm.css";
import {
  educationalData,
  educationalDataEmpty,
  professionalData,
} from "../../helpers/constants";
import ProfessionalInfo from "../ProfessionalInfo/ProfessionalInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

export default function CvForm({
  data,
  handleSubmit,
  handleInput,
  handleAddInputSection,
  handleRemoveInputSection,
}) {
  console.log("Data in CV Form", data);
  return (
    <form key={"CvForm"} id="cv_form" onSubmit={handleSubmit}>
      <section key="personalInfo">
        <h3>Personal Information</h3>
        <PersonalInfo data={data} handleInput={handleInput} />
      </section>

      <section key={"educationalInfo"}>
        <h3>Education</h3>

        {data?.educationalInfo?.map((item, index) => (
          <div key={item?.id} className="sectionedInputWrapper">
            <EducationalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
            />
            {/* {index > 0 && ( */}
            <button
              className="removeSectionBtn"
              key={index}
              onClick={() =>
                handleRemoveInputSection("educationalInfo", item?.id)
              }
            >
              Remove
            </button>
            {/* )} */}
          </div>
        ))}
        <button
          className="addSectionBtn"
          onClick={() =>
            handleAddInputSection("educationalInfo", {
              id: new Date(),
              ...educationalDataEmpty,
            })
          }
        >
          Add Education
        </button>
      </section>

      <section key={"professionalInfo"}>
        <h3>Professional Experience</h3>
        {data?.professionalInfo?.map((item, index) => (
          <div key={item?.id} className="sectionedInputWrapper">
            <ProfessionalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
            />
            {/* {index > 0 && ( */}
            <button
              className="removeSectionBtn"
              key={item?.id}
              onClick={() =>
                handleRemoveInputSection("professionalInfo", item?.id)
              }
            >
              Remove
            </button>
            {/* )} */}
          </div>
        ))}
        <button
          className="addSectionBtn"
          onClick={() =>
            handleAddInputSection("professionalInfo", {
              id: new Date(),
              ...professionalData,
            })
          }
        >
          Add Profession
        </button>
      </section>
    </form>
  );
}
