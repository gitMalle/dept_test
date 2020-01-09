import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SearchBar.css";

export const SearchBar = props => {
  const [locations, setLocations] = useState([]);
  const [results, setResults] = useState([]);
  const [searchText, setText] = useState("");

  // initally fetch all locations from api as there is no search endpoint
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await axios.get(
        "https://api.openaq.org/v1/locations?country=GB&limit=10000"
      );
      setLocations(res.data.results);
    };
    fetchLocations();
  }, []);

  // update results every time the user changes the search text
  useEffect(() => {
    searchText.length > 0
      ? setResults(
          locations.filter(location =>
            location.location.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      : setResults([]);
  }, [searchText]);

  const handleClick = (result) => {
    props.onClick(result);
    setResults([]);
    setText('');
  }

  return (
    <div className="my-5 mx-auto search-container">
      <input
        type="search"
        className="search-bar"
        placeholder="Enter city name..."
        value={searchText}
        onChange={ev => setText(ev.target.value)}
      />
      {searchText.length > 0 &&
      <div className="result-container">
        {results.map(result => (
            <div key={result.id} className="result-option" onClick={() => handleClick(result)}>
                {result.location}
            </div>
        ))}
      </div>
      }
      
    </div>
  );
};
