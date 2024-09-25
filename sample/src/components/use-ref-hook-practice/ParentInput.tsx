import { useRef, forwardRef, useImperativeHandle } from "react";

type InputInterface = {
  focus: ()=>void,
  clear: ()=>void
}

// 1. 자식 컴포넌트 정의 (forwardRef와 useImperativeHandle 사용)
const CustomInput = forwardRef((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 부모에게 노출할 메서드 정의
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});

// 2. 부모 컴포넌트 정의
export function ParentInput() {
  const inputRef = useRef<InputInterface>(null);

  return (
    <div>
      <h2>Custom Input Control</h2>
      {/* 3. 자식 컴포넌트에 ref 전달 */}
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current?.clear()}>Clear Input</button>
    </div>
  );
}