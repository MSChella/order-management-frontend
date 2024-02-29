import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://placekitten.com/600/90" // Replace with your image URL
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Our Store</h3>
                            <p>Discover a wide range of products.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://placekitten.com/600/91" // Replace with your image URL
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Special Offers</h3>
                            <p>Check out our latest promotions.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items as needed */}
                </Carousel>

                <div className="container">
                    {/* Your other homepage content goes here */}
                    <h2>Featured Products</h2>
                    {/* Add more sections or components */}
                </div>
            </div>
        </div>
    )
}

export default Home
