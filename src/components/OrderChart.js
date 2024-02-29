// OrderChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OrderChart = ({ orderData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: orderData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, [orderData]);

    return <canvas ref={chartRef} width="200" height="75" />;
};

export default OrderChart;
