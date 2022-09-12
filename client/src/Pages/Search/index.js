import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const apikey = "4624eb9a";
  const response = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=${apikey}`)
      .then((response) => {
        setData(response);
        console.log(data)
      });

  }


  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="Movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="button" value="submit" onClick={response} />
      </form>
      <div>
        
      </div>
    </div>
  );
}

export default Search;
