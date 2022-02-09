import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingArray, setListingArray] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((r) => r.json())
      .then((data) => setListingArray(data));
  }, []);

  function onDelete(listingToRemove) {
    setListingArray(
      listingArray.filter((listing) => {
        if (listing.id !== listingToRemove.id) {
          return listing;
        }
      })
    );
  }

  const searchArray = listingArray.filter((listing) => 
    listing.description.includes(input)
  );

  return (
    <div className="app">
      <Header onSubmit={setInput} />
      <ListingsContainer onDelete={onDelete} listingArray={searchArray} />
    </div>
  );
}

export default App;
