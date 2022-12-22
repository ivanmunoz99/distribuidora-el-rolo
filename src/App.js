
import './App.css';
import { ButtonScroll } from './components/Buttons';
import { CartShop } from './components/CarShop';
import Footer from './components/footer';
import Header from './components/Header';
import { Home } from './components/Home';
import { Product } from './components/Product';

function App() {



  return (
    <div className="App">
      {/* <Home /> */}
      <Header />
      <ButtonScroll />
      <Product />
      <CartShop />
      <Footer />
    </div>
  );
}

export default App;
