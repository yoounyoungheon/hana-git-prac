import { useState } from 'react'
import './App.css'

function DecreaseButton(){
  const [count, setCount] = useState(50)

  return (
    
    <div className="card">
    <p>count is {count}</p>
    <button onClick={() => setCount((count) => count + 1)}>up</button>
    <button onClick={() => setCount((count) => count - 1)}>down</button>
    </div>
  )

}

export default DecreaseButton