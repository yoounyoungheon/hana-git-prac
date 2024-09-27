// src/context/SessionContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { CartItem, Session } from "../../utils/type";

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

export const SessionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [
      { id: 100, name: "TypeScript", hour: 2 },
      { id: 101, name: "React", hour: 2 },
      { id: 200, name: "Next JS", hour: 5 },
    ],
  });

  const login = (id: number, name: string) => {
    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const logout = () => {
    setSession({
      ...session,
      loginUser: null,
    });
  };

  const addCartItem = (name: string, hour: number) => {
    const newItem: CartItem = {
      id: session.cart.length + 1,
      name,
      hour,
    };
    setSession({
      ...session,
      cart: [...session.cart, newItem],
    });
  };

  const removeCartItem = (itemId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, addCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};