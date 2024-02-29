// OrderList.jsx (Page Component)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getOrders } from '../services/orderService'; // You'll need to create this service.
import { fetchOrders } from '../services/orderService';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the backend when the component mounts
        const fetchData = async () => {
            try {
                const ordersData = await fetchOrders();
                setOrders(ordersData);

            } catch (error) {
                console.error('Error fetching orders', error);
            }

        };

        fetchData();
    }, []);

    return <>

        <div className="card-container row col md-4 ">
            {orders.map((order) => (
                <ProductCard
                    key={order.id}
                    product={order.product}
                    quantity={order.quantity}
                    price={order.price}
                    orderId={order.id}
                />
            ))}

        </div>
        ;


    </>
};

export default OrderList;
