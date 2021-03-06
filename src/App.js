import React, { Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfoCar from './componens/infoCar';
import Login from './componens/login';
import Main from './componens/main';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="frantsuz-go-login/3" element={<Login/>} />
          <Route path="fruntsuz-go-in" element={<Main/>} />
          <Route path="fruntsuz-go-info/" element={<InfoCar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
