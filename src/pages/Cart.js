import { CartShop } from "../components/CarShop";
import Footer from "../components/footer";
import Header from "../components/Header";
import { Link} from "react-router-dom"


const Cart = () => {
    const addList = JSON.parse(localStorage.getItem("list"))
    console.log(addList.map(item => `${item.title} ${item.price} ${item.volume + "ml"}`))
    console.log(addList.reduce((total, item) => total + item.price))
    

    return (
        <div>
            <Header />
            <h1>CARRITO</h1>
            {addList.map((item, index) => <CartShop lista={item} key={index}/>)}
                <Link to="/finish">finalizar </Link>
            <Footer />
        </div>
    )
}

export default Cart;