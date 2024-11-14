// import the model
const Todo = require("../models/Todo");

// define Router Handler.
exports.deleteTodo = async (req, res) => {
  try {
    // Export Id from the URL paramter from the request Url
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
