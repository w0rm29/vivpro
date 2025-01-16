import React, { useState, useMemo } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Paper,
    Button,
} from '@mui/material';

const TableView = ({ data, page, setPage }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const handleSort = (key) => {
        const isAsc = sortConfig.key === key && sortConfig.direction === 'asc';
        setSortConfig({ key, direction: isAsc ? 'desc' : 'asc' });
    };

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return data;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {[
                                'title',
                                'danceability',
                                'energy',
                                'duration_ms',
                                'class',
                                'acousticness',
                                'instrumentalness',
                                'key',
                                'liveness',
                                'loudness',
                                'mode',
                                'num_bars',
                                'num_sections',
                                'num_segments',
                                'tempo',
                                'time_signature',
                                'valence',
                            ].map((column) => (
                                <TableCell key={column}>
                                    <TableSortLabel
                                        active={sortConfig.key === column}
                                        direction={sortConfig.key === column ? sortConfig.direction : 'asc'}
                                        onClick={() => handleSort(column)}
                                    >
                                        {column.replace('_', ' ').toUpperCase()}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.danceability}</TableCell>
                                <TableCell>{row.energy}</TableCell>
                                <TableCell>{row.duration_ms}</TableCell>
                                <TableCell>{row.class}</TableCell>
                                <TableCell>{row.acousticness}</TableCell>
                                <TableCell>{row.instrumentalness}</TableCell>
                                <TableCell>{row.key}</TableCell>
                                <TableCell>{row.liveness}</TableCell>
                                <TableCell>{row.loudness}</TableCell>
                                <TableCell>{row.mode}</TableCell>
                                <TableCell>{row.num_bars}</TableCell>
                                <TableCell>{row.num_sections}</TableCell>
                                <TableCell>{row.num_segments}</TableCell>
                                <TableCell>{row.tempo}</TableCell>
                                <TableCell>{row.time_signature}</TableCell>
                                <TableCell>{row.valence}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                </Button>
                <span>Page {page}</span>
                <Button onClick={() => setPage((prev) => (data.length === 0 ? prev : prev + 1))} disabled={data.length === 0}>
                    Next
                </Button>
            </div>
        </Paper>
    );
};

export default TableView;
