import styleButtons from "./Buttons.module.css"

export function ButtonScroll (){


    return(
        <div className={styleButtons.sections}>
            <p></p>
            <button>Aguardiente</button>
            <button>Vinos</button>
            <button>Ron</button>
            <button>Vodka</button>
            <button>Wisky</button>
            <button>Sin Alcohol</button>
        </div>
    )
}