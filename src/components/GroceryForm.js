import React, { useState } from "react";

function GroceryForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // Add function to handle submissions
  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: name,
      price: price,
      image: image,
    };
    console.log(itemData);

    fetch("http://localhost:3050/groceries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      // call the onAddItem prop with the newItem
      .then((newItem) => addItem(newItem));
  }

  return (
    // Set up the form to call handleSubmit when the form is submitted
    <div class="forms-container">
      <form id="create-form" onSubmit={handleSubmit}>
        {/** ...form inputs here */}
        <label>
          New Product Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter New Product Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          {" "}
          Price:
          <input
            type="text"
            name="price"
            placeholder=" Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            id="image-url"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}

export default GroceryForm;
