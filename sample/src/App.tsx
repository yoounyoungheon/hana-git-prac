import { useState } from "react";
import My from "./components/My";
import "./App.css";
import { Session } from "./utils/type";

const SampleSession: Session = {
  loginUser: { id: 1, name: "영헌"},
  cart:[
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);

  const logout = () => {
    setSession({
      ...session,
      loginUser: null,
    });
  };

  const login = (id: number, name:string)=>{
    setSession({
      ...session,
      loginUser: {id: id, name: name},
    });
  }

  const removeCartItem = (itemId: number)=> {
    setSession({
      ...session,
      cart : session.cart.filter((item) => item.id !== itemId )
    })
  }

  return (
    <div className="app-container">
      <My session={session} logout={logout} login={login} removeCartItem={removeCartItem}></My>
    </div>
  );
}

export default App;