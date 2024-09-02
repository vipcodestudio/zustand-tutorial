import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';
import useCount from './store/useCount';

function App() {
  const { count, increment } = useCount();
  return (
    <>
      <div className="card">
        <Button />
        <div>{count}</div>
      </div>
    </>
  );
}

export default App;
