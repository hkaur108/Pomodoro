import React from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='container' Style={{width:"600px", height:"700px"}}>
      <div className="row">
        <div className="text-info">
          <h3 className='text-capitalize text-center p-1 my-4'>pomodoro timer</h3>
        </div>
      </div>


<div className="row">
                <div className="col">
                    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button   " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h6 className='text-center'>About Pomodoro Technique</h6>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The Pomodoro Technique is a time management method in which you do focused work during 25-minute intervals — known as pomodoros — and take a five-minute break.</strong> 

            <ul className="list-group">
                <li className="list-group-item" >Set your timer for 25 minutes, and focus on a single task until the timer rings.</li>
                <li className="list-group-item">When your session ends, mark off one Pomodoro and record what you completed.</li>
                <li className="list-group-item">Then enjoy a five-minute break.</li>
                <li className="list-group-item">After four pomodoros, take a longer, more restorative 15-30 minute break.</li>
            </ul>
      </div>
    </div>
  </div>
  </div>
</div>
  </div>
  <div className="row mt-4 ">
    <div className="col d-flex align-items-center justify-content-center">
            <button className='btn btn-info' onClick={()=>navigate('/timer')}>Timer</button>

    </div>
  </div>
    </div>
  )
}




