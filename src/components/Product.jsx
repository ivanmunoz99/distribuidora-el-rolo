import infoProducts from "../infoProducts.json";
import { CardProducts } from "./CardProducts";
import styleCard from "./Product.module.css"
import { useState } from "react";

export function Product ({category}){
    const [allProducts, setallProducts] = useState([]);
    const filterProduct = infoProducts.filter(item => item.section === category);
    return(
        <section>
            
            <ul className={styleCard.cardsGrid}>
                {filterProduct.map((info) =>(
                    <CardProducts 
                    allProducts={allProducts}
                    setallProducts={setallProducts}
                    key={info.id} info={info} />
                ))}
            </ul>
        </section>
    )
}