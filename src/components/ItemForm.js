// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // State for the item name
  const [itemCategory, setItemCategory] = useState("Produce"); // State for the item category

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(), // Generating a unique id using the `uuid` library
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the callback prop
    onItemFormSubmit(newItem);

    // Reset the form fields after submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName} // Connecting the input to state
          onChange={handleNameChange} // Setting state when the input changes
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory} // Connecting the select to state
          onChange={handleCategoryChange} // Setting state when the select changes
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
