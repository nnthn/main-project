// Search.jsx

import "./search.css";
import searchImg from "../assets/search.svg";
import baseUrl from "../config.jsx";
import React, { useState, useEffect } from 'react';

const SearchComponent = ({setSelectedItems,selectedItems}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowPopup(false);
      return;
    }

    // Perform your GET request to fetch search results
    const fetchSearchResults = async () => {
      try {
          const response = await fetch(`${baseUrl}/items?q=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
          setShowPopup(true);
        } else {
          console.error('Failed to fetch search results');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleItemClick = (item) => {
    // Handle item selection
    console.log('Selected item:', item);
    setSelectedItems([...selectedItems, item]);
    setSearchTerm('');
    setShowPopup(false);
  };

  return (
      <div >
        <div >
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className="search-button"><img src={searchImg}/></button>
          </form>
          <div>
            {showPopup && (
                <div style={{ position: 'relative' }}>
                  <div className="search-dropdown"
                    style={{
                        
                        top: '100%',
                        left: 0,
                        
                        width: '40rem',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        zIndex: 999
                    }}
                  >
                    {searchResults.map((result) => (
                        <div
                          key={result[0]}
                          style={{ padding: '8px', cursor: 'pointer' }}
                          onClick={() => handleItemClick(result)}
                        >
                          {result[1].itemName}
                        </div>
                    ))}
                  </div>
                </div>
            )}
            

            
          </div>
        </div>
      </div>
  );
};

export default SearchComponent;
