import React from "react";

function GroceryItem({ groceryItem, onUpdateItem, onDeleteItem }) {
  const { id, name, price, image } = groceryItem;
  console.log(name);

  function handleUpdateClick() {
    // add fetch request
    fetch(`http://localhost:3050/groceries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        image: image,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }
  function handleDeleteClick() {
    // Call onDeleteItem, passing the deleted item
    fetch(`http://localhost:3050/groceries/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(groceryItem));
  }

  return (
    <li>
      {/* <h4>Item {id}</h4> */}
      <h5>Name: {name}</h5>
      <p> Price: {price}</p>
      {/* <p> Image:{image}</p> */}
      <img src={image} alt={name} />
      <button onClick={handleUpdateClick}>Update Item</button>
      <button onClick={handleDeleteClick}>Delete Item</button>
    </li>
  );
}

export default GroceryItem;
