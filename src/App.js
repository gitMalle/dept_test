import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Compare your Air</h1>
      <div className="my-4">
        <p>Compare the air quality between cities in the UK.</p>
        <p>Select cities to compare using the search tool below.</p>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
