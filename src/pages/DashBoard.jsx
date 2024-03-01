
import React from 'react';
import OrderChart from '../components/OrderChart';


const Dashboard = () => {

    const orderData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Orders',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
        }],
    };

    return (
        <div>
            <h2>Dashboard</h2>

            <OrderChart orderData={orderData} />

        </div>
    );
};

export default Dashboard;
