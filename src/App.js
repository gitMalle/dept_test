import React, { useState } from "react";
import "./styles/App.css";
import { SearchBar } from "./components/SearchBar";
import { CardGrid } from "./components/CardGrid";

function App() {
  const [selected, setSelected] = useState([]);

  const addCard = (location) => {
    if (!selected.includes(location)) {
      setSelected([...selected, location]);
    }
  }

  const removeCard = (location) => {
    const arrCopy = [...selected];
    const index = arrCopy.indexOf(location);
    arrCopy.splice(index, 1);
    setSelected(arrCopy);
  }

  return (
    <div className="App">
      <h1>Compare your Air</h1>
      <div className="my-4">
        <p>Compare the air quality between cities in the UK.</p>
        <p>Select cities to compare using the search tool below.</p>
      </div>
      <SearchBar onClick={clicked => addCard(clicked)} />
      <CardGrid selected={selected} onRemove={location => removeCard(location)} />
    </div>
  );
}

export default App;
