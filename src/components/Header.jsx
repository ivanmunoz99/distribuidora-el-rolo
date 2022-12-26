import React from "react"
import styleHeader from "./Header.module.css"
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const history = useNavigate();
    const handleClick = () => history('/cart');
    const first = useNavigate();
    const Click = () => first('/products');
    
    return (
        <div className={styleHeader.header}>
            <img onClick={Click} className={styleHeader.logo} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/logo.png?alt=media&token=4e40843f-5ca5-409b-9895-1f1d995ba64b" alt="Logo distribuidora el rolo" />
            <img onClick={handleClick} className={styleHeader.cart} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/grocery-store.png?alt=media&token=6ef700c8-3ea4-453b-b610-9ac490095565" alt="Icono carrito de compras" />
        </div>
    )
}

export default Header;