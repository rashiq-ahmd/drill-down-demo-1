import React from "react";
import "./styles.css";
import WidgetContainer from "./components/WidgetContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Drill-down demo</h1>
      <p>Click on bar </p>
      <WidgetContainer />
    </div>
  );
}
