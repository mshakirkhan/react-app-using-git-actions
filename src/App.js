import './App.css';
import React, {useState} from 'react';
import Currentdate from './Currentdate';
import Count from './count';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`App ${isMorning ? 'DayLight' : ''}`}>
      <h1>Good { isMorning ? "Morning" : "Night"}</h1>
      <h2>My Name is Shakir Khan</h2>
      <Count counter={count} />
      <button onClick={() => setCount(++count)}>Count Increase</button>
      <Currentdate todayDate="31 Dec 2020" />
      <button onClick={() => setMorning(!isMorning)}>Change Day</button>
    </div>
  );
}

export default App;
