import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Box, Button, TextField } from '@mui/material';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/vehicles/searchVehicles`, {
            params: {
                page: currentPage,
                searchQuery: searchQuery,
            }
        })
        .then(response => {
            setVehicles(response.data.vehicles);
            setTotalPages(response.data.totalPages);
        })
        .catch(error => {
            console.error('Error fetching vehicles:', error);
        });
    }, [currentPage, searchQuery]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Box sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: 'white' }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ color: '#424242' }}>
                    Vehicles List
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                    <TextField
                        label="Search Vehicles"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        sx={{ width: '300px' }}
                    />
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#424242', color: 'white' }}>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Model</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Number</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Color</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vehicles.map((vehicle) => (
                                <TableRow key={vehicle.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' }, cursor: 'pointer' }}>
                                    <TableCell>{vehicle.name}</TableCell>
                                    <TableCell>{vehicle.model}</TableCell>
                                    <TableCell>{vehicle.number}</TableCell>
                                    <TableCell>{vehicle.color}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <Button
                        variant="contained"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </Button>
                    <Typography sx={{ margin: '0 10px', alignSelf: 'center' }}>
                        Page {currentPage} of {totalPages}
                    </Typography>
                    <Button
                        variant="contained"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Vehicles;
