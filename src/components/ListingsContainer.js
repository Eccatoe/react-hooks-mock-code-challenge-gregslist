import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingArray, onDelete}) {
  const listingCards=listingArray.map((listing)=>{
    return (<ListingCard
       key={listing.id}
       listing={listing}
       onDelete={onDelete}
    />)
  })
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
