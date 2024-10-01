import { useLocation, useNavigate, useOutletContext, useParams, } from "react-router-dom"
import { useSession } from "../context-api/SessionContext";
import { useEffect, useState } from "react";
import { ItemContextType } from "./ItemLayout";
import { Cart } from "../../utils/type";

export function Items(){
  const { id } = useParams<{id:string}>();
  const navigate = useNavigate();
  const location = useLocation();
  const itemFromState = location.state?.item as Cart | undefined;
  const { session, updateCartItem } = useSession();
  const [editingItem, setEditingItem] = useState<Cart | null>(null);
  const context = useOutletContext<ItemContextType>(); // context 가져오기

  useEffect(() => {
    if (id) {
      let foundItem = session.cart.find((item) => item.id === Number(id));
      if (!foundItem && itemFromState) {
        foundItem = itemFromState;
      }
      if (foundItem) {
        setEditingItem(foundItem);
      } else {
        navigate("/items"); // 아이템이 없으면 목록으로 리다이렉트
      }
    }
  }, [session.cart, id, navigate, itemFromState]);

  const handleUpdateItem = ()=>{
    if(editingItem){
      updateCartItem(editingItem);
      context?.setSelectedItem(editingItem);
      alert("Item updated successfully!");
    } else {
      console.log("Failed to update item: item is missing")
    } 
  }
  

  return (
    <div>
      {editingItem ? (
        <>
          <h2>{editingItem.name}</h2>
          <p>Price: {editingItem.hour}시간</p>
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              value={editingItem.name}
              onChange={(e) =>
                setEditingItem({ ...editingItem, name: e.target.value })
              }
            />
          </div>
          <div>
            <label>Hour:</label>
            <input
              type="number"
              value={editingItem.hour}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  hour: Number(e.target.value),
                })
              }
            />
          </div>
          <button onClick={handleUpdateItem}>Save</button>
        </>
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
};
