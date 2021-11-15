import React, {useState, useEffect} from "react";
import Users from "./components/Users";
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from "./redux/actions";
import Button from "./components/Button";
import {store} from "./redux/store";


export default function App(){
    const [check, setCheck] = useState(true)
    const URL = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                store.dispatch(getUser(data))
            })
            .catch(error => console.log(error))
    }, []);

    const getUsersBtn = () =>{
        setCheck(false)
    }

    return check ? <Button getUsersBtn={getUsersBtn}/> : <Users/>
}