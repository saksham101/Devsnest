import React, { useState } from "react";
import "./cardlist.css";
const Cardlist = ({
  itemName,
  calorieAmount,
  deleteItem,
  index,
  editItem,
  edit,
  doneItem,
}) => {
  const [editCalorieAmount, setEditCalorieAmount] = useState(calorieAmount);
  const [editItemName, setEditItemName] = useState(itemName);
  return (
    <div className="card">
      {edit ? (
        <input
          type="text"
          className="input-edit-box"
          defaultValue={itemName}
          onChange={(e) => {
            setEditItemName(e.target.value);
          }}
        />
      ) : (
        <p className="item-name">{itemName}</p>
      )}
      {edit ? (
        <input
          type="number"
          className="input-edit-box"
          name="edit-Calorie-Amount"
          defaultValue={calorieAmount}
          onChange={(e) => {
            setEditCalorieAmount(e.target.value);
            console.log(editCalorieAmount);
          }}
        />
      ) : (
        <p className="calorie-amount">
          You have consumed {calorieAmount} calories.
        </p>
      )}
      <button className="btn delete" onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button
        className="btn done-edit"
        onClick={
          edit
            ? () => doneItem(index, editCalorieAmount, editItemName)
            : () => editItem(index)
        }
      >
        {edit ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default Cardlist;
