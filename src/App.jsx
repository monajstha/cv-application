import { useState } from "react";
import "./App.css";
import Preview from "./components/CV_Preview/Preview";
import PersonalInfoInput from "./components/CV_Wrapper/Wrapper";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <div>
      <PersonalInfoInput />
    </div>
  );
}

export default App;
