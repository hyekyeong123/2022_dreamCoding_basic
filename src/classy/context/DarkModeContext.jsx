import { createContext, useState } from 'react';

// Context 생성하기
export const DarkModeContext = createContext();

// Provider 생성(Global로 기억하고 싶은 것들 저장)
export function DarkModeProvider({ children }) {
// ******************************************
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () =>
    setDarkMode((mode) => !mode);
// ******************************************
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
