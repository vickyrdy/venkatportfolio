import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";
import resumeData from "./data/resumeData";
import "./styles/App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Game Design and Development");

  return (
    <div className="app">
      <Header name={resumeData.name} contact={resumeData.contact} />
      <Tabs
        tabs={resumeData.tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent content={resumeData.tabs[activeTab]} />
    </div>
  );
}

export default App;
