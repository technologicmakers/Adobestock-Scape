import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App(){
  return (
    <BrowserRouter>
      <div style={{minHeight:'100vh'}}>
        <nav style={{background:'#fff', padding:'12px 20px', boxShadow:'0 1px 3px rgba(0,0,0,0.06)'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Link to="/" style={{fontSize:18, fontWeight:600}}>MyStockBox</Link>
            <div>
              <Link to="/upload" style={{marginRight:12}}>Upload</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>
        <main style={{padding:24}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
