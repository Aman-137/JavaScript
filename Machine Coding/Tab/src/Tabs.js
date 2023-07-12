import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState();

  const TABS = [
    {
      label: "HTML",
      content: `The HyperText Markup Language or HTML is the standard markup
      language for documents designed to be displayed in a web browser.`
    },
    {
      label: "CSS",
      content: `Cascading Style Sheets is a style sheet language used for describing
      the presentation of a document written in a markup language such as
      HTML or XML.`
    },
    {
      label: "JavaScript",
      content: `JavaScript, often abbreviated as JS, is a programming language that
      is one of the core technologies of the World Wide Web, alongside
      HTML and CSS.`
    }
  ];

  return (
    <div className="App">
      <div>
        {TABS.map((tab, i) => (
          <button
            onClick={() => setActiveTab(tab.label)}
            className={activeTab === tab.label ? "active" : undefined}
            key={i}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {TABS.map(
          (tab, i) => activeTab === tab.label && <p key={i}>{tab.content}</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
