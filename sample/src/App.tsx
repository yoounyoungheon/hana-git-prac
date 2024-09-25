import { useState } from "react";
import My from "./components/spa-practice/My";
import "./App.css";
import { CartItem, Session } from "./utils/type";
import ParentButton from "./components/use-ref-hook-practice/ParentChildButton";
import { ParentInput } from "./components/use-ref-hook-practice/ParentInput";
import { CustomModal } from "./components/use-ref-hook-practice/CustomModal";
import { CustomVideoPlayer } from "./components/use-ref-hook-practice/CustomVideoPalyer";
import { CustomTextArea } from "./components/use-ref-hook-practice/CustomTextAreat";
import { ChangeThemeButton } from "./components/context/TransDark";




const SampleSession: Session = {
  loginUser: { id: 1, name: "영헌"},
  cart:[],
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

  const addCartItem = (name: string, price: number) => {
    const newItem: CartItem = {
      id: session.cart.length + 1,
      name,
      price,
    };

    setSession({
      ...session,
      cart: [...session.cart, newItem],
    });
  };

  return (
    <div>
    <div className="app-container">
      <My session={session} logout={logout} login={login} removeCartItem={removeCartItem} addCartItem={addCartItem}></My>
    </div>
    <ParentButton/>
    <ParentInput/>
    <CustomTextArea/>
    <CustomModal/>
    <CustomVideoPlayer/>
    <ChangeThemeButton/>
    </div>
    
  );
}

export default App;