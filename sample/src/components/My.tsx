import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import { Session } from "../utils/type";

interface MyProps {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
}

const My: React.FC<MyProps> = ({ session, logout }) => {
  return (
    <div className="my-container">
      {
        session.loginUser
        ? (<Profile user={session.loginUser} logout={logout} />)
        : (<Login />)
      }

      <ul className="cart-list">
        {session.cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} ({item.price.toLocaleString()}원)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default My;