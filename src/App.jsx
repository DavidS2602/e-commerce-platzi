import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MyOrders from './Pages/MyOrders/MyOrders';
import MyAccount from './Pages/MyAccount/MyAccount';
import Signin from './Pages/Signin/Signin';
import MyOrder from './Pages/MyOrder/MyOrder';
import Notfound from './Pages/Notfound';
import Navbar from './Components/navbar';
import ShoppingCartProvider from './ShoppingCartContext';
import CheckoutSideMenu from './Components/CheckoutSideMenu';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/clothes' element={<Home />} />
          <Route path='/electronics' element={<Home />} />
          <Route path='/furnitures' element={<Home />} />
          <Route path='/toys' element={<Home />} />
          <Route path='/others' element={<Home />} />
          <Route path="/My-orders" element={<MyOrders />} />
          <Route path="/My-orders/last" element={<MyOrder />} />
          <Route path="/My-orders/:id" element={<MyOrder />} />
          <Route path="/My-account" element={<MyAccount />} />
          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/My-order" element={<MyOrder />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
