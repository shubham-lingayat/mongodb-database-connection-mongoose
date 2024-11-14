// Import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.getTodo = async (req, res) => {
  try {
    // Fetch all the data from DB
    // 'find' function is given from mongoose- allows to get data
    const todos = await Todo.find({});

    // Response
    res.status(200).json({
      sucess: true,
      data: todos,
      message: "Entire data is fetched",
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

// Define Router for single id - data
exports.getTodoById = async (req, res) => {
  try {
    // extract to item basis on id from URL
    const id = req.params.id;
    // use 'findById' function from mongoose - 
    // matching database id '_id' with our URL id 'id'
    const todo = await Todo.findById({ _id: id });

    // Data for given id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        messgae: "No data found with given Id",
      });
    }
    // Data for given id found
    else {
      res.status(200).json({
        success: true,
        data: todo,
        message: `Todo ${id} data successfully fetched`,
      });
    }
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
