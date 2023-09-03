import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Policy from './pages/Policy';
import Size from './pages/Size';
import About from './pages/About';
import Detail from './pages/Detail';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Pay from './pages/Pay';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chinh-sach-doi-tra' element={<Policy />} />
        <Route path='/bang-size' element={<Size />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/detail/:slug' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/:slug' element={<Product />} />


      </Routes>
    </Router>
  );
}

export default App;
