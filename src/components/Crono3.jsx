import React, { useEffect, useReducer, useState } from "react";
import {reducer, initialState} from './reducer';
import {useDispatch,useSelector} from 'react-redux';

export const Crono3 = () => {
//   const [state,dispatch] = useReducer(reducer, initialState);
    const {crono, running, pepe} = useSelector(state => state)
    const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        dispatch({type:'addTime', payload: 10});
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div>
      <p>{pepe}</p>
        <>
          <span>{("0" + Math.floor((crono / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((crono / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((crono / 10) % 100)).slice(-2)}</span>
        </>
      </div>
      {!running && crono > 0 && (
        <>
          <button onClick={() => dispatch({type:'resume'})}>Resume</button>
          <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
      )}
      {!running && crono === 0 && (
        <button onClick={() => dispatch({type:'start'})}>Start</button>
      )}
      {running && <button onClick={() =>dispatch({type:'stop'})}>Stop</button>}
    </>
  );
};
