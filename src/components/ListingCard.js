import React, { useState } from "react";

function ListingCard({listing, onDelete}) {
  const [favorite, setFavorite] = useState(true);

  const {id, description, image, location}=listing
  function handleLikeClick() {
    setFavorite((favorite) => !favorite);
  }

  function handleDelete() {
    onDelete(listing)
    fetch (`http://localhost:3000/listings/${id}`, {
      method: 'DELETE'
    })
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleLikeClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
