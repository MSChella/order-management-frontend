import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { OrderProvider, useOrder } from './OrderContext';

import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import Home from './pages/Home';
import MyOrdersPages from './pages/MyOrdersPages';
import OrderList from './pages/OrderList';
import Dashboard from './pages/DashBoard';
import PlacedOrders from './components/PlaceOrders';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';




const Navigation = ({ authenticated }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated && (
          <>
            <li>
              <Link to="/order-list">Orders</Link>
            </li>
            <li>
              <Link to="/my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const AppRoutes = ({ authenticated }) => {
  const { placeOrder, fetchOrderDetails, fetchOrders } = useOrder();
  const Navigate = useNavigate();
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={authenticated ? <Navigate to="/" /> : <SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      {authenticated && (
        <>

          <Route path="/order-list" element={<OrderList fetchOrders={fetchOrders} />} />
          <Route path="/my-orders" element={<MyOrdersPages fetchOrderDetails={fetchOrderDetails} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/placed-orders" element={<PlacedOrders fetchOrderDetails={fetchOrderDetails} />} />

        </>

      )}
    </Routes>

  );
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      setAuthenticated(true);

    } else {
      setAuthenticated(false);
    }
  }, []);





  return (

    <Router>
      <OrderProvider>
        <Header />
        <Navigation authenticated={authenticated} />
        <AppRoutes authenticated={authenticated} />
        <Footer />
      </OrderProvider>
    </Router>


  );
};



export default App;



