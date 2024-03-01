// services/orderService.js
import axios from '../config/axios-config';
const orders = [];


export const fetchOrders = async () => {
    try {
        const response = await axios.get('/orders');
        return response.data;

    } catch (error) {
        console.error('Error fetching orders', error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
};
export const fetchMyOrders = async () => {
    try {
        const response = await axios.get('/place-orders');
        return response.data;

    } catch (error) {
        console.error('Error fetching orders', error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
};
export const submitOrders = async (orders) => {
    try {
        const response = await axios.post('/place-orders/submit-orders', orders);
        return response.data;
    } catch (error) {
        console.error('Error submitting orders', error);
        throw error;
    }
};

export const addOrder = (order) => {
    // You might want to send a request to add an order to the server instead of modifying the local array directly
    // For demonstration purposes, you can modify the local array, but this won't persist data between sessions
    orders.push(order);
};

export const getOrders = () => {
    return Promise.resolve(orders); // If you want to keep the local state for some reason
};

export const getOrderDetails = (orderId) => {
    const order = orders.find((o) => o.id === Number(orderId));
    return Promise.resolve(order);
};



// const orders = [
//     {
//         id: 1,
//         orderNumber: 'ORD123',
//         product: 'JavaScript: The Good Parts',
//         quantity: 2,
//         price: 30.99,
//     },
//     {
//         id: 2,
//         orderNumber: 'ORD456',
//         product: 'React Up and Running',
//         quantity: 1,
//         price: 45.5,
//     },
//     {
//         id: 3,
//         orderNumber: 'ORD789',
//         product: 'Node.js in Action',
//         quantity: 3,
//         price: 55.0,
//     },
//     {
//         id: 4,
//         orderNumber: 'ORD101',
//         product: 'Eloquent JavaScript',
//         quantity: 2,
//         price: 29.99,
//     },
//     {
//         id: 5,
//         orderNumber: 'ORD202',
//         product: 'Learning React',
//         quantity: 1,
//         price: 39.95,
//     },
//     {
//         id: 6,
//         orderNumber: 'ORD303',
//         product: 'Node.js Design Patterns',
//         quantity: 2,
//         price: 49.99,
//     },
//     {
//         id: 7,
//         orderNumber: 'ORD404',
//         product: 'React Design Patterns and Best Practices',
//         quantity: 1,
//         price: 54.5,
//     },
//     {
//         id: 8,
//         orderNumber: 'ORD505',
//         product: 'Fullstack Open: Deep Dive into Modern Web Development',
//         quantity: 2,
//         price: 59.99,
//     },

// ];

// export default orders;

// export const addOrder = (order) => {
//     orders.push(order);
// };

// export const getOrders = () => {
//     return Promise.resolve(orders);
// };

// export const getOrderDetails = (orderId) => {
//     const order = orders.find((o) => o.id === Number(orderId));
//     return Promise.resolve(order);
// };

