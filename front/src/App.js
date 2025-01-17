import React from 'react';
import './App.css';
import mainLogo from './assets/mainlogo.png';
import Kakao from './components/map/kakao';
import Chat from './components/chat/chat';

function App() {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <img className="logo" src={mainLogo} alt="Logo" />
      <div className="container">
        <Chat />
        <Kakao />
      </div>
    </div>
  );
}

export default App;