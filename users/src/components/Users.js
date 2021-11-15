import React from "react";
import User from "./User";
import { useDispatch, useSelector, getState} from 'react-redux';
import {store} from "../redux/store";


export default function Users(){
    const data = store.getState().users
    return(
        <div className={'container'}>
            {
                data.map((user) => <User user={user}/>)
            }
        </div>
    )
}