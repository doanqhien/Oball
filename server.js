require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//body parser
app.use(express.json());
//call port
const PORT = process.env.PORT;
//call server
app.listen(PORT, () => {
    console.log('Server is listening at', PORT)
})

