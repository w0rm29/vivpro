import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map((item) => item.title), // Use song titles as labels
        datasets: [
            {
                label: 'Acousticness',
                data: data.map((item) => item.acousticness),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Tempo',
                data: data.map((item) => item.tempo),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: { title: { display: true, text: 'Songs' } },
            y: { title: { display: true, text: 'Values' }, beginAtZero: true },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
