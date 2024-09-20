import { useState } from "react"

function TextInput(){
  const [text, setText] = useState("");

  return(
    <div>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="텍스트를 입력하세요."/>
      <p>입력한 내용:{text}</p>
    </div>
  )
}

export default TextInput