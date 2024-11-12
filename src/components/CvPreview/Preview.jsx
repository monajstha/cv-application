import React, { forwardRef } from "react";
import "../../styles/preview.css";

export default function Preview({ data }) {
  const { personalInfo, educationalInfo, professionalInfo } = data;

  const renderJobResponsibilitiesList = (job_responsibilities) => {
    if (!job_responsibilities) return;
    const list = job_responsibilities
      .substring(0, job_responsibilities.length - 1)
      .split(".")
      .map((item, index) => (
        <ul key={index} className="list">
          <li key={index}>{item}</li>
        </ul>
      ));
    return list;
  };

  const isSectionRendered = (data) => {
    let display = false;
    if (Array.isArray(data)) {
      data.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (key !== "id" && item[key] !== "") {
            display = true;
          }
        });
      });
    } else {
      display = Object.values(data).some((value) => value !== "");
    }
    return display;
  };

  return (
    <div className="previewWrapper">
      {" "}
      {/* Personal Info */}
      {isSectionRendered(personalInfo) && (
        <div className="personalInfo">
          <h1>{personalInfo?.full_name}</h1>
          <div className="contactInfoWrapper">
            <p>{personalInfo?.email}</p>
            {personalInfo?.email && <p>•</p>}
            <p>{personalInfo?.phone_number}</p>
            {personalInfo?.phone_number && <p>•</p>}
            <p>
              {personalInfo?.address} {"  "}
            </p>
          </div>
        </div>
      )}
      {/* Educational Info */}
      {isSectionRendered(educationalInfo) && (
        <div className="sectionWrapper">
          <div className="sectionHeaderWrapper">
            <p className="sectionHeader">Education</p>
          </div>
          {educationalInfo?.map((item) => (
            <div key={item?.id} className="sectionValueWrapper">
              <div className="infoTitleWrapper">
                <div className="dateWrapper">
                  <p>{item?.school_name}</p>
                  <p className="separator">
                    {" "}
                    <strong>-</strong>{" "}
                  </p>
                  <p>{item?.school_location}</p>
                </div>
                <div className="dateWrapper">
                  <p>{item?.education_start_date}</p>
                  <p className="separator">
                    {" "}
                    <strong>-</strong>{" "}
                  </p>
                  <p>{item?.education_completion_date}</p>
                </div>
              </div>
              <p className="value">{item?.education_title}</p>
            </div>
          ))}
        </div>
      )}
      {/* Professional Info */}
      {isSectionRendered(professionalInfo) && (
        <div className="sectionWrapper">
          <div className="sectionHeaderWrapper">
            <p className="sectionHeader">Experience</p>
          </div>
          {professionalInfo?.map((item) => (
            <div key={item?.id} className="sectionValueWrapper">
              <div className="infoTitleWrapper">
                <div className="dateWrapper">
                  <p>{item?.company_name}</p>
                  <p className="separator">
                    {" "}
                    <strong>-</strong>{" "}
                  </p>
                  <p>{item?.company_location}</p>
                </div>
                <div className="dateWrapper">
                  <p>{item?.job_start_date}</p>
                  <p className="separator">
                    {" "}
                    <strong>-</strong>{" "}
                  </p>
                  <p>{item?.job_end_date}</p>
                </div>
              </div>
              <p className="value">{item?.job_position}</p>
              {renderJobResponsibilitiesList(item?.job_responsibilities)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
