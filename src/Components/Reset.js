import React, { useEffect } from 'react'
import { TimingContext } from './UI';
import { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Reset() {
    const timeContext=useContext(TimingContext);
    const [timing,settiming,startTimer,setstartTimer] =timeContext;


    useEffect(()=>{
        if(!startTimer){
            settiming({...timing,seconds:0,minutes:0}) 
        } 
    },[startTimer]);

    const handleReset=()=>{
        setstartTimer(!startTimer);
    }

return (
    <div className=''>
    <button className='btn btn-warning text-capitalize' onClick={handleReset} disabled={(!startTimer)?true:false}>reset</button>
    </div>
)
}
