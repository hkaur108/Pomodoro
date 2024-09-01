import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StartTimer from './StartTimer';
import Reset from './Reset';
import Heading from './Heading';
import Stop from './Stop';
import '../App.css';
import { useNavigate } from 'react-router-dom';



export const TimingContext = createContext();
export const StartTimerContext = createContext();

export default function UI() {
    const navigate = useNavigate();
    let time={seconds:0, minutes:0};
    const [timing,settiming] = useState(time);
    const [startTimer,setstartTimer] = useState(false);
    const [recStop, setrecStop] =useState([]);
    const [gameStop,setgameStop] =useState(false);

return (
    <div className="mainWrapper mt-5">
    <div className="container mx-auto" style={{width:"600px", height:"700px"}}>
        <div className="row">
            <div className="col mx-auto">
                <Heading/>
            </div>
        </div>
        
<div className="row position-relative mx-auto" style={{height: "300px"}}>
            <div className="col">
                <div className='position-absolute top-25 start-50 translate-middle-x' >
                <img src="https://clipground.com/images/animated-tomato-clipart-16.png" alt="tomato" width={"300px"} className=''/>
                <div className="position-absolute top-50 start-50 translate-middle my-1">
                <h4 className='fw-bold text-light px-1'>{(timing.minutes <= 9) ? "0"+ timing.minutes :timing.minutes} : {(timing.seconds<=9)? "0"+timing.seconds:timing.seconds}</h4>
            </div>
            </div>
            </div>
        </div>

            <div className="row w-100 mb-1 d-flex align-items-center justify-content-center mx-auto">
                <div className="col-4  d-flex justify-content-center ">
                <TimingContext.Provider value={[timing,settiming,startTimer,setstartTimer,recStop, setrecStop,gameStop,setgameStop]}>
                        <StartTimer/>
                </TimingContext.Provider>
                </div>
                <div className="col-4  d-flex justify-content-center">
                <TimingContext.Provider value={[timing,settiming,startTimer,setstartTimer,recStop, setrecStop,gameStop,setgameStop]}>
                        <Stop/>
                </TimingContext.Provider>
                </div>

                <div className="col-4  d-flex justify-content-center"> 
                    <TimingContext.Provider value={[timing,settiming,startTimer,setstartTimer,recStop, setrecStop,gameStop,setgameStop] }>
                            <Reset/>
                    </TimingContext.Provider>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col d-flex justify-content-center">
                    <button  onClick={()=>navigate("/")} className='btn btn-warning'>Home</button>
                </div>
            </div>
            
    </div>
    
    </div>
   
)
}

