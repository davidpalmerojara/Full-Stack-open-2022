import { useState } from 'react';
import './App.css';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = good * (100 / total);

  return (
    <div className="App">
      <div>
        <h1>Give Feedback</h1>
        <Feedback
          good={good}
          setGood={setGood}
          neutral={neutral}
          setNeutral={setNeutral}
          bad={bad}
          setBad={setBad}
        />
        <h1>Statistics</h1>
        <Statistics
          statistics={{ good, neutral, bad, total, average, positive }}
        />
      </div>
    </div>
  );
}

export default App;
