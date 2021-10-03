import React, { useState } from "react";
import Cardlist from "./Cardlist";

const InputBox = () => {
  const [itemName, setItemName] = useState("");
  const [calorieAmount, setCalorieAmount] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (e) => {
    if (itemName === "" || calorieAmount === "") return;
    let edit = false;
    setItemList([...itemList, { itemName, calorieAmount, edit }]);
    e.preventDefault();
    setItemName("");
    setCalorieAmount("");
    e.target.form.reset();
  };
  const handleDeleteItem = (index) => {
    const newItemList = itemList.filter((item, idx) => idx !== index);
    setItemList(newItemList);
  };
  const handleEditItem = (index) => {
    console.log(index);
    console.log(itemList);
    setItemList(
      itemList.map((item, idx) => {
        if (idx === index) {
          item.edit = true;
        }
        return item;
      })
    );
  };
  const handleDone = (index, amount, name) => {
    setItemList(
      itemList.map((item, idx) => {
        if (idx === index) {
          item.edit = false;
          item.itemName = name;
          item.calorieAmount = amount;
        }
        return item;
      })
    );
    console.log(itemList);
  };
  return (
    <>
      <form id="addItems">
        <div>
          <input
            required
            className="inputbox"
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <input
            required
            className="inputbox"
            type="number"
            placeholder="Calorie amount"
            value={calorieAmount}
            onChange={(e) => {
              setCalorieAmount(e.target.value);
            }}
          />
        </div>
        <button className="add-btn" onClick={handleAddItem}>
          Add Item
        </button>
      </form>

      {itemList.map((item, index) => (
        <Cardlist
          itemName={item.itemName}
          calorieAmount={item.calorieAmount}
          edit={item.edit}
          deleteItem={handleDeleteItem}
          editItem={handleEditItem}
          key={index}
          index={index}
          doneItem={handleDone}
        />
      ))}
    </>
  );
};

export default InputBox;
