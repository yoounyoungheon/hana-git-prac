import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { useSession } from "./SessionContext";

const My: React.FC = () => {
  const { session, addCartItem, removeCartItem } = useSession();
  const { loginUser, cart } = session;

  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState<number | "">("");
  
  const handleAddItem = () => {
    if (newItemName && newItemPrice) {
      addCartItem(newItemName, Number(newItemPrice));
      setNewItemName("");
      setNewItemPrice("");
    }
  };

  return (
    <div className="my-container">
      {loginUser ? <Profile /> : <Login />}
      
      <ul className="cart-list">
      <h2>My-To-DoList</h2>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} : {item.hour.toLocaleString()} 시간
            <div></div>
            <button onClick={()=>removeCartItem(item.id)}> delete </button>
          </li>
        ))}
      </ul>

      <div className="add-item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(Number(e.target.value))}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default My;