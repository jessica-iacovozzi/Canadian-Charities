import React, { useState } from "react";
import "../css/SearchBar.css";
import { API_URL, scrollTo } from "../Home";

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
    scrollTo("charities", "start");
    setInputValue('');
  };

  return (
    <div className="mx-2 search-div">
      <div style={{height: "145px"}} className="search">
        <h4 className="text-center order-title mb-0">Search by name</h4>
        <div className="searchInputs mh-100">
          <input className="form-control rounded-1 mt-4 mb-1" type="text" placeholder={placeholder} onChange={handleFilter} value={inputValue} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {filteredData.length !== 0 && (
          <div className="dataResults">
            {filteredData.slice(0, 30).map((value, key) => {
              return (
                <p onClick={() => {handleCharitySearch(value.attributes.name)}}>{value.attributes.name}</p>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
};
