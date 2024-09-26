import { useEffect, useState } from "react";

export function AutoCounter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // 매 초마다 count를 증가시키는 타이머 설정
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // 1000ms = 1초
  
      // 컴포넌트가 언마운트될 때 타이머 정리
      return () => {
        clearInterval(intervalId);
      };
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 타이머가 설정됨을 의미합니다.
  
    return (
      <div>
        <h2>Auto Increment Counter</h2>
        <p>Count: {count}</p>
      </div>
    );
  }