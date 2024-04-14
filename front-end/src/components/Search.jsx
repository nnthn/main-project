// Search.jsx
import React, { useState } from "react";
import "./search.css";
import searchImg from "../assets/search.svg";

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
      // You can add additional logic here if needed, such as debouncing or throttling
      console.log(searchQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the searchQuery to the backend API for search
    console.log("Search query:", searchQuery);
    // You can make the API call here using fetch or Axios
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={searchQuery}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src={searchImg} alt="Search" className="search-icon" />
      </button>
    </form>
  );
}
