import { useState } from "react";

function DarkAndLight(){
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleTheme = () => {
    setisDarkMode(!isDarkMode);
  }

  const themeStyles: React.CSSProperties | undefined = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
    color: isDarkMode ? '#FFF' : '#000',
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
      <button onClick={toggleTheme}>모드 전환</button>
    </div>
  );
}

export default DarkAndLight