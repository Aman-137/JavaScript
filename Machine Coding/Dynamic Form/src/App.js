// src/App.js
import React from "react";
import "./styles.css";
import DynamicForm from "./DynamicForm";

function App() {
  const formStructure = {
    name: { type: "text", label: "Name" },
    email: { type: "email", label: "Email" },
    age: { type: "number", label: "Age" }
  };

  return (
    <div className="App">
      <DynamicForm formStructure={formStructure} />
    </div>
  );
}

export default App;
