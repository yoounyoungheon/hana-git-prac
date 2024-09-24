import React, { useRef } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { Session } from "../../utils/type";

interface MyProps {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
  addCartItem: (name:string, practice:number) => void;
}

const My: React.FC<MyProps> = ({ session, logout, login, removeCartItem, addCartItem }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const handleAddItem = ()=>{
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    if(name && price){
      addCartItem(name, parseFloat(price));
      nameRef.current.value = "";
      priceRef.current.value = "";
    }
  }
  return (
    <div className="my-container">
      {
        session.loginUser
        ? (<Profile user={session.loginUser} logout={logout} />)
        : (<Login login={login} />)
      }

      <ul className="cart-list">
        {session.cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} : {item.price.toLocaleString()} 시간
            <div></div>
            <button onClick={()=>removeCartItem(item.id)}> delete </button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="To-Do" ref={nameRef} />
      <input type="number" placeholder="How Long ?" ref={priceRef} />
      <button onClick={handleAddItem}> Add </button>
    </div>
  );
};

export default My;