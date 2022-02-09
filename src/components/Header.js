import React from "react";
import Search from "./Search";

function Header({input, setInput, onSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      onSubmit={onSubmit}
      input={input}
      setInput={setInput}/>
    </header>
  );
}

export default Header;
