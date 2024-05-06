const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticketRoutes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to database
mongoose.connect('mongodb+srv://Eric:eric@helpdesk.kvozikl.mongodb.net/?retryWrites=true&w=majority&appName=HelpDesk').then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.error('Error connecting to DB: ', err);
    process.exit(1);
});

// Use ticket routes
app.use("/api/tickets", ticketRoutes);

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});