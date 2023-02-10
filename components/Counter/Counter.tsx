import styles from "./Counter.module.css";

import React, { useState } from "react";

import { useAppContext } from "../../context/AppProvider";
import { CounterActionTypes } from "../../context/reducers/counter";

export function Counter() {
  const { state: { counter }, dispatch } = useAppContext();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() =>
            dispatch({
              type: CounterActionTypes.Decrement,
              payload: {}
            })
          }
        >
          -
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch({
                type: CounterActionTypes.Increment,
                payload: {}
            })
          }
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch({
                type: CounterActionTypes.IncrementByAmount,
                payload: {amount: incrementValue}
            })
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch({
                type: CounterActionTypes.IncrementAsyncByAmount,
                payload: {amount: incrementValue}
            }) // here api should be called
          }
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({
                type: CounterActionTypes.IncrementIfOdd,
                payload: {amount: incrementValue}
            })
          }
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
