// CounterContext.tsx

import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a SessionProvider");
  }
  return context;
};

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};