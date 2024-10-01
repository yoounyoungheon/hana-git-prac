import { useRef } from 'react';

function FocusInput() {
  // useRef 훅을 사용하여 input 요소를 참조할 변수를 선언
  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef 객체: inputRef.current를 null로 초기화
  // inputRef 객페는 DOM요소를 참조해 input과 같은 요소레 접근 및 조작 가능
  // ref 객체는 컴포넌트의 전 생애주기 동안 유지

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;