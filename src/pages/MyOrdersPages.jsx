import React, { useState, useEffect } from 'react'
import { fetchMyOrders } from '../services/orderService';
import { Link } from 'react-router-dom';
import { useOrder } from '../OrderContext';
const MyOrdersPages = () => {
    const [myOrders, setmyOrders] = useState([]);
    const { fetchMyOrders } = useOrder();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const myOrdersData = await fetchMyOrders();
                setmyOrders(myOrdersData);

            } catch (error) {
                console.error('Error fetching orders', error);
            }

        };

        fetchData();
    }, [fetchMyOrders]);


    return (

        <div className="container mt-5">
            <h2 className="text-center mb-4">Orders Placed</h2>
            <div className="row">
                {myOrders.map((selectedOrder) => (
                    <div key={selectedOrder.id} className="col-md-6 offset-md-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Order ID: {selectedOrder.orderNumber}</p>
                                <h5 className="card-title">Product: {selectedOrder.product}</h5>
                                <p className="card-text">Quantity: {selectedOrder.quantity}</p>
                                <p className="card-text">Price: ${selectedOrder.price}</p>


                                <div className="d-flex justify-content-between mt-3">
                                    <Link to={`/order-details/${selectedOrder.orderId}`} className="btn btn-info">
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};


export default MyOrdersPages
