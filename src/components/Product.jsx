import infoProducts from "../infoProducts.json";
import { CardProducts } from "./CardProducts";
import styleCard from "./Product.module.css"
import { useState } from "react";

export function Product (){
    const [allProducts, setallProducts] = useState([]);
    return(
        <section>
            
            <ul className={styleCard.cardsGrid}>
                {infoProducts.map((info) =>(
                    <CardProducts 
                    allProducts={allProducts}
                    setallProducts={setallProducts}
                    key={info.id} info={info} />
                ))}
            </ul>
        </section>
    )
}