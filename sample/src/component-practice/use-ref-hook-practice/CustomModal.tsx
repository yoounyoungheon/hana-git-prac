import { useRef, forwardRef, useImperativeHandle, useState } from "react";

type ModalInterface = {
  open: () => void;
  close: () => void;
}

// 1. 자식 컴포넌트 정의 (forwardRef와 useImperativeHandle 사용)
const Modal = forwardRef((_props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // 부모 컴포넌트에 노출할 함수 정의
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "30%",
        padding: "20px",
        backgroundColor: "white",
        border: "1px solid black",
      }}
    >
      <h2>Modal Title</h2>
      <p>This is a modal content.</p>
    </div>
  );
});

// 2. 부모 컴포넌트 정의
export function CustomModal() {
  const modalRef = useRef<ModalInterface>(null);

  return (
  <>
  <h2>Custom Modal</h2>
  <Modal ref={modalRef}/>
  <button onClick={()=>modalRef.current?.open()}>Open</button>
  <button onClick={()=>modalRef.current?.close()}>Close</button>
  </>
  )
}