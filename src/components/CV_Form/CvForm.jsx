import React, { useState } from "react";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import TextInput from "../TextInput/TextInput";
import "./CvForm.css";
import { educationalData } from "../../helpers/constants";

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
        {/* <div className="wrapper">
          <label htmlFor="Full Name">Full Name</label>
          <input type="text" />
        </div> */}
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

        {data?.educationalInfo?.map((item, index) => {
          console.log("++++++", { index });
          return (
            <div>
              <EducationalInfo
                key={item?.id}
                data={data}
                handleInput={handleInput}
                index={index}
              />
              {index > 0 && (
                <button
                  key={index}
                  onClick={() =>
                    handleRemoveInputSection("educationalInfo", item?.id)
                  }
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </section>

      <button
        onClick={() =>
          handleAddInputSection("educationalInfo", {
            id: new Date(),
            ...educationalData,
          })
        }
      >
        Add
      </button>

      {/* {data?.educationalInfo.length > 1 && (
        <button onClick={() => handleRemoveInputSection("educationalInfo")}>
          Remove
        </button>
      )} */}

      <section key={"professionalInfo"}>
        <h3>Professional Experience</h3>
        <TextInput
          id="company_name"
          label={"Company Name"}
          type="text"
          placeholder="Enter the company's name"
          onChange={(e) =>
            handleInput("professionalInfo", "company_name", e.target.value)
          }
          value={data?.company_name}
        />

        <TextInput
          id="job_position"
          label={"Work Position/Title"}
          type="text"
          placeholder="Enter the company's name"
          onChange={(e) =>
            handleInput("professionalInfo", "job_position", e.target.value)
          }
          value={data?.job_position}
        />

        <div className="rowInputs">
          <TextInput
            id="job_start_date"
            className="calendar"
            label={"Start Date"}
            type="date"
            placeholder="Enter the start date"
            onChange={(e) =>
              handleInput("professionalInfo", "job_start_date", e.target.value)
            }
            value={data?.job_start_date}
          />

          <TextInput
            id="job_end_date"
            className="calendar"
            label={"End Date"}
            type="date"
            placeholder="Enter the end date"
            onChange={(e) =>
              handleInput("professionalInfo", "job_end_date", e.target.value)
            }
            value={data?.job_end_date}
          />
        </div>

        <TextInput
          id="job_responsibilities"
          label={"Main Responsibilities"}
          type="text"
          placeholder="Enter your main roles or responsibilities"
          onChange={(e) =>
            handleInput(
              "professionalInfo",
              "job_responsibilities",
              e.target.value
            )
          }
          value={data?.job_responsibilities}
        />
      </section>
    </form>
  );
}
