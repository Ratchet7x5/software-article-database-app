//Ratchet7x5: without this, the .env file is NOT read
//add something here...
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const connectDb = require("./database/mongodb");
const articles = require("./routes/articles");

// Connect MongoDB Atlas 
connectDb();

// Use middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/articles", articles);

// Server React build
//new func
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
//old func
/*app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})*/

// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

module.exports = app;