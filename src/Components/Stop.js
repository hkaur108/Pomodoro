import React, { useEffect } from 'react';
import { TimingContext } from './UI';
import { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Stop() {
    const timeContext=useContext(TimingContext);
    const [timing,settiming,startTimer,setstartTimer,recStop, setrecStop,gameStop,setgameStop] =timeContext;

    const handleStop=()=>{

        if(startTimer){
            setgameStop(!gameStop)
        }
    }

return (
    <div>
        <div className=''>
    <button className='btn btn-warning text-capitalize' onClick={handleStop} disabled={(gameStop)?true:false}>stop</button>
    </div>
    </div>
)
}
