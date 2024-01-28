import { FaPause } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import './App.css';

function App() {
  const [second, setSecond] = useState(0);
  const [mill, setMill] = useState(0);
  const [minute, setMinutes] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(handleseco.current);
      clearInterval(handlemill.current);
    };
  }, []);

  let handleseco = useRef();
  let handlemill = useRef();

  function seconds() {
    handleseco.current = setInterval(() => {
      setSecond((prevsecond) => {
        if (prevsecond === 59) {
          setSecond(0);
          setMinutes((prevminute) => prevminute + 0.5);
        } else {
          return prevsecond + 1;
        }
      });
    }, 1000);
  }

  function millisecond() {
    handlemill.current = setInterval(() => {
      setMill((prevmill) => (prevmill + 1) % 100);
    }, 10);
  }

  function start() {
    seconds();
    millisecond();
  }

  function pause() {
    clearInterval(handleseco.current);
    clearInterval(handlemill.current);
  }

  function restart() {
    clearInterval(handlemill.current);
    clearInterval(handleseco.current);
    setSecond(0);
    setMill(0);
    setMinutes(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <h1>Shady's Timer</h1>
        <div className='h1s'>
          <h2 className='text'>{minute}</h2>
          <h2>:</h2>
          <h2 className='text'>{second}</h2>
          <h2>:</h2>
          <h2 className='text'>{mill}</h2>
        </div>
        <br />

        <div className='buttons'>
          <button className='btn start' onClick={() => start()}>
            Start
          </button>
          <button className='btn pause' onClick={() => pause()}>
            <FaPause />
          </button>
          <button className='btn restart' onClick={() => restart()}>
            <VscDebugRestart />
          </button>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
