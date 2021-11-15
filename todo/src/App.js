import React from 'react';
import Column from "./components/Column";
import Input from "./components/Input";

export default function App(){
    return(
        <div className={'container'}>
            <Input/>
            <div className={'columns'}>
                <Column key={1} classType={'todo'}/>
                <Column key={2} classType={'progress'}/>
                <Column key={3} classType={'done'}/>
            </div>
        </div>
    )
}