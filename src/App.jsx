import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { OrderProvider, useOrder } from './OrderContext';
import axios from './config/axios-config';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import Home from './pages/Home';
import MyOrdersPages from './pages/MyOrdersPages';
import OrderList from './pages/OrderList';
import Dashboard from './pages/DashBoard';
import PlacedOrders from './components/PlaceOrders';
import Header from './components/Header/Header';
import Footer from './components/Footer';
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
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      {authenticated ? (
        <>

          <Route path="/order-list" element={<OrderList fetchOrders={fetchOrders} />} />
          <Route path="/my-orders" element={<MyOrdersPages fetchOrderDetails={fetchOrderDetails} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/placed-orders" element={<PlacedOrders fetchOrderDetails={fetchOrderDetails} />} />
          <Route path="/signin"
            element={<Navigate to="/signin" />} />
        </>
      ) : (

        <Route path="/signin" element={<Navigate to="/signin" />} />
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

const ErrorPage = () => {
  return (
    <div>
      <h2>Error Page</h2>
      <p>Sorry, something went wrong!</p>
    </div>
  );
};

export default App;




// return (
//   <>

//     <Header />

//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/order-list">Orders</Link>
//         </li>
//       </ul>
//     </nav>

//     <OrderProvider>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/signin' element={<SignInForm />} />
//         <Route path='/signup' element={<SignUpForm />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/order-list" element={<OrderList />} />
//         <Route path="/my-orders" element={<MyOrdersPages fetchOrderDetails={fetchOrderDetails} />} />
//         <Route path="/order-details/:orderId" element={<OrderDetails placeOrder={placeOrder} />} />
//         <Route path="/placed-orders" element={<PlacedOrders fetchOrderDetails={fetchOrderDetails} />} />
//         <Route path="/error" element={<ErrorPage />} />
//       </Routes>
//     </OrderProvider>

//     <Footer />
//   </>
// );
// }
// const ErrorPage = () => {
//   return (
//     <div>
//       <h2>Error Page</h2>
//       <p>Sorry, something went wrong!</p>
//     </div>
//   );
// };
// export default App;
