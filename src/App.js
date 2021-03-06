import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import Modal from "./Modal/Modal";

function App() {

const [modalActive,setModalActive] = useState(false)
const [gallery,setGallery] = useState([])
const [content,setContent] = useState([])




useEffect(()=>{

fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then(response=>response.json())
    .then(json=>setGallery(json))
},[])

function loadContent(elem){

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${elem.id}`)
        .then(response=>response.json())
        .then(json=>{
            setContent(json)
            setModalActive(true)

        })



}





  return (
    <div className="App">
        <main>
     <h1>Beatefull photogallery</h1>

        <div className='dv-gallery-container'>
        {gallery.map(elem=><div onClick={()=>loadContent(elem)}><img src={elem.url}/></div>)}
        </div>
            <Modal content={content} active={modalActive} setActive={setModalActive}/>

        <button onClick={()=>setModalActive(true)}>Открыть модалку</button>
        </main>






    </div>
  );
}

export default App;
