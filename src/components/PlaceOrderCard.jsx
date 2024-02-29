import React from 'react'

const PlaceOrderCard = ({ product, quantity, price }) => {


    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product}</h5>
                <h5 className="card-title">{price}</h5>
                <p className="card-text">Quantity: {quantity}</p>

            </div>
        </div>
    )
}

export default PlaceOrderCard
