import React, { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

function App() {
  const [selected, setSelected] = useState(0);
  const [max, setMax] = useState(0);
  const [mostVoted, setMostVoted] = useState(anecdotes[0]);

  const [votes, setVotes] = useState(
    anecdotes.reduce((o, key) => ({ ...o, [key]: 0 }), {})
  );
  const randomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleNextAnecdote = () => {
    let random;
    do {
      random = randomInt(anecdotes.length - 1, 0);
    } while (random === selected);

    setSelected(random);
  };

  const handleVote = () => {
    setVotes({
      ...votes,
      [anecdotes[selected]]: votes[anecdotes[selected]] + 1,
    });

    if (votes[anecdotes[selected]] > max) {
      setMax(votes[anecdotes[selected]]);
      setMostVoted(anecdotes[selected]);
    }
  };

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[anecdotes[selected]]} votes</p>
      <button onClick={handleNextAnecdote}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
    </div>
  );
}

export default App;
