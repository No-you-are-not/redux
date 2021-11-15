import React from 'react';
import {store} from "../index";
import {changeType, deleteCard} from "../redux/actions";
import {useDispatch} from "react-redux";


export default function Card({data}){
    let dispatch = useDispatch();
    function deleteSomeCard(){
        dispatch(deleteCard(data))
    }

    function changeColumn(event){
        let item = {id: data.id, text: data.text, type: event.target.value}
        dispatch(changeType(item))
    }

    return(
        <div key={data.id} className={'card'}>
            <button onClick={deleteSomeCard} className={'delete-card'}>x</button>
            <div>{data.text}</div>
            <select onChange={changeColumn} className={'select-card'}>
                <option>select option</option>
                <option value={'todo'}>to do</option>
                <option value={'progress'}>in progress</option>
                <option value={'done'}>done</option>
            </select>
        </div>
    )
}