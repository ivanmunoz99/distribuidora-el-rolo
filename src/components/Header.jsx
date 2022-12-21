import styleHeader from "./Header.module.css"

const Header = () =>{
    return (
        <div className={styleHeader.header}>
            <img className={styleHeader.logo} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/logo.png?alt=media&token=7ea1211f-5ff4-4062-820f-c1fd72fa814a" alt="Logo distribuidora el rolo" />
            <img className={styleHeader.cart} src="https://firebasestorage.googleapis.com/v0/b/distribuidora-84a8f.appspot.com/o/grocery-store.png?alt=media&token=6ef700c8-3ea4-453b-b610-9ac490095565" alt="Icono carrito de compras" />
        </div>
    )
}

export default Header;