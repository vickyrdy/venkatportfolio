import React from "react";
import "../styles/Tabs.css";

function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="tabs">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Tabs;
