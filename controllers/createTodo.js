// createTodo name ka ek object create karo aur usko DB me insert kardo!

// import the Schema from models
const Todo = require("../models/Todo");

// Define Route Handler
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;
    // Create a new ToDo Object and insert into DB
    // Below 'create' function is given by mongoose -
    // which supports the connection with database and help to -
    // inset data into the database
    const response = await Todo.create({ title, description });
    // send a JSON response with a Success Flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
