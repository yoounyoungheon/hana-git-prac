import  { useState, useCallback } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  // useCallback 사용: 의존성 배열이 비어 있으면 한 번만 생성됨
  const increment = useCallback(() => {
    console.log("Increment 함수 생성");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrement 함수 생성");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}