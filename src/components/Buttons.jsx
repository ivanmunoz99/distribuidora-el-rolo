import styleButtons from "./Buttons.module.css"
import React from "react"
import { useState } from "react"


export function ButtonScroll (){
    return(
        <div className={styleButtons.sections}>
            <button>Aguardiente</button>
            <button>Vinos</button>
            <button>Ron</button>
            <button>Vodka</button>
            <button>Wisky</button>
            <button>Sin Alcohol</button>
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