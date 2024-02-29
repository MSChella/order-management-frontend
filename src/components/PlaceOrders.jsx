// PlacedOrders.jsx
import React, { useEffect, useState } from 'react';
import { useOrder } from '../OrderContext';
import { Link } from 'react-router-dom';

const PlacedOrders = () => {
    const { selectedOrders, removeOrder, submitOrders } = useOrder();
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleRemoveOrder = (orderId) => {
        // Implement logic to remove the order
        removeOrder(orderId);
    };

    const handleSubmitOrders = async () => {
        try {
            setSubmitting(true);
            // Submit the selected orders to the backend
            const submittedOrders = await submitOrders(selectedOrders);
            console.log('Submitted orders:', submittedOrders);
            setSubmitting(false);
            setSubmitSuccess(true);

            // Optionally, clear the selected orders or perform other actions
        } catch (error) {
            console.error('Error submitting orders', error);
            setSubmitting(false);
        }
    };

    useEffect(() => {
        console.log("Selected Order:", selectedOrders);
    }, [selectedOrders]);


    useEffect(() => {
        if (submitSuccess) {
            // Optionally, you can display a success message or perform other actions
            alert('Your orders are placed successfully');
            // Reset the success state to allow submitting again if needed
            setSubmitSuccess(false);
            // Refresh the page after showing the success message
            window.location.reload();
        }
    }, [submitSuccess]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Orders Placed</h2>
            <div className="row">
                {selectedOrders.map((selectedOrder) => (
                    <div key={selectedOrder.id} className="col-md-6 offset-md-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Order ID: {selectedOrder.orderNumber}</p>
                                <h5 className="card-title">Product: {selectedOrder.product}</h5>
                                <p className="card-text">Quantity: {selectedOrder.quantity}</p>
                                <p className="card-text">Price: ${selectedOrder.price}</p>
                                {/* Add more details as needed */}

                                <div className="d-flex justify-content-between mt-3">
                                    <Link to={`/order-details/${selectedOrder.orderId}`} className="btn btn-info">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveOrder(selectedOrder.orderId)}
                                    >
                                        Remove Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-primary"
                    onClick={handleSubmitOrders}
                    disabled={submitting || submitSuccess}>
                    {submitting ? 'Submitting...' : submitSuccess ? 'Submitted' : 'Submit Orders'}

                </button>
            </div>
        </div>
    );
};

export default PlacedOrders;
