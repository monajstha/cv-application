import React from "react";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import "./CvForm.css";
import {
  educationalDataEmpty,
  professionalDataEmpty,
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
  return (
    <form key={"CvForm"} id="cv_form" onSubmit={handleSubmit}>
      <section className="inputSection" key="personalInfo">
        <h3>Personal Information</h3>
        <PersonalInfo data={data} handleInput={handleInput} />
      </section>

      <section className="inputSection" key={"educationalInfo"}>
        <h3>Education</h3>

        {data?.educationalInfo?.map((item, index) => (
          <div key={item?.id} className="sectionedInputWrapper">
            <EducationalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
              handleRemoveInputSection={() =>
                handleRemoveInputSection("educationalInfo", item?.id)
              }
            />
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

      <section className="inputSection" key={"professionalInfo"}>
        <h3>Professional Experience</h3>
        {data?.professionalInfo?.map((item, index) => (
          <div key={item?.id} className="sectionedInputWrapper">
            <ProfessionalInfo
              key={item?.id}
              data={data}
              handleInput={handleInput}
              index={index}
              handleRemoveInputSection={() =>
                handleRemoveInputSection("professionalInfo", item?.id)
              }
            />
          </div>
        ))}
        <button
          className="addSectionBtn"
          onClick={() =>
            handleAddInputSection("professionalInfo", {
              id: new Date(),
              ...professionalDataEmpty,
            })
          }
        >
          Add Profession
        </button>
      </section>
    </form>
  );
}
