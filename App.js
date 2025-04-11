import React from 'react';
import Introduce from './Introduce';
import './App.css';

function App() {
  return (
      <div className="app-wrapper">
        <h1 className="title">✨ 자기소개 카드 ✨</h1>
        <Introduce name="정채은" age="23" hobby="포켓몬" />
      </div>
  );
}

export default App;
