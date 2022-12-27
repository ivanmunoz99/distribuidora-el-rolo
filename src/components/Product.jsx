import infoProducts from "../infoProducts.json";
import { CardProducts } from "./CardProducts";
import styleCard from "./Product.module.css"
import { useState } from "react";

export function Product ({category}){
    //hook for update the products in the button 'agregar'
    const [allProducts, setallProducts] = useState([]);
    const handleClick = (info) =>{
        //console.log(info)
        allProducts.push(info);
        console.log(allProducts)
        localStorage.setItem("list", JSON.stringify(allProducts))
    }

    const filterProduct = infoProducts.filter(item => item.section === category);
    return(//render the component 'CardProducts'
        <section>
            
            <ul className={styleCard.cardsGrid}>
                {filterProduct.map((info) =>(
                    <CardProducts 
                    handleClick={handleClick}
                    allProducts={allProducts}
                    setallProducts={setallProducts}
                    key={info.id} info={info} />
                ))}
            </ul>
        </section>
    )
}