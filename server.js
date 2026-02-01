//@ts-check
const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/api.tc');


app.use('/api', apiRoutes);