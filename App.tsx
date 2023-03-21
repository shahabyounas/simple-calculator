import * as React from 'react';
import Screen from './components/Screen';
import './style.css';

export default function App() {
  return (
    <div>
      <h1> Calculator </h1>

      <div className="calc-wraper">
        <Screen />
      </div>
    </div>
  );
}
