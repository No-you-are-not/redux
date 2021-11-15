import React, {useState} from 'react';
import {store} from "../index";
import {addCard} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Input(){
    const [text, setText] = useState("")
    let data = useSelector((state) => state.data);
    let dispatch = useDispatch();
    const changeInput = (event) =>{
        setText(event.target.value)
        console.log(text)
    }
    function addNewCard(){
        let item = {id: data.length + 1, text: text, type:'todo'}
        dispatch(addCard(item))
       setText('')
    }
     return(
         <div className={'input-container'}>
             <input value={text} onChange={changeInput} name={'todo'} className={'input'}/>
             <button onClick={addNewCard} className={'btn-create'}>Create</button>
         </div>
     )
}