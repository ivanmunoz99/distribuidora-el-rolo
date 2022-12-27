import styleCart from "../components/CarShop.module.css"



const Finish = () => {
    //save the JSON in one variable
    const addList = JSON.parse(localStorage.getItem("list"))

    //console.log(addList.map(item => `${item.title} ${item.price} ${item.volume + "ml"} ${item.cuantity}`))
    const description = addList.map(item => `${'Producto: ' + item.section} ${item.title} ${item.volume + "ml"} ${'Cantidad:' + item.cuantity}`)
    
    // reduce() is returning a single value as a result
    const subTotal = addList.reduce((total, item) => {
        if (item.cuantity > 1) return total + item.price * item.cuantity
        return total + item.price
    }, 0)
    return (
        <div className={styleCart.finish}>
            <div className={styleCart.total}><h2>TOTAL</h2></div>
            <div className={styleCart.details}>
                <p><strong>Subtotal:</strong></p>
                <p>$ {subTotal}</p>
            </div>
            <hr />
            <div className={styleCart.details}>
                <p><strong>Envio:</strong></p>
                <p>$ 6000</p>
            </div>
            <hr />
            <div className={styleCart.details}>
                <p><strong>Total:</strong></p>
                <p><strong>$ {subTotal + 6000}</strong></p>
            </div>
            <button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=573057150737&text= ¡hola! para un domicilio del siguiente ${description} ${'Valor total:'} ${subTotal + 6000}`, "_blank")}>Finalizar Compra</button>
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/logo.png?alt=media&token=4e40843f-5ca5-409b-9895-1f1d995ba64b" alt="Logo distribuidora el rolo"></img>
        </div>
    )
}

export default Finish;