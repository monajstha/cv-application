import { useState } from "react";
import "./App.css";
import PersonalInfoInput from "./components/PersonalInfoInput/PersonalInfoInput";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <div className="appContainer">
      <PersonalInfoInput />
    </div>
  );
}

export default App;
