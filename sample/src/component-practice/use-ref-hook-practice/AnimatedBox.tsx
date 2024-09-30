import React, { useRef } from "react";
function AnimatedBox() {
  // useRef 훅을 사용하여 Box 요소를 참조할 변수를 선언
  const boxRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 여기에 Box 요소에 'animate' 클래스를 추가하여 애니메이션을 적용하세요.
    // 애니메이션이 끝난 후에는 클래스를 제거하세요.
    if(boxRef.current){
      boxRef.current.classList.add('animate');
      boxRef.current.addEventListener('animated', ()=>{boxRef.current?.classList.remove('animate')})
    }
  };

  return (
    <div>
      <div
        ref = {boxRef}
        className="box"
        style={{ width: "100px", height: "100px", backgroundColor: "skyblue" }}
      ></div>
      <button onClick={handleClick}>Animate Box</button>
    </div>
  );
}

export default AnimatedBox;