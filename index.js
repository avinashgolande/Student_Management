import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import studentRoutes from './routes/StudentRoutes.js';  // Ensure to use .js extension

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
console.log('mongourl: ',process.env.MONGO_URI)
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
//app.use('/students', studentRoutes);
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//const express = require('express');
//const port = 3000;

// Simulated data for dropdown
const dropdownOptions = [
    { id: 1, value: 'First_Name' },
    { id: 2, value: 'Middle_Name' },
    { id: 3, value: 'Last_Name' },
    { id: 4, value: 'Gender' },
    { id: 5, value: 'Date_of_Birth' },
    { id: 6, value: 'Age' },
    { id: 7, value: 'Mobile_Number' },
    { id: 8, value: 'EmailId' },
    { id: 9, value: 'Religion' },
    { id: 10, value: 'Caste' },
    { id: 11, value: 'Address' },
    { id: 12, value: 'BloodGroup' }
];

// Endpoint to serve dropdown data
app.get('/dropdown-options', (req, res) => {
    res.json(dropdownOptions);
});

//app.listen(port, () => {
//    console.log(`Server running at http://localhost:${port}`);
//});
