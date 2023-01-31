import React from 'react';
import './Counter.scss';

export const Counter = () => {
  const [increment, setIncrement] = React.useState(0);
  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <h1>{increment}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};
