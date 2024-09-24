import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import { Session } from "../../utils/type";

interface MyProps {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
}

const My: React.FC<MyProps> = ({ session, logout, login, removeCartItem }) => {
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
            {item.name} ({item.price.toLocaleString()}원)
            <div></div>
            <button onClick={()=>removeCartItem(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default My;