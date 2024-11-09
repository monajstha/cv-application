import React, { useState } from "react";
import EducationalInfo from "../EducationalInfo/EducationalInfo";
import TextInput from "../TextInput/TextInput";
import "./CvForm.css";

export default function CvForm({ data, handleInput, handleSubmit }) {
  console.log("Inside CvForm", data);
  const renderEducationalInfo = (index = 0) => {
    return (
      <EducationalInfo
        data={data?.educationalInfo}
        handleInput={handleInput}
        index={index}
      />
    );
  };

  const [educationalInfo, setEducationalInfo] = useState([
    renderEducationalInfo(),
  ]);

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

        {educationalInfo?.map((item, index) => {
          return (
            <div key={data?.educationalInfo[index]?.school_name}>{item}</div>
          );
        })}
      </section>

      <button
        onClick={() =>
          setEducationalInfo((prevState) => [
            ...prevState,
            renderEducationalInfo(prevState.length),
          ])
        }
      >
        Add
      </button>

      {educationalInfo.length > 1 && (
        <button
          onClick={() => {
            const allEducationalInfo = educationalInfo.map((item) => item);
            allEducationalInfo.pop();
            setEducationalInfo(allEducationalInfo);
          }}
        >
          Remove
        </button>
      )}

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
