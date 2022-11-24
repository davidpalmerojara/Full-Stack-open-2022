import React from 'react';

const Button = ({ set, value, text }) => (
  <button onClick={() => set(value + 1)}>{text}</button>
);

const Feedback = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <div>
      <Button set={setGood} value={good} text="Good" />
      <Button set={setNeutral} value={neutral} text="Neutral" />
      <Button set={setBad} value={bad} text="Bad" />
    </div>
  );
};

export default Feedback;
