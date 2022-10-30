import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/site/Header';
import Nav from './component/site/Nav'
import Catchall from './component/site/Catchall';
import LoginReg from './component/user/LoginReg';
import Dash from './component/user/Dash';
import Home from './component/site/Home';
import Objs from './component/obj/Objs';

function App() {
  // just for fun
  const [title, setTitle] = useState('Site Header!')
  // 1 ) CREATE A STATE TO SAVE THE USER
  const [user, setUser] = useState({})

  return (
    <>
      <Header title={title}/>
      {/* 2) PASS THE STATE TO THE NAV BAR */}
      <Nav user={user} setUser={setUser}/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Catchall setTitle={setTitle}/>}/>
            <Route exact path="/" element={<Home setTitle={setTitle}/>}/>
            <Route exact path="/login-reg" element={<LoginReg setTitle={setTitle} setUser={setUser}/>}/>
            <Route exact path="/dash" element={<Dash setTitle={setTitle} user={user}/>}/>
            <Route exact path="/objs" element={<Objs setTitle={setTitle} user={user}/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;


// npm i axios react-router-dom