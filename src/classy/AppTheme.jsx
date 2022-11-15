import React, { useContext } from 'react';
import './css/Apptheme.css'
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  // 자식 컴포넌트 어디에서든 DarkModeProvider의 값을 가져올 수 있음
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
// ******************************************
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}