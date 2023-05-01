import React, { useState } from "react";
import Header from "./Header.js";
import GroceryList from "./GroceryList.js";

import GroceryForm from "./GroceryForm";

function App() {
  const [grocery, setGrocery] = useState([]);
  //console.log(grocery);

  //function to add items
  function handleAddItem(newItem) {
    setGrocery([...grocery, newItem]);
  }

  return (
    <div>
      <Header />
      <GroceryList />
      <GroceryForm addItem={handleAddItem} />
    </div>
  );
}

export default App;
