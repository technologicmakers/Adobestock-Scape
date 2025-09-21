import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name, setName] = useState(''), [email, setEmail] = useState(''), [password, setPassword] = useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API || 'http://localhost:4000'}/api/auth/register`, { name, email, password });
    localStorage.setItem('token', res.data.token);
    nav('/');
  }
  return (
    <div style={{maxWidth:420, margin:'0 auto', background:'#fff', padding:18, borderRadius:8}}>
      <form onSubmit={submit}>
        <input style={{width:'100%', padding:10, marginBottom:8}} placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input style={{width:'100%', padding:10, marginBottom:8}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input style={{width:'100%', padding:10, marginBottom:12}} placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
        <button style={{width:'100%', padding:10}}>Register</button>
      </form>
    </div>
  );
}
