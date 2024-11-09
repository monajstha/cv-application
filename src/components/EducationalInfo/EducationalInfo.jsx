import React from "react";
import TextInput from "../TextInput/TextInput";

export default function EducationalInfo({ data, handleInput, index = 0 }) {
  console.log("educational info", data, data[index]);
  return (
    <>
      <TextInput
        id="school_name"
        label={"Educational Institution Name"}
        placeholder={"Enter your school/college name"}
        type="text"
        onChange={(e) =>
          handleInput("educationalInfo", "school_name", e.target.value, index)
        }
        value={data?.[index]?.school_name || ""}
      />

      <TextInput
        id="education_title"
        label={"Title"}
        type="text"
        placeholder={"Enter your education title/your degree"}
        onChange={(e) =>
          handleInput(
            "educationalInfo",
            "education_title",
            e.target.value,
            index
          )
        }
        value={data?.[index]?.education_title}
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
              e.target.value,
              index
            )
          }
          value={data?.[index]?.education_start_date}
        />

        <TextInput
          id="education_completion_date"
          className="calendar"
          label={"Completion Date"}
          placeholder={"Enter the completion date or expected completion date"}
          type="date"
          onChange={(e) =>
            handleInput(
              "educationalInfo",
              "education_completion_date",
              e.target.value,
              index
            )
          }
          value={data?.[index]?.education_completion_date}
        />
      </div>
    </>
  );
}
