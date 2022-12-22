
import './App.css';
import { ButtonScroll } from './components/Buttons';
import Footer from './components/footer';
import Header from './components/Header';
import { Product } from './components/Product';

function App() {

  

  return (
    <div className="App">
    <Header />
    <ButtonScroll />
    <Product />
    <Footer />
    </div>
  );
}

export default App;
