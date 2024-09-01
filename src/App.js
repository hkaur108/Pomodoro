import React from 'react';
import UI from './Components/UI';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/timer' element={<UI/>}/> 
      </Routes>
    </div>
  )
}
