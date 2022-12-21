import infoProducts from "../infoProducts.json";
import { CardProducts } from "./CardProducts";
import styleCard from "./Product.module.css"

export function Product (){
    
    return(
        <section>
            
            <ul className={styleCard.cardsGrid}>
                {infoProducts.map((info) =>(
                    <CardProducts key={info.id} info={info} />
                ))}
            </ul>
        </section>
    )
}