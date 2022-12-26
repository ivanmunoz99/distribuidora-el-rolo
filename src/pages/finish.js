import styleCart from "../components/CarShop.module.css"



const Finish = () =>{
    const addList = JSON.parse(localStorage.getItem("list"))

    console.log(addList.map(item => `${item.title} ${item.price} ${item.volume + "ml"} ${item.cuantity}`))
    const description = addList.map(item => `${item.title} ${item.price} ${item.volume + "ml"} ${item.cuantity}`)

    const subTotal =  addList.reduce((total, item) => 
    {if (item.cuantity > 1) return total + item.price * item.cuantity
        return total + item.price},0)
    return (
        <div className={styleCart.finish}>
                <div className={styleCart.total}><h2>TOTAL</h2></div>
                <div className={styleCart.details}>
                    <p>Subtotal </p>
                    <p>$ {subTotal}</p>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>Envio:</p>
                    <p>$ 6000</p>
                </div>
                <hr />
                <div className={styleCart.details}>
                    <p>Total:</p>
                    <p>$ {subTotal + 6000} </p>
                </div>
                <button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=573043506199&text=${subTotal + 6000} ${description}`,"_blank")}>Finalizar Compra</button>
            </div>
    )
}

export default Finish;