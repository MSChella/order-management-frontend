
import React from 'react';
import { useOrder } from '../OrderContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, quantity, price, orderId }) => {
    const { placeOrder, setSelectedOrder } = useOrder();
    const navigate = useNavigate();

    const handlePlaceOrder = async () => {
        const order = { product, quantity, price, orderId };
        setSelectedOrder(order);
        await placeOrder(order);
        console.log('Navigating to order details with orderId:', orderId);
        navigate(`/placed-orders`);
    };

    return (
        <div className="card mb-3" style={{ maxWidth: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product}</h5>
                <h5 className="card-title">{price}</h5>
                <p className="card-text">Quantity: {quantity}</p>
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                    Place My Order
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
