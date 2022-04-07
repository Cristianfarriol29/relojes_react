import React, { useEffect, useState } from "react";

export const Crono = () => {
  const [crono, setCrono] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    let interval = null;
    if (state) {
      interval = setInterval(() => {
        setCrono((crono) => crono + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state]);

  return (
    <>
      <div>
        <>
          <span>{("0" + Math.floor((crono / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((crono / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((crono / 10) % 100)).slice(-2)}</span>
        </>
      </div>
      {!state && crono > 0 && (
        <>
          <button onClick={() => setState(true)}>Resume</button>
          <button onClick={() => setCrono(0)}>Reset</button>
        </>
      )}
      {!state && crono === 0 && (
        <button onClick={() => setState(true)}>Start</button>
      )}
      {state && <button onClick={() => setState(false)}>Stop</button>}
    </>
  );
};
