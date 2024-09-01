import React, { useEffect} from 'react';
import { TimingContext } from './UI';
import { useContext,useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function StartTimer() {
  const timeContext=useContext(TimingContext);
  const [timing,settiming,startTimer,setstartTimer,recStop, setrecStop,gameStop,setgameStop] =timeContext;
  const timeref=useRef(0);
  timeref.current=timing;
    useEffect(()=>{
      if(startTimer && !gameStop){
      let interval=setInterval(()=>{
          setrecStop([...recStop,timeref.current])
          let sec=timing.seconds++;
          if(sec<=60){
            settiming({...timing, seconds:sec});
            if(sec===60){
              let min=timing.minutes++;
              settiming({...timing,minutes:min});
              let sec=0;
              settiming({...timing,seconds:sec});  
          }
            sec=0;
          }
  
        },1000)
          return ()=>clearInterval(interval)
      }
      
      
    },[startTimer,timing.seconds,gameStop])


    const handleClick=()=>{
      setstartTimer(!startTimer)
    }
  
  return (
    <div className='mx0'>
      <button className='btn btn-warning text-capitalize' onClick={handleClick} disabled={startTimer?true:false}>start</button>
    </div>
  )
}
