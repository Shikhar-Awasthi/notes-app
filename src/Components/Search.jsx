import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <div className="search">
        <div>
          <MdSearch size="1.3rem" color="#fff" />
        </div>
        <div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Search;
