import React, {useState} from 'react';
import axios from 'axios';

export default function Upload(){
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  async function submit(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Login first');
    const fd = new FormData();
    fd.append('photo', file);
    fd.append('title', title);
    fd.append('tags', tags);
    const res = await axios.post(`${process.env.REACT_APP_API || 'http://localhost:4000'}/api/photos`, fd, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Uploaded');
  }
  return (
    <form onSubmit={submit} style={{maxWidth:540, background:'#fff', padding:16, borderRadius:8}}>
      <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%', padding:8, marginTop:6, border:'1px solid #d1d5db', borderRadius:6}}/></label>
      <label style={{display:'block', marginTop:10}}>Tags (comma) <input value={tags} onChange={e=>setTags(e.target.value)} style={{width:'100%', padding:8, marginTop:6, border:'1px solid #d1d5db', borderRadius:6}}/></label>
      <label style={{display:'block', marginTop:10}}>File <input type="file" onChange={e=>setFile(e.target.files[0])} /></label>
      <button style={{marginTop:12, padding:'8px 12px'}}>Upload</button>
    </form>
  );
}
