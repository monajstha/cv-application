import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";

export default function EducationalInfo({
  data,
  handleInput,
  index = 0,
  handleRemoveInputSection,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      {!isCollapsed ? (
        <>
          <button
            className="collapseSectionBtn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Hide
          </button>
          <TextInput
            id="school_name"
            label={"Educational Institution Name"}
            placeholder={"Enter your school/college name"}
            type="text"
            onChange={(e) =>
              handleInput(
                "educationalInfo",
                "school_name",
                e.target.value,
                index
              )
            }
            value={data?.educationalInfo[index]?.school_name}
          />

          <TextInput
            id="school_location"
            label={"Location"}
            type="text"
            placeholder={"Enter your school/college address "}
            onChange={(e) =>
              handleInput(
                "educationalInfo",
                "school_location",
                e.target.value,
                index
              )
            }
            value={data?.educationalInfo[index]?.school_location}
          />

          <TextInput
            id="education_start_date"
            className="calendar"
            label={"Start Date"}
            placeholder={"Enter the start date"}
            type="text"
            onChange={(e) =>
              handleInput(
                "educationalInfo",
                "education_start_date",
                e.target.value,
                index
              )
            }
            value={data?.educationalInfo[index]?.education_start_date}
          />

          <TextInput
            id="education_completion_date"
            className="calendar"
            label={"Completion Date"}
            placeholder={"Enter the completion date"}
            type="text"
            onChange={(e) =>
              handleInput(
                "educationalInfo",
                "education_completion_date",
                e.target.value,
                index
              )
            }
            value={data?.educationalInfo[index]?.education_completion_date}
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
            value={data?.educationalInfo[index]?.education_title}
          />
          <button
            className="removeSectionBtn"
            key={index}
            onClick={handleRemoveInputSection}
          >
            Remove
          </button>
        </>
      ) : (
        <div className="expandBtnWrapper">
          <p
            className={
              data?.educationalInfo[index]?.school_name
                ? "sectionCollapseHeader"
                : "sectionCollapsePlaceholder"
            }
          >
            {data?.educationalInfo[index]?.school_name ||
              "Enter your school name"}
          </p>
          <button
            className="expandSectionBtn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Show
          </button>
        </div>
      )}
    </>
  );
}
