import { useState } from "react"
export type ToDo = {id: number, ToDo: string};

function ToDoList(){
  const [InputValue, setInputValue] = useState("");
  const [List, setList] = useState(["디폴트: 뒹굴거리기"]);

  const addList = () => {
    if(InputValue.trim()!=""){
      setList([...List, InputValue]);
      setInputValue("")
    }
  }

  const remove = (index: number) => {
    const newList = List.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <input type="text" value={InputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="해야할 일을 입력하세요."/>
      <button onClick={addList}>추가</button>
      <ul>
        {List.map((todo, index) => (
          <li key={index}>
            {todo} <div/> <button onClick={() => remove(index)}>삭제</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList