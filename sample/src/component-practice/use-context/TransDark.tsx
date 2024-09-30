import  { createContext, useContext, useState,ReactNode } from 'react';

export type ThemeContextType = {
  theme : 'light' | 'dark';
  toggleTheme: () => void;
}

// 1. ThemeContext 생성 (기본값으로 'light' 사용)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children : ReactNode;
};

export function ThemeProvider({ children } : ThemeProviderProps) {
  // 2. useState를 사용하여 테마를 관리하고, 현재 테마와 테마를 변경하는 함수를 제공하세요.
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // 테마를 변경하는 함수 구현(작성1)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // ThemeContext.Provider를 사용하여 현재 테마와 테마 변경 함수를 제공
    // 작성2 --> Provider를 이용해서 구현
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeButton() {
  // 3. useContext를 사용하여 현재 테마와 테마 변경 함수를 가져오세요.
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error('error');
  }
  const { theme, toggleTheme } = context; // useContext를 사용하여 테마와 toggleTheme 함수 가져오기

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px 20px',
        marginTop: '20px',
      }}
    >
      Toggle Theme
    </button>
  );
}

export function ChangeThemeButton(){
  return(
    <ThemeProvider>
      <h1>Theme Switcher</h1>
      <ThemeButton />
    </ThemeProvider>
  )
}









