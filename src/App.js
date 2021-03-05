import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {

const [gallery,setGallery] = useState([])

useEffect(()=>{

fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then(response=>response.json())
    .then(json=>console.log('yalla',json))
},[])


  return (
    <div className="App">
     <h1>Beatefull photogallery</h1>
    </div>
  );
}

export default App;
