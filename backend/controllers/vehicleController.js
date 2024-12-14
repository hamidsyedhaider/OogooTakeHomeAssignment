import { pool } from "../db/index.js";

export const searchVehicles = async (req, res) => {
    const { page = 1, searchQuery = '' } = req.query; //Default to page 1 if no page is provided

    const VEHICLES_PER_PAGE = 15;
    
    const offset = (page - 1) * VEHICLES_PER_PAGE; //Calculate offset based on the page number

    try {
        //Make sure the search query is sanitized and ready for SQL (case-insensitive search)
        const searchFilter = `%${searchQuery}%`;

        //Query to get total count of vehicles that match the search query
        const totalVehiclesResult = await pool.query(
            'SELECT COUNT(*) FROM vehicles WHERE name ILIKE $1 OR model ILIKE $1 OR number ILIKE $1 OR color ILIKE $1',
            [searchFilter]
        );
        const totalVehicles = parseInt(totalVehiclesResult.rows[0].count, 10);

        //Query to fetch vehicles for the current page, with the search filter
        const vehiclesResult = await pool.query(
            'SELECT * FROM vehicles WHERE name ILIKE $1 OR model ILIKE $1 OR number ILIKE $1 OR color ILIKE $1 LIMIT $2 OFFSET $3',
            [searchFilter, VEHICLES_PER_PAGE, offset]
        );

        const totalPages = Math.ceil(totalVehicles / VEHICLES_PER_PAGE); // Calculate total pages
        
        //Send response with vehicles and pagination data
        res.json({
            vehicles: vehiclesResult.rows,
            totalVehicles,
            totalPages,
            currentPage: parseInt(page, 10),
        });
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).send('Server Error');
    }
};
