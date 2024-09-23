import { useState } from "react";
import './App.css'

function CustomCounter(){
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  
  const handleIncrementChange = (e: { target: { value: string } })=>{
    setIncrement(Number(e.target.value));
  }
  const increaseCount = () => {
    setCount(count+increment);
  }
  return(
    <div>
    <h2>현재 카운트: {count}</h2>
    <input
      type="number"
      value={increment}
      onChange={handleIncrementChange}
      placeholder="증가할 값을 입력하세요"
    />
    <button onClick={increaseCount}>증가</button>
  </div>
  )
}

export default CustomCounter;