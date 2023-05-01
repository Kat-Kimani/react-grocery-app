import React, { useState, useEffect } from "react";
import "./index.css";

import GroceryItem from "./GroceryItem";

function GroceryList() {
  const [grocery, setGrocery] = useState([]);

  //Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3050/groceries")
      .then((resp) => resp.json())
      .then((grocery) => setGrocery(grocery));
  }, []);
  // add this callback function
  function handleUpdateItem(updatedItem) {
    console.log("In ShoppingCart:", updatedItem);
  }

  // function handleDeleteItem(deletedItem) {
  //   const updatedItems = items.filter((item) => item.id !== deletedItem.id);
  //   setItems(updatedItems);
  // }

  return (
    <div className="groceries-list">
      <ul>
        {grocery.map((grocery) => (
          <GroceryItem
            key={grocery.id}
            groceryItem={grocery}
            onUpdateItem={handleUpdateItem}
            // onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
