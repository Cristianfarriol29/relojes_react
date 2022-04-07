import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';
import { CountDown } from './components/CountDown';
import { Crono } from './components/Crono';
import { Crono2 } from './components/Crono2';
import { Crono3 } from './components/Crono3';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <Clock/>
      {/* {visible && */}
      <CountDown />
      {/* } */}
      {/* <Crono/>
      <Crono2 /> */}
      <Crono3/>


      {/* <button onClick={() => setVisible(!visible)}>Click Me</button> */}
    </div>
  );
}

export default App;
