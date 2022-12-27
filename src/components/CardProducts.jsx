import styleCard from "./CardProducts.module.css"

export function CardProducts({ info,  handleClick }) {
    //render the cards
    return (
        <>
            <li className={styleCard.cards}>
                <div>
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
                    <button onClick={() => handleClick(info)}><strong>Agregar +</strong></button>
                </div>
            </li>
        </>
    )
}