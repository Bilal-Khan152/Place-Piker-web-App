import React , {useState , useEffect}  from 'react'

function ProgressBar({timer}) {
     const [remainingTime , setRemainingTIme]  = useState(timer) ;
         useEffect(()=>{
          
    const INTERVAL =    setInterval(()=>{
           console.log("start the timer")
          setRemainingTIme(prevState =>  prevState - 10) 
        },10)
    
    
        return () => {
          console.log("cleaning")
          clearInterval(INTERVAL)
        } 
    
         },[])
  return (
    <progress value={remainingTime} max={timer} ></progress>
  )
}

export default ProgressBar;
