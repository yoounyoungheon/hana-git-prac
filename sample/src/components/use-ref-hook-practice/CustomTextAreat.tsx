import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface TextAreaController {
  increaseArea: ()=> void;
  decreaseArea: ()=> void;
};

export const TextArea = forwardRef((_props, ref)=>{
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(100);

  useImperativeHandle(ref, ()=>({
    increaseArea: ()=>{
      if(textAreaRef.current){
        setHeight(()=>{return height+5});
      }
    },
    decreaseArea: ()=>{
      if(textAreaRef.current){
        setHeight(()=>{return height>15?height-5:15});
      }
    }
  }))

  return (
    <textarea
      ref={textAreaRef}
      style={{ width: '300px', height: `${height}px` }}
      placeholder="Type something..."
    />
  )
});

export function CustomTextArea() {
  const textareaRef = useRef<TextAreaController>(null);

  return (
    <div>
      <h2>Resizable Textarea with forwardRef</h2>
      {/* 3. 부모 컴포넌트에서 자식 컴포넌트의 높이 제어 */}
      <button onClick={() => textareaRef.current?.increaseArea()}>Increase Height</button>
      <button onClick={() => textareaRef.current?.decreaseArea()}>Decrease Height</button>
      <br />
      <TextArea ref={textareaRef} />
    </div>
  );
}

