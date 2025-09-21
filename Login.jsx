import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState(''), [password, setPassword] = useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API || 'http://localhost:4000'}/api/auth/login`, { email, password });
    localStorage.setItem('token', res.data.token);
    nav('/');
  }
  return (
    <div style={{maxWidth:420, margin:'0 auto', background:'#fff', padding:18, borderRadius:8}}>
      <form onSubmit={submit}>
        <input style={{width:'100%', padding:10, marginBottom:8}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input style={{width:'100%', padding:10, marginBottom:12}} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
        <button style={{width:'100%', padding:10}}>Login</button>
      </form>
      <p style={{marginTop:12}}>No account? <Link to="/register">Register</Link></p>
    </div>
  );
}
