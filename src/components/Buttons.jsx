import styleButtons from "./Buttons.module.css"
import React from "react"
import { useState } from "react"


export function ButtonScroll (props){
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

export function ButtonOperation(){

    const [count, setCount] = useState(0)
    console.log(count)
    return(
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}