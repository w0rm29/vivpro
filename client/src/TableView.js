import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TablePagination,
    Paper,
} from '@mui/material';

const TableView = ({ data }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return data;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    const handleSort = (key) => {
        const isAsc = sortConfig.key === key && sortConfig.direction === 'asc';
        setSortConfig({ key, direction: isAsc ? 'desc' : 'asc' });
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page when rows per page is changed
    };

    const currentRows = React.useMemo(() => {
        const indexOfLastRow = (page + 1) * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        return sortedData.slice(indexOfFirstRow, indexOfLastRow);
    }, [sortedData, page, rowsPerPage]);

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
                        {currentRows.map((row, index) => (
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
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default TableView;
