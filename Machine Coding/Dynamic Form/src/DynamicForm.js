import React, { useState } from "react";

function DynamicForm({ formStructure }) {
  const [formData, setFormData] = useState({});
  const [formProgress, setFormProgress] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    const newFormProgress = Object.keys(updatedFormData).length;

    setFormData(updatedFormData);
    setFormProgress(newFormProgress);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <progress max={Object.keys(formStructure).length} value={formProgress} />
      <form>
        {Object.keys(formStructure).map((fieldName) => (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{formStructure[fieldName].label}</label>
            <input
              type={formStructure[fieldName].type}
              name={fieldName}
              id={fieldName}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default DynamicForm;
