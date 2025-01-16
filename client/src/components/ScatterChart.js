import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
} from 'chart.js';

import { Scatter } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,    
    LinearScale,      
    PointElement,     
    LineElement,     
    BarElement    
);

const ScatterChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Danceability vs Songs',
                data: data.map((item, index) => ({ x: index, y: item.danceability })),
                backgroundColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 5,
            },
        ],
    };

    const options = {
        scales: {
            x: { title: { display: true, text: 'Song Index' } },
            y: { title: { display: true, text: 'Danceability' } },
        },
    };

    return <Scatter data={chartData} options={options} />;
};

export default ScatterChart;
