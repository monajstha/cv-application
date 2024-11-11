import React from "react";
import TextInput from "../TextInput/TextInput";
import "./professionalInfo.css";

export default function ProfessionalInfo({ data, handleInput, index = 0 }) {
  return (
    <>
      <TextInput
        id="company_name"
        label={"Company Name"}
        type="text"
        placeholder="Enter the company's name"
        onChange={(e) =>
          handleInput("professionalInfo", "company_name", e.target.value, index)
        }
        value={data?.professionalInfo[index]?.company_name}
      />

      <TextInput
        id="job_position"
        label={"Work Position/Title"}
        type="text"
        placeholder="Enter the company's name"
        onChange={(e) =>
          handleInput("professionalInfo", "job_position", e.target.value, index)
        }
        value={data?.professionalInfo[index]?.job_position}
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
              e.target.value,
              index
            )
          }
          value={data?.professionalInfo[index]?.job_start_date}
        />

        <TextInput
          id="job_end_date"
          className="calendar"
          label={"End Date"}
          type="date"
          placeholder="Enter the end date"
          onChange={(e) =>
            handleInput(
              "professionalInfo",
              "job_end_date",
              e.target.value,
              index
            )
          }
          value={data?.professionalInfo[index]?.job_end_date}
        />
      </div>

      <label htmlFor="job_responsibilities"></label>
      <textarea
        id="job_responsibilities"
        rows={5}
        cols={50}
        placeholder="Enter your job responsibilities"
        onChange={(e) =>
          handleInput(
            "professionalInfo",
            "job_responsibilities",
            e.target.value,
            index
          )
        }
      />
      <TextInput
        id="job_responsibilities"
        label={"Main Responsibilities"}
        type="text"
        placeholder="Enter your main roles or responsibilities"
        onChange={(e) =>
          handleInput(
            "professionalInfo",
            "job_responsibilities",
            e.target.value,
            index
          )
        }
        value={data?.professionalInfo[index]?.job_responsibilities}
      />
    </>
  );
}
