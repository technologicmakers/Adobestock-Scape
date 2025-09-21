import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Home(){
  const [photos, setPhotos] = useState([]);
  const [q, setQ] = useState('');
  useEffect(()=> {
    fetch();
  },[]);
  async function fetch(query){
    const res = await axios.get(`${process.env.REACT_APP_API || 'http://localhost:4000'}/api/photos`, { params: { q: query }});
    setPhotos(res.data.photos || []);
  }
  function onSearch(e){
    e.preventDefault();
    fetch(q);
  }
  return (
    <div>
      <form onSubmit={onSearch} style={{marginBottom:16}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search title or tags..." style={{padding:8, border:'1px solid #d1d5db', borderRadius:6, width:320}}/>
        <button style={{marginLeft:8, padding:'8px 12px'}}>Search</button>
      </form>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16}}>
        {photos.map(p => (
          <div key={p.id} style={{background:'#fff', borderRadius:8, padding:8, boxShadow:'0 1px 2px rgba(0,0,0,0.04)'}}>
            <img src={`http://localhost:4000${p.file_path}`} alt={p.title} style={{width:'100%', height:200, objectFit:'cover', borderRadius:6}}/>
            <h3 style={{marginTop:8, fontSize:16}}>{p.title}</h3>
            <p style={{color:'#6b7280'}}>{p.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
