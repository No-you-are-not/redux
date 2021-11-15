import React from 'react';
import Card from './Card'
import {useSelector} from "react-redux";

export default function Column({classType}){
    let classname = "column "+ classType;
    let data = useSelector((state) => state.data)
    let cardFinal = data.filter((card) => card.type === classType)
    return(
        <div className={classname}>
            {cardFinal.map((card) => {
                return <Card data ={card}/>
            })}
        </div>
    )
}