import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import vehicleRoute from './routes/vehicleRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Test Route
app.get('/', (req, res) => {
    res.send('Express + PostgreSQL server is running!');
});

//API Routes
app.use('/api/vehicles', vehicleRoute);

//Server listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
