// Import express using ESM syntax
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log('dotenv loaded:', process.env.MONGO_URI);
// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    // Start the server once MongoDB connection is established
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/contacts', contactRoutes); // Use contactRoutes for /contacts route
