const express = require("express");
const app = express();

// app.listen(3000, ()=> {
//     console.log("APP  is running successfully");
// })

// Import and Load connfig from env file
require("dotenv").config();
// const Port equal to "process.env.port" Or "4000"
const PORT = process.env.PORT || 4000;

// middleware to parse JSON request body
app.use(express.json());

// import routes for todo api
const todoroutes = require("./routes/todos");

// Mount the Todo API routes
app.use("/api/v1", todoroutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

// Connect to the DB
const dbConnect = require("./config/database");
dbConnect();

// Default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is Home Page</h1>`);
});
