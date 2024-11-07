import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import "./personalInfoInput.css";

export default function PersonalInfoInput() {
  const [data, setData] = useState({
    fullName: "",
  });

  console.log("object");

  const handleSubmit = () => {
    console.log({ data });
  };

  const handleInput = (key, value) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="container">
      <section>
        <h3>Personal Information</h3>
        <TextInput
          label={"Full Name"}
          placeholder={"Enter your full name"}
          onChange={(e) => handleInput("fullName", e.target.value)}
          value={data?.fullName}
        />
        <TextInput label={"Email"} type="email" placeholder={"Enter .."} />
        <TextInput
          label={"Phone Number"}
          placeholder={"Enter .."}
          type="number"
        />
      </section>

      <section>
        <h3>Educational Experience</h3>
        <TextInput
          label={"School Name"}
          placeholder={"Enter your school name"}
        />

        <TextInput
          label={"Title"}
          type="text"
          placeholder={"Enter your education title/your degree"}
        />

        <div className="rowInputs">
          <TextInput
            className="calendar"
            label={"Start Date"}
            placeholder={"Enter the start date"}
            type="date"
          />

          <TextInput
            className="calendar"
            label={"Completion Date"}
            placeholder={
              "Enter the completion date or expected completion date"
            }
            type="date"
          />
        </div>
      </section>

      <section>
        <h3>Professional Experience</h3>
        <TextInput
          label={"Company Name"}
          type="text"
          placeholder="Enter the company's name"
        />

        <TextInput
          label={"Position Title"}
          type="text"
          placeholder="Enter the company's name"
        />

        <div className="rowInputs">
          <TextInput
            className="calendar"
            label={"Start Date"}
            type="date"
            placeholder="Enter the start date"
          />

          <TextInput
            className="calendar"
            label={"End Date"}
            type="date"
            placeholder="Enter the end date"
          />
        </div>

        <TextInput
          label={"Main Responsibilities"}
          type="text"
          placeholder="Enter your main roles or responsibilities"
        />
      </section>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
