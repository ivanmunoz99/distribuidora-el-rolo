import styleCard from "./CardProducts.module.css"

export function CardProducts({ info, allProducts, setallProducts }) {
    
    const addProduct = info => {
        
        setallProducts([...allProducts, info])
        console.log(allProducts);
    };

    return (
        
        <li className={styleCard.cards}>
            <div >
                <div>
                    <img
                        width={150}
                        height={160}
                        className={styleCard.image}
                        src={info.poster}
                        alt={info.title} />
                </div>
                {info.title}
                <div className={styleCard.fontLight}>x{info.volume}ml</div>
                <div className={styleCard.fontBold}>${info.price}</div>
                <button onClick={()=> addProduct(info)}><strong>Agregar +</strong></button>
            </div>
        </li>
    )
}