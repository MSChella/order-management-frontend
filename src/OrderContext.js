// OrderContext.js
import React, { createContext, useContext, useState } from 'react';
import { addOrder, getOrders, getOrderDetails, submitOrders, fetchMyOrders } from './services/orderService';
import axios from './config/axios-config'


const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const placeOrder = (order) => {
        addOrder(order);
        setSelectedOrders((prevOrders) => [...prevOrders, order]); // Add the order to selectedOrders
        setSelectedOrder(order); // Set selectedOrder to the latest order
    };

    const removeOrder = (orderId) => {
        setSelectedOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
    };

    const fetchOrders = () => {
        return getOrders();
    };

    const fetchOrderDetails = (orderId) => {
        return getOrderDetails(orderId);
    };

    const submitOrders = async (orders) => {
        // Implement logic to submit the selected orders
        console.log('Submitting orders:', orders);
        try {
            const response = await axios.post('/place-orders/submit-orders', orders);
            console.log('Response from server:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error submitting orders:', error);
            throw error; // Re-throw the error to handle it elsewhere if needed
        }
    };

    return (
        <OrderContext.Provider value={{
            selectedOrder,
            selectedOrders,
            setSelectedOrder,
            placeOrder,
            removeOrder,
            fetchOrders,
            fetchOrderDetails,
            submitOrders,
            fetchMyOrders
        }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);

    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }

    return context;
};
