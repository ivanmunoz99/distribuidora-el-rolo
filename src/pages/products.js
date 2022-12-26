import { Product } from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/footer";
import { ButtonScroll } from "../components/Buttons";
import { useState } from "react";

const Products =() =>{
    const [category, setcategory] = useState("aguardiente")
    //console.log(category)
    return(
        <div>
            <Header />
            <ButtonScroll fun={setcategory}/>
            <h1>{category}</h1>
            <Product category={category}/>
            <Footer />
        </div>
    )
}

export default Products;