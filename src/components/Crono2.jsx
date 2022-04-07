import React, { useEffect, useReducer, useState } from "react";
import {reducer, initialState} from './reducer';

export const Crono2 = () => {
  const [state,dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval = null;
    if (state.running) {
      interval = setInterval(() => {
        dispatch({type:'addTime', payload: 10});
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state.running]);

  return (
    <>
      <div>
        <>
          <span>{("0" + Math.floor((state.crono / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((state.crono / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((state.crono / 10) % 100)).slice(-2)}</span>
        </>
      </div>
      {!state.running && state.crono > 0 && (
        <>
          <button onClick={() => dispatch({type:'resume'})}>Resume</button>
          <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
      )}
      {!state.running && state.crono === 0 && (
        <button onClick={() => dispatch({type:'start'})}>Start</button>
      )}
      {state.running && <button onClick={() =>dispatch({type:'stop'})}>Stop</button>}
    </>
  );
};
