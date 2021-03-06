import React,{useState} from 'react'
import './modal.css'



const Modal = ({active,setActive,content}) =>{

    const[imageId,setImageId] = useState()

    function submitHandler(event,id){
        event.preventDefault()

        console.log('content id is', id)

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/237/comments`,{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            status: 204,
            body:  JSON.stringify({
                name:'fake name',
                comment:'fake comment'

            }),
        }

        )
            .then(response => response.json())
            .then(json=>console.log('Тут хочу получить json, но ничего не приходит',json))




    }

    const[value,setValue] = useState('')

    return(
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false) }>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <img src={content.url} alt=""/>
                <h3>Комменты</h3>
                {content.comments ? content.comments.map(elem=>elem.text) : ''}

                <h3>Добавить коммент</h3>
                <form onSubmit={event=>submitHandler(event,content.id)}>
                    <input onChange={(event)=>setValue(event.target.value)} value={value} type="text"/>
                    <button>push</button>
                </form>


            </div>
        </div>
    )
}

export default Modal;