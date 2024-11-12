import React from "react";
import TextInput from "../TextInput/TextInput";

export default function PersonalInfo({ data, handleInput }) {
  return (
    <>
      <TextInput
        id={"full_name"}
        label={"Full Name"}
        placeholder={"Enter your full name"}
        onChange={(e) =>
          handleInput("personalInfo", "full_name", e.target.value)
        }
        value={data?.personalInfo?.full_name}
      />
      <TextInput
        id="email"
        label={"Email"}
        type="email"
        placeholder={"Enter your email"}
        onChange={(e) => handleInput("personalInfo", "email", e.target.value)}
        value={data?.personalInfo?.email}
      />
      <TextInput
        id="phone_number"
        label={"Phone Number"}
        placeholder={"Enter your phone number"}
        type="text"
        onChange={(e) =>
          handleInput("personalInfo", "phone_number", e.target.value)
        }
        value={data?.personalInfo?.phone_number}
      />

      <TextInput
        id="address"
        label={"Address"}
        placeholder={"Enter your address"}
        type="text"
        onChange={(e) => handleInput("personalInfo", "address", e.target.value)}
        value={data?.personalInfo?.address}
      />
    </>
  );
}
