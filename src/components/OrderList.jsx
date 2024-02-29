// components/OrderList.js

import React from 'react';
import orders from '../services/orderService';

const OrderList = () => {
    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order Number: {order.orderNumber}, Product: {order.product}, Quantity: {order.quantity}, Price: {order.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
