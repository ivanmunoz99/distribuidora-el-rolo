import React from "react"

import styleHome from "./Home.module.css"

const Home = () => {

    

    return(
        <>
        <div className={styleHome.container}>
            <div className={styleHome.welcome}>BIENVENIDO a EL ROLO</div>
            <img className={styleHome.logo}
            width={200}
            height={200}
            src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/logo.png?alt=media&token=4e40843f-5ca5-409b-9895-1f1d995ba64b" alt="logo" />
            <p className={styleHome.text}>Me alegra que estés aquí.<span className={styleHome.textColor}> Distribuidora el rolo</span>  tiene la mejor variedad de licores a domicilio, podrás elegir y sumar la cantidad de productos que quieras.</p>
            <button>COMPRAR!</button>
        </div>
        <div className={styleHome.warning}>
            <img className={styleHome.img} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/Instagram_logo.svg.png?alt=media&token=beca55ad-87f8-45f5-9083-f6a524a321d0" alt="red social" />
            <p>Ventas exclusivamente para mayores de edad.</p>
        </div>
        </>
    )
}

export default Home;