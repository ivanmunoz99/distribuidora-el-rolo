import { CartShop } from "../components/CarShop";
import Footer from "../components/footer";
import Header from "../components/Header";
import { Link} from "react-router-dom"
import "./Cart.css"

const Cart = () => {
    //map the localStorage for callback in the card
    const addList = JSON.parse(localStorage.getItem("list"))
    console.log(addList.map(item => `${item.title} ${item.price} ${item.volume + "ml"}`))
    console.log(addList.reduce((total, item) => total + item.price))
    

    return (
        <div className="aqw">
            <Header />
            <h1>CARRITO</h1>
            {addList.map((item, index) => <CartShop lista={item} key={index}/>)}
                <Link to="/finish" className="link">finalizar </Link>
            <Footer />
        </div>
    )
}

export default Cart;