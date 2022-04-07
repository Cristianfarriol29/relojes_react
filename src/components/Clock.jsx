import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [clock, setClock] = useState();
    
    useEffect(() => {
        console.log("me pinto")

        setInterval(() => {
            const date  = new Date();
            setClock(date.toLocaleTimeString());
        },1000)

    },[])


  return (
    <div>{clock}</div>
  )
}
