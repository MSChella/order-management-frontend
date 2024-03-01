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
                            src="https://placekitten.com/600/90"
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
                            src="https://placekitten.com/600/91"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Special Offers</h3>
                            <p>Check out our latest promotions.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

                <div className="container">

                    <h2>Featured Products</h2>

                </div>
            </div>
        </div>
    )
}

export default Home
