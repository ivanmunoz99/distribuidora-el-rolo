
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Products from './pages/products';
import NoFound  from './pages/NoFound';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Finish from './pages/finish';

function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='finish' element={<Finish />} />
          <Route path='*' element={<NoFound />} />
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
