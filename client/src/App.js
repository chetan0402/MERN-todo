import './App.css';
import {useEffect,useState} from 'react';
import Main from './Main';

function App() {
  const [message,setMessage] = useState("");

  useEffect(()=>{
    fetch("http://localhost:8000/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message)).catch((err)=>console.log(err));
  },[]);
  return (
    <main>
      <h1>{message}</h1>
      <Main/>
    </main>
  );
}

export default App;
