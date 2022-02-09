import React, {useState} from "react";

function Search({onSubmit}) {

  const [input, setInput]=useState('')

  function onSearchSubmit(e){
    e.preventDefault()
    onSubmit(input)
    console.log(input)
  }



  return (
    <form onSubmit={onSearchSubmit} className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
