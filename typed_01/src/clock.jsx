import { useState,useEffect } from "react";
function Clock(){
     const [time,setTime]=useState(new Date())


     useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date())
        },1000);


          return () => clearInterval(timer)
     }, []);
    
    // let now=new Date()
    // let hour=now.getHours()
    // let minutes=now.getMinutes()
    // let seconds=now.getSeconds()

    // const hour=String(time.getHours()).padStart(2,'0')
    // const minutes=String(time.getMinutes()).padStart(2,'0')
    // const seconds=String(time.getSeconds()).padStart(2,'0')
    // const mlli=String(time.getMilliseconds())
    // console.log(new Date().toLocaleTimeString)
    //  setInterval(Clock, 1000)
    // Clock()

    // const timed=`${hour}:${minutes}:${seconds}:${mlli}`
    const timed =`${time.toLocaleDateString()}`
    

    // Start a timer that logs "Hello" every second

    return(
        <>
        {/* <h1>Digital clock</h1> */}
        <h1 className="varun">{timed}</h1>
        </>
    )
}
export default Clock;