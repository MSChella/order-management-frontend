
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrder } from '../OrderContext';

const OrderDetails = () => {
    const { fetchOrders } = useOrder();
    const navigate = useNavigate();
    const { orderId } = useParams();
    const [setOrder] = useState(null);
    const { fetchOrderDetails } = useOrder();

    const order = fetchOrderDetails(orderId);


    // useEffect(() => {
    //     const fetchOrderDetails = async () => {
    //         try {

    //             const orders = await fetchOrders();
    //             console.log('Fetched orders:', orders);

    //             const selectedOrder = orders.find(order => String(order.orderId) === orderId);



    //             if (!selectedOrder) {
    //                 // If the order with the specified orderId is not found, navigate to an error page or handle it accordingly
    //                 navigate('/error'); // You can replace '/error' with the appropriate error page route
    //                 return;
    //             }

    //             console.log('Setting order:', selectedOrder);
    //             setOrder(selectedOrder);
    //         } catch (error) {
    //             console.error('Error fetching order details', error);
    //             debugger;
    //             navigate('/error', { replace: true });
    //         }
    //     };

    //     fetchOrderDetails();
    // }, [fetchOrders, orderId, navigate]);


    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <h2>Order Details</h2>
                <p>Order ID: {order.orderId}</p>
                <p>Product: {order.product}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ${order.price}</p>

            </div>
        </>

    );
};

export default OrderDetails;
