import React from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [increment, setIncrement] = React.useState(0);
  const handleIncrement = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <h1>{increment}</h1>
      <button className={classes.btn} onClick={handleIncrement}>
        increment
      </button>
    </div>
  );
};
