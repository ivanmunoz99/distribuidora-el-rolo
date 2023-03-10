import styleButtons from "./Buttons.module.css"
import React from "react"
//import { useState } from "react"


export function ButtonScroll (props){
    //buttons return an event, the innerHTML of the button is passed as an argument to the fun function
    return(
        <div className={styleButtons.sections}>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Aguardiente</button>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Vinos</button>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Ron</button>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Vodka</button>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Wisky</button>
            <button onClick={e => {props.fun(e.target.innerHTML.toLowerCase())}}>Sin Alcohol</button>
        </div>
    )
}

/* export function ButtonOperation({id}){

    const [count, setCount] = useState(0)
    console.log(count)
    let json = JSON.parse(localStorage.getItem("list"))
    return(
        <>
            <button onClick={() => {setCount(JSON.parse(localStorage.getItem("list")))
            json.forEach(element => {
                if (element.id === id){
                    element.cantidad -- 
                }
            });}}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
} */