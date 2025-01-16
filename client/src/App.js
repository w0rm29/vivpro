import React, { useState, useEffect } from 'react';
import TableView from './components/TableView';
import ScatterChart from './components/ScatterChart';
import Histogram from './components/Histogram';
import BarChart from './components/BarChart';
import SearchBar from './components/SearchBar';
import ExportCSV from './components/ExportCSV';
import axios from 'axios';
import './index.css';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(10);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/songs?page=${page}&per_page=${rowsPerPage}`)
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(err => console.error(err));
    }, [page, rowsPerPage]);

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
            <TableView data={filteredData} page={page} setPage={setPage} />
            <div className="charts">
                <ScatterChart data={filteredData} />
                <Histogram data={filteredData} />
                <BarChart data={filteredData} />
            </div>
        </div>
    );
};

export default App;
