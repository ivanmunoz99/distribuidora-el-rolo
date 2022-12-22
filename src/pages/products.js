import { Product } from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/footer";
import { ButtonScroll } from "../components/Buttons";

const Products =() =>{
    return(
        <div>
            <Header />
            <ButtonScroll />
            <Product />
            <Footer />
        </div>
    )
}

export default Products;