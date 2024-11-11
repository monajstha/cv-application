import React from "react";
import "./preview.css";

export default function Preview({ data }) {
  const { personalInfo, educationalInfo, professionalInfo } = data;

  const renderJobResponsibilitiesList = (job_responsibilities) => {
    if (!job_responsibilities) return;
    const list = job_responsibilities
      .substring(0, job_responsibilities.length - 1)
      .split(".")
      .map((item) => (
        <ul className="list">
          <li>{item}</li>
        </ul>
      ));
    return list;
  };

  return (
    <div className="previewContainer">
      {" "}
      {/* Personal Info */}
      <div className="personalInfo">
        <h1>{personalInfo?.full_name}</h1>
        <div className="contactInfoWrapper">
          <p>{personalInfo?.email}</p>
          <p>•</p>
          <p>{personalInfo?.phone_number}</p>
          <p>•</p>
          <p>
            {personalInfo?.address} {"  "}
          </p>
        </div>
      </div>
      {/* Educational Info */}
      <div className="sectionWrapper">
        <div className="sectionHeaderWrapper">
          <p className="sectionHeader">Education</p>
        </div>
        {educationalInfo?.map((item) => (
          <div className="sectionValueWrapper">
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
                <p>{educationalInfo[0]?.education_start_date}</p>
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
      {/* Professional Info */}
      <div className="sectionWrapper">
        <div className="sectionHeaderWrapper">
          <p className="sectionHeader">Experience</p>
        </div>
        {professionalInfo?.map((item) => (
          <div className="sectionValueWrapper">
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
    </div>
  );
}
