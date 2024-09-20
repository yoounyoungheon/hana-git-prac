import { useState } from "react"

function Checkbox(){
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <>
    <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
    <p>{isChecked?"선태됨":"선택안됨"}</p>
    </>
  )
}

export default Checkbox