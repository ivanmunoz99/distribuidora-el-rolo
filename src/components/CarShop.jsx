import styleCart from "./CarShop.module.css"
import { useState } from "react"

export function CartShop({ lista }) {

    let json = JSON.parse(localStorage.getItem("list"))
    const [count, setCount] = useState(lista.cuantity)

    return (<>
        <div className={styleCart.product}>
            <div className={styleCart.img}>
                <img
                    width={150}
                    height={172}
                    src={lista.poster} alt={lista.title} />
            </div>
            <div className={styleCart.description}>
                <div className={styleCart.details}>
                    <p>Producto: </p>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>cuantity:</p>
                    <div className={styleCart.count}>
                        <button onClick={() => {
                            lista.cuantity--
                            setCount(count-1)
                            json.forEach(element => {
                                if (element.id === lista.id) {
                                    element.cuantity= lista.cuantity
                                }
                            });
                            console.log(json)
                            localStorage.setItem("list", JSON.stringify(json))
                        }}>-</button>
                        <p>{lista.cuantity}</p>
                        <button onClick={() => {
                            lista.cuantity++
                            setCount(count+1)
                            json.forEach(element => {
                                if (element.id === lista.id) {
                                    element.cuantity= lista.cuantity
                                }
                            });
                            console.log(json)
                            localStorage.setItem("list", JSON.stringify(json))
                        }}>+</button>
                    </div>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>Precio:</p>
                    <p>$ {lista.price} c/u</p>
                </div>
            </div>
        </div>

    </>
    )
}