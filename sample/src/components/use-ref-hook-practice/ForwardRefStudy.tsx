import React, { forwardRef } from "react";

// 자식 컴포넌트
const MyInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} {...props} />
));

function ParentComponent() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const focusInput = () => {
    //부모에서 자식 접근
    inputRef.current?.focus();
  };
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}> Focus Input </button>
    </div>
  );
}

export default ParentComponent