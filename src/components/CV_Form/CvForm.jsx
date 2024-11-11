import React, { useState } from "react";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import TextInput from "../TextInput/TextInput";
import "./CvForm.css";
import { educationalData, professionalData } from "../../helpers/constants";
import ProfessionalInfo from "../ProfessionalInfo/ProfessionalInfo";

export default function CvForm({
  data,
  handleInput,
  handleSubmit,
  handleAddInputSection,
  handleRemoveInputSection,
}) {
  // console.log("Inside CvForm", data);

  return (
    <form key={"CvForm"} id="cv_form" onSubmit={handleSubmit}>
      <section key="personalInfo">
        <h3>Personal Information</h3>
        <TextInput
          id={"full_name"}
          label={"Full Name"}
          placeholder={"Enter your full name"}
          onChange={(e) =>
            handleInput("personalInfo", "full_name", e.target.value)
          }
          value={data?.full_name}
        />
        <TextInput
          id="email"
          label={"Email"}
          type="email"
          placeholder={"Enter .."}
          onChange={(e) => handleInput("personalInfo", "email", e.target.value)}
          value={data?.email}
        />
        <TextInput
          id="phone_number"
          label={"Phone Number"}
          placeholder={"Enter .."}
          type="number"
          onChange={(e) =>
            handleInput("personalInfo", "phone_number", e.target.value)
          }
          value={data?.phone_number}
        />
      </section>

      <section key={"educationalInfo"}>
        <h3>Educational Experience</h3>

        {data?.educationalInfo?.map((item, index) => (
          <div className="sectionedInputWrapper">
            <EducationalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
            />
            {index > 0 && (
              <button
                className="removeSectionBtn"
                key={index}
                onClick={() =>
                  handleRemoveInputSection("educationalInfo", item?.id)
                }
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="addSectionBtn"
          onClick={() =>
            handleAddInputSection("educationalInfo", {
              id: new Date(),
              ...educationalData,
            })
          }
        >
          Add Education
        </button>
      </section>

      <section key={"professionalInfo"}>
        <h3>Professional Experience</h3>
        {data?.professionalInfo?.map((item, index) => (
          <div className="sectionedInputWrapper">
            <ProfessionalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
            />
            {index > 0 && (
              <button
                className="removeSectionBtn"
                key={index}
                onClick={() =>
                  handleRemoveInputSection("professionalInfo", item?.id)
                }
              >
                Remove
              </button>
            )}
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
