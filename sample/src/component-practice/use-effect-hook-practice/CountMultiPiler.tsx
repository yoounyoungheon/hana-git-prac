import { useState, useEffect } from "react";

export function CountMultiplier() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [result, setResult] = useState(1);

  // 여기에 useEffect를 사용하여 count1과 count2가 모두 변경될 때 비동기적으로 곱을 계산하고 result 상태를 업데이트하세요.
  useEffect(()=>{
    async function calculateResult() {
        // 0.5초 지연 후 곱셈 계산
        await new Promise(resolve => setTimeout(resolve, 500));
        setResult(count1 * count2);
      }
  
      calculateResult();
  },[count1,count2])
  return (
    <div>
      <h1>Count Multiplier</h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count2: {count2}</button>
      <p>Result (Count1 * Count2): {result}</p>
    </div>
  );
}