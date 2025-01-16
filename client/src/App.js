import React, { useState, useEffect } from 'react';
import TableView from './TableView';
import ScatterChart from './ScatterChart';
import Histogram from './Histogram';
import BarChart from './BarChart';
import SearchBar from './SearchBar';
import ExportCSV from './ExportCSV';
import axios from 'axios';
import './index.css';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/songs')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSearch = (query) => {
        const result = data.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(result);
    };

    return (
        <div className="app">
            <header>
                <h1>Song Dashboard</h1>
            </header>
            <SearchBar onSearch={handleSearch} />
            <ExportCSV data={filteredData} />
            <TableView data={filteredData} />
            <div className="charts">
                <ScatterChart data={filteredData} />
                <Histogram data={filteredData} />
                <BarChart data={filteredData} />
            </div>
        </div>
    );
};

export default App;
