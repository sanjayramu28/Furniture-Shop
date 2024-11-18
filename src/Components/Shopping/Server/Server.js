const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/formDataDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema and model
const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    country: String,
    houseNo: String,
    apartment: String,
    town: String,
    zipCode: String,
    phoneNo: String,
    productName:String,
    Qty:Number,
    TotalPrice:Number
});
const FormData = mongoose.model('FormData', formSchema, 'formdatas');

app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json();
    } catch (error) {
        res.status(400).json();
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
