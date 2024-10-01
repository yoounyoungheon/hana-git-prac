import { createContext, useMemo, useState } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom"
import { Cart } from "../../utils/type";
import { useSession } from "../context-api/SessionContext";

export interface ItemContextType {
  selectedItem: Cart | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<Cart | null>>;
}

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined
);

const ItemLayout: React.FC = () => {
  const { session, addCartItem } = useSession();
  const { cart } = session;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<Cart | null>(null);
  const navigate = useNavigate();

  const filteredItems = useMemo(
    () =>
      cart.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [cart, searchTerm]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddItem = () =>{
    const newItemName = `New Item`;
    const newItemHour = 1;
    addCartItem(newItemName, newItemHour)
    const newItem: Cart = {
      id: cart.length + 1,
      name: newItemName,
      hour: newItemHour
    }
    setSelectedItem(newItem);
    navigate(`/items/${newItem.id}`, { state: { item: newItem } });
  }

  return (
    <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>Items List</h2>
          <input
            type="text"
            placeholder="Search items"
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/items/${item.id}`}
                  state={{ item }}
                  onClick={() => setSelectedItem(item)}
                  style={{
                    fontWeight:
                    selectedItem?.id === item.id ? "bold" : "normal",
                  }}
                >
                  {item.name} - {item.hour} 시간
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={handleAddItem}>Add Item</button>
        </div>

        {/* 오른쪽에 선택된 아이템 상세 정보만 표시 */}
        <div style={{ flex: 2, marginLeft: 30 }}>
          <Outlet />
        </div>
      </div>
    </ItemContext.Provider>
  );
};

export default ItemLayout;