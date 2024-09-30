// src/context/SessionContext.tsx
import React, { createContext, useContext, ReactNode, useReducer, useEffect } from "react";
import { CartItem, Session } from "../../utils/type";
import { initialSession, sessionReducer } from "./reducer/reducer";

interface SessionContextType {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  addCartItem: (name: string, price: number) => void;
  removeCartItem: (itemId: number) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

// 브라우저 저장소에서 초기값 불러오기
const loadInitialSession = (): Session => {
  const loginUserData = sessionStorage.getItem("loginUser");
  const cartData = localStorage.getItem("cart");

  return {
    loginUser: loginUserData ? JSON.parse(loginUserData) : null,
    cart: cartData
      ? JSON.parse(cartData)
      : [
          { id: 100, name: "TypeScript", hour: 2 },
          { id: 101, name: "React", hour: 2 },
          { id: 200, name: "Next JS", hour: 5 },
        ],
  };
};

export const SessionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [session, dispatch] = useReducer(sessionReducer, initialSession, loadInitialSession);

  // loginUser가 변경될 때 마다 sessionStorage에 저장
  useEffect(()=>{
    if(session.loginUser){
      sessionStorage.setItem("loginUser", JSON.stringify(session.loginUser));
    }else{
      sessionStorage.removeItem("loginUser")
    }
  }, [session.loginUser]);
  
  // cart가 변경될 때 마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(session.cart));
  }, [session.cart]);


  const login = (id: number, name: string) => {
    dispatch({ type: "login", payload: { id, name } });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const addCartItem = (name: string, hour: number) => {
    const newItem: CartItem = {
      id: session.cart.length + 1,
      name,
      hour,
    };
    dispatch({ type: "addCartItem", payload: newItem });
  };

  const removeCartItem = (itemId: number) => {
    dispatch({ type: "removeCartItem", payload: itemId });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, addCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};