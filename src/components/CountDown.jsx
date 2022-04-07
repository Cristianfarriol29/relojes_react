import React, { useEffect, useState } from 'react'

export const CountDown = () => {
    const [countDown, setCountDown] = useState();

    let countDownDate = new Date("Mar 29, 2022 12:00:00").getTime();

    useEffect(() => {
        console.log("me monto")
        let interval = setInterval(() =>{
            let now = new Date().getTime();

            let secondsToTime = Math.floor(
                new Date(countDownDate - now).valueOf() / 1000
            )

            let days = Math.floor(secondsToTime / (86400));
            //console.log("faltan estas dias", days);

            let hours = Math.floor((secondsToTime % (86400)) / (3600));
            //console.log("faltan estas horas", hours);

            let minutes = Math.floor((secondsToTime % 3600 ) / 60)
            //console.log("faltan estas minutos", minutes)

            let seconds = Math.floor((secondsToTime % 60))
            //console.log("faltan estos segundos", seconds)

            setCountDown(`${days} d, ${hours} h, ${minutes} m, ${seconds} s`)
            
            if(secondsToTime < 0){
                clearInterval(interval)
                setCountDown("CUENTA ATRÁS TERMINADA")
            }


        },1000)

        return(() =>{
            console.log("me desmonto")
            clearInterval(interval)

        })
    },[])


  return (
    <div>{countDown}</div>
  )
}
