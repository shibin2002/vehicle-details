const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = 8000;

mongoose.connect("mongodb+srv://shibinshoukath0:shibin@cluster0.0rqh9.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0",{}
);

app.use(cors());

const companyRouter=require("./route/route");
app.use('/api',companyRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
});

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
});