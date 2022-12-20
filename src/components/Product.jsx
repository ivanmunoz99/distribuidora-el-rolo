import infoProducts from "../infoProducts.json";
import { CardProducts } from "./CardProducts";

export function Product (){
    
    return(
        <section>
            <ul>
                {infoProducts.map((info) =>(
                    <CardProducts key={info.id} info={info} />
                ))}
            </ul>
        </section>
    )
}