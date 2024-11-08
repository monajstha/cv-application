import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import "./personalInfoInput.css";

export default function PersonalInfoInput() {
  const [data, setData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone_number: "",
    },
    educationalInfo: {
      school_name: "",
      education_title: "",
      education_start_date: "",
      education_completion_date: "",
    },
    professionalInfo: {
      company_name: "",
      job_position: "",
      job_start_date: "",
      job_end_date: "",
      job_responsibilities: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
  };

  const handleInput = (parent, key, value) => {
    setData((prevState) => ({
      ...prevState,
      [parent]: {
        [key]: value,
      },
    }));
  };

  return (
    <div className="container">
      <form id="cv_form" onSubmit={handleSubmit}>
        <section>
          <h3>Personal Information</h3>
          <TextInput
            id={"full_name"}
            label={"Full Name"}
            placeholder={"Enter your full name"}
            onChange={(e) =>
              handleInput("personalInfo", "fullName", e.target.value)
            }
            value={data?.fullName}
          />
          <TextInput
            id="email"
            label={"Email"}
            type="email"
            placeholder={"Enter .."}
            onChange={(e) =>
              handleInput("personalInfo", "email", e.target.value)
            }
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

        <section>
          <h3>Educational Experience</h3>
          <TextInput
            id="school_name"
            label={"Educational Institution Name"}
            placeholder={"Enter your school/college name"}
            type="text"
            onChange={(e) =>
              handleInput("educationalInfo", "school_name", e.target.value)
            }
            value={data?.school_name}
          />

          <TextInput
            id="education_title"
            label={"Title"}
            type="text"
            placeholder={"Enter your education title/your degree"}
            onChange={(e) =>
              handleInput("educationalInfo", "education_title", e.target.value)
            }
            value={data?.education_title}
          />

          <div className="rowInputs">
            <TextInput
              id="education_start_date"
              className="calendar"
              label={"Start Date"}
              placeholder={"Enter the start date"}
              type="date"
              onChange={(e) =>
                handleInput(
                  "educationalInfo",
                  "education_start_date",
                  e.target.value
                )
              }
              value={data?.education_start_date}
            />

            <TextInput
              id="education_completion_date"
              className="calendar"
              label={"Completion Date"}
              placeholder={
                "Enter the completion date or expected completion date"
              }
              type="date"
              onChange={(e) =>
                handleInput(
                  "educationalInfo",
                  "education_completion_date",
                  e.target.value
                )
              }
              value={data?.education_completion_date}
            />
          </div>
        </section>

        <section>
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
                handleInput(
                  "professionalInfo",
                  "job_start_date",
                  e.target.value
                )
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
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
