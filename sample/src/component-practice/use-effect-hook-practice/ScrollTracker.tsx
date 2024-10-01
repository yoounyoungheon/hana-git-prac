import { useState, useEffect } from "react";

export function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollY(window.scrollY);
    }
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[scrollY])


  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Scroll Tracker</h1>
      <p>Current Scroll Y: {scrollY}px</p>
      <p>Scroll down to see the change...</p>
    </div>
  );
}