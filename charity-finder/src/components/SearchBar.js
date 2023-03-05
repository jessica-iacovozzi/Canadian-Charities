import React, { useState } from "react";
import "./SearchBar.css";
import { API_URL, scrollToTop } from "../Home";

export default function SearchBar({ placeholder, data, setCharities, setPageCount }) {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setInputValue(searchWord);
    const newFilter = data.filter((charity) => {
      return charity.attributes.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleCharitySearch = async (data) => {
    setName(data);
    let name = data;
    const res = await fetch(
      `${API_URL}?name=${name}`
      );
    const charity = await res.json();
    setCharities([charity.data.data[0]]);
    setPageCount(1);
    setFilteredData([]);
    scrollToTop(820);
    setInputValue('');
  };

  return (
    <div style={{height: "145px"}} className="search">
      <h4 className="text-center order-title muli mb-0">Search by name</h4>
      <div className="searchInputs mh-100">
        <input className="form-control mt-4 mb-2 muli" type="text" placeholder={placeholder} onChange={handleFilter} value={inputValue} />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResults">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <p onClick={() => {handleCharitySearch(value.attributes.name)}}>{value.attributes.name}</p>
            )
          })}
        </div>
      )}
    </div>
  )
};
