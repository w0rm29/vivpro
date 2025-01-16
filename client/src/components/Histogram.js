import React from 'react';
import { Bar } from 'react-chartjs-2';

const Histogram = ({ data }) => {
    const durations = data.map((item) => Math.floor(item.duration_ms / 1000));
    const counts = {};

    durations.forEach((duration) => {
        counts[duration] = (counts[duration] || 0) + 1;
    });

    const chartData = {
        labels: Object.keys(counts),
        datasets: [
            {
                label: 'Duration (seconds)',
                data: Object.values(counts),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: { title: { display: true, text: 'Duration (seconds)' } },
            y: { title: { display: true, text: 'Count' }, beginAtZero: true },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default Histogram;
