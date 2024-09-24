import React, { useRef } from 'react';

function PreventTyping() {
  // 여기에 useRef 훅을 사용하여 input 요소를 참조할 변수를 선언하세요.
  const inputRef = useRef<HTMLInputElement>(null);

  // 여기에 input 요소의 입력을 방지하고 "Stop typing!" 메시지를 표시하세요.
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(inputRef.current){
        e.preventDefault();
        inputRef.current.value = "Stop Typing !"
        alert("Stop typing!")
    }
  };

  return (
    <div>
      <input ref = {inputRef} type="text" placeholder="Try to type here..." onInput={handleInput} />
    </div>
  );
}

export default PreventTyping;