import { forwardRef, useRef } from "react";

export const ChildButton = forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <button ref={ref} {...props} onClick={() => alert("Child Button Clicked!")}>
      Child Button
    </button>
  );
});

// 2. 부모 컴포넌트 정의
function ParentButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // 3. 부모 컴포넌트에서 자식 컴포넌트의 버튼 클릭하기
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <h2>Forward Ref Example</h2>
      <ChildButton ref={buttonRef} />
      <button onClick={handleClick}>Click Child Button</button>
    </div>
  );
}

export default ParentButton