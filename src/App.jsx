import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MyOrders from './Pages/MyOrders/MyOrders';
import MyAccount from './Pages/MyAccount/MyAccount';
import Signin from './Pages/Signin/Signin';
import MyOrder from './Pages/MyOrder/MyOrder';
import Notfound from './Pages/Notfound';
import Navbar from './Components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/My-orders" element={<MyOrders />} />
        <Route path="/My-account" element={<MyAccount />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/My-order" element={<MyOrder />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;