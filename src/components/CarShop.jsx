import styleCart from "./CarShop.module.css"

export function CartShop(){


    return(<>
        <h1>CARRITO</h1>
        <div className={styleCart.product}>
            <div className={styleCart.img}>
                <img 
                width={150}
                height={172}
                src="" alt="" />
            </div>
            <div className={styleCart.description}>
                <div className={styleCart.details}>
                    <p>Producto: </p>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>Cantidad:</p>
                    <div className={styleCart.count}>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>Precio:</p>
                    <p>$</p>
                </div>
            </div>
        </div>
        <div className={styleCart.finish}>
            <div className={styleCart.total}><h2>TOTAL</h2></div>
            <div className={styleCart.details}>
                <p>Subtotal</p>
                <p>$</p>
            </div>
            <hr />
            <div className={styleCart.details}>
                <p>Envio:</p>
                <p>$</p>
            </div>
            <hr />
            <div className={styleCart.details}>
                <p>Total:</p>
                <p>$</p>
            </div>
            <button>Finalizar Compra</button>
        </div>
    </>
    )
}