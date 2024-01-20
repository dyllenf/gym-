const express = require('express')
const connect = require("./database/connection")

require('dotenv').config({ path: "config.env" })
const PORT = 4000 || 8080

const app = express();
app.use(express.json());

// database connection
connect();

// routes
app.use('/api', require('./router/router'));

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:4000")
})

